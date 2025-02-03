const express = require('express');
const cors = require('cors');
const { faker } = require('@faker-js/faker');
const { times } = require('lodash');

const app = express();

app.use(cors());
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate mock data for 1000 users
const users = times(20000, (index) => ({
  id: index + 1,
  gender: faker.person.sex(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  age: randomInteger(10, 80),
  phone: faker.phone.number({ style: 'international' }),
  occupation: faker.person.jobTitle(),
  address: {
    street: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    zip: faker.location.zipCode(),
  },
}));

const cache = {}


// API endpoint to get users
app.get('/api/users', (req, res) => {
  const { page = 1, limit = 10, sortBy, sortDirection, ...filters } = req.query;

  const queryKey = JSON.stringify(req.query);

  if (cache[queryKey]) {
    return res.json(cache[queryKey]);
  }
  // Filter users if filter query param is provided
  let filteredUsers = users;

  if (filters && Object.keys(filters).length > 0) {
    filteredUsers = users.filter((user) => {
      return Object.entries(filters).every(([key, value]) => {
        try {
          const userValue = user[key].toString().toLowerCase();
          const filterValue = value.toString().toLowerCase();
          return userValue.includes(filterValue);

        } catch {
          return false;
        }
      });
    });
  }

  if (sortBy) {
    const direction = sortDirection === "asc" ? 1 : -1

    filteredUsers.sort((a, b) => {
      try {
        if (a[sortBy] < b[sortBy]) {
          return -1 * direction;
        }
        if (a[sortBy] > b[sortBy]) {
          return direction;
        }
        return 0;
      } catch {
        return 0;
      }
    });
  }
  // Paginate users
  const offset = (+page - 1) * +limit;
  const paginatedUsers = filteredUsers.slice(offset, offset + +limit);
  cache[queryKey] = {
    users: paginatedUsers,
    totalCount: filteredUsers.length,
  }
  // Return paginated users and total count
  res.json({
    users: paginatedUsers,
    totalCount: filteredUsers.length,
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});