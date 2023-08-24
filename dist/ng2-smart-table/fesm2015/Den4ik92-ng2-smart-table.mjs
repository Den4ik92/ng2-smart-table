import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, ViewContainerRef, ViewChild, ChangeDetectionStrategy, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@angular/forms';
import { FormsModule, UntypedFormControl, NgControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, skip, map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { HttpParams } from '@angular/common/http';

class EditCellDefault {
    constructor() {
        this.inputClass = '';
        this.edited = new EventEmitter();
    }
    onEdited(event) {
        this.edited.next(event);
        return false;
    }
    onStopEditing() {
        this.cell.getRow().isInEditing = false;
        return false;
    }
    onClick(event) {
        event.stopPropagation();
    }
}
EditCellDefault.ɵfac = function EditCellDefault_Factory(t) { return new (t || EditCellDefault)(); };
EditCellDefault.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EditCellDefault, selectors: [["ng-component"]], inputs: { cell: "cell", inputClass: "inputClass" }, outputs: { edited: "edited" }, decls: 0, vars: 0, template: function EditCellDefault_Template(rf, ctx) { }, encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EditCellDefault, [{
            type: Component,
            args: [{
                    template: ''
                }]
        }], null, { cell: [{
                type: Input
            }], inputClass: [{
                type: Input
            }], edited: [{
                type: Output
            }] });
})();

const _c0$c = ["dynamicTarget"];
function CustomEditComponent_ng_template_0_Template(rf, ctx) { }
class CustomEditComponent extends EditCellDefault {
    constructor(resolver) {
        super();
        this.resolver = resolver;
    }
    ngOnChanges(changes) {
        if (this.cell && !this.customComponent) {
            const componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().editor.component);
            this.customComponent = this.dynamicTarget.createComponent(componentFactory);
            // set @Inputs and @Outputs of custom component
            this.customComponent.instance.cell = this.cell;
            this.customComponent.instance.inputClass = this.inputClass;
            this.customComponent.instance.onStopEditing.subscribe(() => this.onStopEditing());
            this.customComponent.instance.onEdited.subscribe((event) => this.onEdited(event));
            this.customComponent.instance.onClick.subscribe((event) => this.onClick(event));
        }
    }
    ngOnDestroy() {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
    }
}
CustomEditComponent.ɵfac = function CustomEditComponent_Factory(t) { return new (t || CustomEditComponent)(i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver)); };
CustomEditComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CustomEditComponent, selectors: [["table-cell-custom-editor"]], viewQuery: function CustomEditComponent_Query(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵviewQuery(_c0$c, 7, ViewContainerRef);
        }
        if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dynamicTarget = _t.first);
        }
    }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 2, vars: 0, consts: [["dynamicTarget", ""]], template: function CustomEditComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, CustomEditComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        }
    }, encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CustomEditComponent, [{
            type: Component,
            args: [{
                    selector: 'table-cell-custom-editor',
                    template: `
    <ng-template #dynamicTarget></ng-template>
  `,
                }]
        }], function () { return [{ type: i0.ComponentFactoryResolver }]; }, { dynamicTarget: [{
                type: ViewChild,
                args: ['dynamicTarget', { read: ViewContainerRef, static: true }]
            }] });
})();

class DefaultEditor {
    constructor() {
        this.onStopEditing = new EventEmitter();
        this.onEdited = new EventEmitter();
        this.onClick = new EventEmitter();
    }
}
DefaultEditor.ɵfac = function DefaultEditor_Factory(t) { return new (t || DefaultEditor)(); };
DefaultEditor.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DefaultEditor, selectors: [["ng-component"]], inputs: { cell: "cell", inputClass: "inputClass" }, outputs: { onStopEditing: "onStopEditing", onEdited: "onEdited", onClick: "onClick" }, decls: 0, vars: 0, template: function DefaultEditor_Template(rf, ctx) { }, encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DefaultEditor, [{
            type: Component,
            args: [{
                    template: '',
                }]
        }], null, { cell: [{
                type: Input
            }], inputClass: [{
                type: Input
            }], onStopEditing: [{
                type: Output
            }], onEdited: [{
                type: Output
            }], onClick: [{
                type: Output
            }] });
})();

class CheckboxEditorComponent extends DefaultEditor {
    constructor() {
        super();
    }
    onChange(event) {
        const trueVal = (this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().true) || true;
        const falseVal = (this.cell.getColumn().getConfig() && this.cell.getColumn().getConfig().false) || false;
        this.cell.newValue = event.target.checked ? trueVal : falseVal;
    }
}
CheckboxEditorComponent.ɵfac = function CheckboxEditorComponent_Factory(t) { return new (t || CheckboxEditorComponent)(); };
CheckboxEditorComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CheckboxEditorComponent, selectors: [["checkbox-editor"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 4, consts: [["type", "checkbox", 1, "form-control", 3, "ngClass", "name", "disabled", "checked", "click", "change"]], template: function CheckboxEditorComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "input", 0);
            i0.ɵɵlistener("click", function CheckboxEditorComponent_Template_input_click_0_listener($event) { return ctx.onClick.emit($event); })("change", function CheckboxEditorComponent_Template_input_change_0_listener($event) { return ctx.onChange($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            let tmp_3_0;
            i0.ɵɵproperty("ngClass", ctx.inputClass)("name", ctx.cell.getId())("disabled", !ctx.cell.isEditable())("checked", ctx.cell.getValue() == (((tmp_3_0 = ctx.cell.getColumn().getConfig()) == null ? null : tmp_3_0.true) || true));
        }
    }, dependencies: [i1.NgClass], styles: ["[_nghost-%COMP%]   input[_ngcontent-%COMP%], [_nghost-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;line-height:normal;padding:.375em .75em}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CheckboxEditorComponent, [{
            type: Component,
            args: [{ selector: 'checkbox-editor', template: `
    <input [ngClass]="inputClass"
           type="checkbox"
           class="form-control"
           [name]="cell.getId()"
           [disabled]="!cell.isEditable()"
           [checked]="cell.getValue() == (cell.getColumn().getConfig()?.true || true)"
           (click)="onClick.emit($event)"
           (change)="onChange($event)">
    `, styles: [":host input,:host textarea{width:100%;line-height:normal;padding:.375em .75em}\n"] }]
        }], function () { return []; }, null);
})();

class CompleterEditorComponent extends DefaultEditor {
    constructor() {
        super();
        this.completerStr = '';
    }
    ngOnInit() {
        // if (this.cell.getColumn().editor && this.cell.getColumn().editor.type === 'completer') {
        //   const config = this.cell.getColumn().getConfig().completer;
        //   config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
        //   config.dataService.descriptionField(config.descriptionField);
        // }
    }
    onEditedCompleter(event) {
        this.cell.newValue = event.title;
        return false;
    }
}
CompleterEditorComponent.ɵfac = function CompleterEditorComponent_Factory(t) { return new (t || CompleterEditorComponent)(); };
CompleterEditorComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CompleterEditorComponent, selectors: [["completer-editor"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function CompleterEditorComponent_Template(rf, ctx) { }, encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CompleterEditorComponent, [{
            type: Component,
            args: [{
                    selector: 'completer-editor',
                    template: `
    <!-- <ng2-completer [(ngModel)]="completerStr"
                   [dataService]="cell.getColumn().getConfig().completer.dataService"
                   [minSearchLength]="cell.getColumn().getConfig().completer.minSearchLength || 0"
                   [pause]="cell.getColumn().getConfig().completer.pause || 0"
                   [placeholder]="cell.getColumn().getConfig().completer.placeholder || 'Start typing...'"
                   (selected)="onEditedCompleter($event)">
    </ng2-completer> -->
    `,
                }]
        }], function () { return []; }, null);
})();

class InputEditorComponent extends DefaultEditor {
    constructor() {
        super();
    }
}
InputEditorComponent.ɵfac = function InputEditorComponent_Factory(t) { return new (t || InputEditorComponent)(); };
InputEditorComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputEditorComponent, selectors: [["input-editor"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 5, consts: [[1, "form-control", 3, "ngClass", "ngModel", "name", "placeholder", "disabled", "ngModelChange", "click", "keydown.enter", "keydown.esc"]], template: function InputEditorComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "input", 0);
            i0.ɵɵlistener("ngModelChange", function InputEditorComponent_Template_input_ngModelChange_0_listener($event) { return ctx.cell.newValue = $event; })("click", function InputEditorComponent_Template_input_click_0_listener($event) { return ctx.onClick.emit($event); })("keydown.enter", function InputEditorComponent_Template_input_keydown_enter_0_listener($event) { return ctx.onEdited.emit($event); })("keydown.esc", function InputEditorComponent_Template_input_keydown_esc_0_listener() { return ctx.onStopEditing.emit(); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.inputClass)("ngModel", ctx.cell.newValue)("name", ctx.cell.getId())("placeholder", ctx.cell.getTitle())("disabled", !ctx.cell.isEditable());
        }
    }, dependencies: [i1.NgClass, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel], styles: ["[_nghost-%COMP%]   input[_ngcontent-%COMP%], [_nghost-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;line-height:normal;padding:.375em .75em}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputEditorComponent, [{
            type: Component,
            args: [{ selector: 'input-editor', template: `
    <input [ngClass]="inputClass"
           class="form-control"
           [(ngModel)]="cell.newValue"
           [name]="cell.getId()"
           [placeholder]="cell.getTitle()"
           [disabled]="!cell.isEditable()"
           (click)="onClick.emit($event)"
           (keydown.enter)="onEdited.emit($event)"
           (keydown.esc)="onStopEditing.emit()">
    `, styles: [":host input,:host textarea{width:100%;line-height:normal;padding:.375em .75em}\n"] }]
        }], function () { return []; }, null);
})();

function SelectEditorComponent_option_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "option", 2);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const option_r1 = ctx.$implicit;
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵproperty("value", option_r1.value)("selected", option_r1.value === ctx_r0.cell.getValue());
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1("", option_r1.title, " ");
    }
}
class SelectEditorComponent extends DefaultEditor {
    constructor() {
        super();
    }
}
SelectEditorComponent.ɵfac = function SelectEditorComponent_Factory(t) { return new (t || SelectEditorComponent)(); };
SelectEditorComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SelectEditorComponent, selectors: [["select-editor"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 5, consts: [[1, "form-control", 3, "ngClass", "ngModel", "name", "disabled", "ngModelChange", "click", "keydown.enter", "keydown.esc"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value", "selected"]], template: function SelectEditorComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "select", 0);
            i0.ɵɵlistener("ngModelChange", function SelectEditorComponent_Template_select_ngModelChange_0_listener($event) { return ctx.cell.newValue = $event; })("click", function SelectEditorComponent_Template_select_click_0_listener($event) { return ctx.onClick.emit($event); })("keydown.enter", function SelectEditorComponent_Template_select_keydown_enter_0_listener($event) { return ctx.onEdited.emit($event); })("keydown.esc", function SelectEditorComponent_Template_select_keydown_esc_0_listener() { return ctx.onStopEditing.emit(); });
            i0.ɵɵtemplate(1, SelectEditorComponent_option_1_Template, 2, 3, "option", 1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            let tmp_4_0;
            i0.ɵɵproperty("ngClass", ctx.inputClass)("ngModel", ctx.cell.newValue)("name", ctx.cell.getId())("disabled", !ctx.cell.isEditable());
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", (tmp_4_0 = ctx.cell.getColumn().getConfig()) == null ? null : tmp_4_0.list);
        }
    }, dependencies: [i1.NgClass, i1.NgForOf, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgModel], encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectEditorComponent, [{
            type: Component,
            args: [{
                    selector: 'select-editor',
                    template: `
    <select [ngClass]="inputClass"
            class="form-control"
            [(ngModel)]="cell.newValue"
            [name]="cell.getId()"
            [disabled]="!cell.isEditable()"
            (click)="onClick.emit($event)"
            (keydown.enter)="onEdited.emit($event)"
            (keydown.esc)="onStopEditing.emit()">

        <option *ngFor="let option of cell.getColumn().getConfig()?.list" [value]="option.value"
                [selected]="option.value === cell.getValue()">{{ option.title }}
        </option>
    </select>
    `,
                }]
        }], function () { return []; }, null);
})();

class TextareaEditorComponent extends DefaultEditor {
    constructor() {
        super();
    }
}
TextareaEditorComponent.ɵfac = function TextareaEditorComponent_Factory(t) { return new (t || TextareaEditorComponent)(); };
TextareaEditorComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TextareaEditorComponent, selectors: [["textarea-editor"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 5, consts: [[1, "form-control", 3, "ngClass", "ngModel", "name", "disabled", "placeholder", "ngModelChange", "click", "keydown.enter", "keydown.esc"]], template: function TextareaEditorComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "textarea", 0);
            i0.ɵɵlistener("ngModelChange", function TextareaEditorComponent_Template_textarea_ngModelChange_0_listener($event) { return ctx.cell.newValue = $event; })("click", function TextareaEditorComponent_Template_textarea_click_0_listener($event) { return ctx.onClick.emit($event); })("keydown.enter", function TextareaEditorComponent_Template_textarea_keydown_enter_0_listener($event) { return ctx.onEdited.emit($event); })("keydown.esc", function TextareaEditorComponent_Template_textarea_keydown_esc_0_listener() { return ctx.onStopEditing.emit(); });
            i0.ɵɵtext(1, "    ");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.inputClass)("ngModel", ctx.cell.newValue)("name", ctx.cell.getId())("disabled", !ctx.cell.isEditable())("placeholder", ctx.cell.getTitle());
        }
    }, dependencies: [i1.NgClass, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel], styles: ["[_nghost-%COMP%]   input[_ngcontent-%COMP%], [_nghost-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;line-height:normal;padding:.375em .75em}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TextareaEditorComponent, [{
            type: Component,
            args: [{ selector: 'textarea-editor', template: `
    <textarea [ngClass]="inputClass"
              class="form-control"
              [(ngModel)]="cell.newValue"
              [name]="cell.getId()"
              [disabled]="!cell.isEditable()"
              [placeholder]="cell.getTitle()"
              (click)="onClick.emit($event)"
              (keydown.enter)="onEdited.emit($event)"
              (keydown.esc)="onStopEditing.emit()">
    </textarea>
    `, styles: [":host input,:host textarea{width:100%;line-height:normal;padding:.375em .75em}\n"] }]
        }], function () { return []; }, null);
})();

function DefaultEditComponent_select_editor_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r6 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "select-editor", 5);
        i0.ɵɵlistener("onClick", function DefaultEditComponent_select_editor_1_Template_select_editor_onClick_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.onClick($event)); })("onEdited", function DefaultEditComponent_select_editor_1_Template_select_editor_onEdited_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.onEdited($event)); })("onStopEditing", function DefaultEditComponent_select_editor_1_Template_select_editor_onStopEditing_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.onStopEditing()); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵproperty("cell", ctx_r0.cell)("inputClass", ctx_r0.inputClass);
    }
}
function DefaultEditComponent_textarea_editor_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r10 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "textarea-editor", 5);
        i0.ɵɵlistener("onClick", function DefaultEditComponent_textarea_editor_2_Template_textarea_editor_onClick_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r9.onClick($event)); })("onEdited", function DefaultEditComponent_textarea_editor_2_Template_textarea_editor_onEdited_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r11 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r11.onEdited($event)); })("onStopEditing", function DefaultEditComponent_textarea_editor_2_Template_textarea_editor_onStopEditing_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r12 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r12.onStopEditing()); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵproperty("cell", ctx_r1.cell)("inputClass", ctx_r1.inputClass);
    }
}
function DefaultEditComponent_checkbox_editor_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r14 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "checkbox-editor", 6);
        i0.ɵɵlistener("onClick", function DefaultEditComponent_checkbox_editor_3_Template_checkbox_editor_onClick_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r13.onClick($event)); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵproperty("cell", ctx_r2.cell)("inputClass", ctx_r2.inputClass);
    }
}
function DefaultEditComponent_completer_editor_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "completer-editor", 7);
    }
    if (rf & 2) {
        const ctx_r3 = i0.ɵɵnextContext();
        i0.ɵɵproperty("cell", ctx_r3.cell);
    }
}
function DefaultEditComponent_input_editor_5_Template(rf, ctx) {
    if (rf & 1) {
        const _r16 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "input-editor", 5);
        i0.ɵɵlistener("onClick", function DefaultEditComponent_input_editor_5_Template_input_editor_onClick_0_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r15.onClick($event)); })("onEdited", function DefaultEditComponent_input_editor_5_Template_input_editor_onEdited_0_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r17 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r17.onEdited($event)); })("onStopEditing", function DefaultEditComponent_input_editor_5_Template_input_editor_onStopEditing_0_listener() { i0.ɵɵrestoreView(_r16); const ctx_r18 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r18.onStopEditing()); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r4 = i0.ɵɵnextContext();
        i0.ɵɵproperty("cell", ctx_r4.cell)("inputClass", ctx_r4.inputClass);
    }
}
class DefaultEditComponent extends EditCellDefault {
    constructor() {
        super();
    }
    getEditorType() {
        return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
    }
}
DefaultEditComponent.ɵfac = function DefaultEditComponent_Factory(t) { return new (t || DefaultEditComponent)(); };
DefaultEditComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DefaultEditComponent, selectors: [["table-cell-default-editor"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 5, consts: [[3, "ngSwitch"], [3, "cell", "inputClass", "onClick", "onEdited", "onStopEditing", 4, "ngSwitchCase"], [3, "cell", "inputClass", "onClick", 4, "ngSwitchCase"], [3, "cell", 4, "ngSwitchCase"], [3, "cell", "inputClass", "onClick", "onEdited", "onStopEditing", 4, "ngSwitchDefault"], [3, "cell", "inputClass", "onClick", "onEdited", "onStopEditing"], [3, "cell", "inputClass", "onClick"], [3, "cell"]], template: function DefaultEditComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, DefaultEditComponent_select_editor_1_Template, 1, 2, "select-editor", 1);
            i0.ɵɵtemplate(2, DefaultEditComponent_textarea_editor_2_Template, 1, 2, "textarea-editor", 1);
            i0.ɵɵtemplate(3, DefaultEditComponent_checkbox_editor_3_Template, 1, 2, "checkbox-editor", 2);
            i0.ɵɵtemplate(4, DefaultEditComponent_completer_editor_4_Template, 1, 1, "completer-editor", 3);
            i0.ɵɵtemplate(5, DefaultEditComponent_input_editor_5_Template, 1, 2, "input-editor", 4);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵproperty("ngSwitch", ctx.getEditorType());
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "list");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "textarea");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "checkbox");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "completer");
        }
    }, dependencies: [i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, CheckboxEditorComponent, CompleterEditorComponent, InputEditorComponent, SelectEditorComponent, TextareaEditorComponent], encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DefaultEditComponent, [{
            type: Component,
            args: [{ selector: 'table-cell-default-editor', template: "<div [ngSwitch]=\"getEditorType()\">\n    <select-editor *ngSwitchCase=\"'list'\"\n                   [cell]=\"cell\"\n                   [inputClass]=\"inputClass\"\n                   (onClick)=\"onClick($event)\"\n                   (onEdited)=\"onEdited($event)\"\n                   (onStopEditing)=\"onStopEditing()\">\n    </select-editor>\n\n    <textarea-editor *ngSwitchCase=\"'textarea'\"\n                     [cell]=\"cell\"\n                     [inputClass]=\"inputClass\"\n                     (onClick)=\"onClick($event)\"\n                     (onEdited)=\"onEdited($event)\"\n                     (onStopEditing)=\"onStopEditing()\">\n    </textarea-editor>\n\n    <checkbox-editor *ngSwitchCase=\"'checkbox'\"\n                     [cell]=\"cell\"\n                     [inputClass]=\"inputClass\"\n                     (onClick)=\"onClick($event)\">\n    </checkbox-editor>\n\n    <completer-editor *ngSwitchCase=\"'completer'\"\n                      [cell]=\"cell\">\n    </completer-editor>\n\n    <input-editor *ngSwitchDefault\n                  [cell]=\"cell\"\n                  [inputClass]=\"inputClass\"\n                  (onClick)=\"onClick($event)\"\n                  (onEdited)=\"onEdited($event)\"\n                  (onStopEditing)=\"onStopEditing()\">\n    </input-editor>\n</div>" }]
        }], function () { return []; }, null);
})();

function EditCellComponent_table_cell_custom_editor_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r3 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "table-cell-custom-editor", 3);
        i0.ɵɵlistener("edited", function EditCellComponent_table_cell_custom_editor_1_Template_table_cell_custom_editor_edited_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onEdited($event)); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵproperty("cell", ctx_r0.cell)("inputClass", ctx_r0.inputClass);
    }
}
function EditCellComponent_table_cell_default_editor_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "table-cell-default-editor", 3);
        i0.ɵɵlistener("edited", function EditCellComponent_table_cell_default_editor_2_Template_table_cell_default_editor_edited_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.onEdited($event)); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵproperty("cell", ctx_r1.cell)("inputClass", ctx_r1.inputClass);
    }
}
class EditCellComponent {
    constructor() {
        this.inputClass = '';
        this.edited = new EventEmitter();
    }
    onEdited(event) {
        this.edited.next(event);
        return false;
    }
    getEditorType() {
        return this.cell.getColumn().editor && this.cell.getColumn().editor.type;
    }
}
EditCellComponent.ɵfac = function EditCellComponent_Factory(t) { return new (t || EditCellComponent)(); };
EditCellComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: EditCellComponent, selectors: [["table-cell-edit-mode"]], inputs: { cell: "cell", inputClass: "inputClass" }, outputs: { edited: "edited" }, decls: 3, vars: 2, consts: [[3, "ngSwitch"], [3, "cell", "inputClass", "edited", 4, "ngSwitchCase"], [3, "cell", "inputClass", "edited", 4, "ngSwitchDefault"], [3, "cell", "inputClass", "edited"]], template: function EditCellComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, EditCellComponent_table_cell_custom_editor_1_Template, 1, 2, "table-cell-custom-editor", 1);
            i0.ɵɵtemplate(2, EditCellComponent_table_cell_default_editor_2_Template, 1, 2, "table-cell-default-editor", 2);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵproperty("ngSwitch", ctx.getEditorType());
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "custom");
        }
    }, dependencies: [i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, CustomEditComponent, DefaultEditComponent], encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EditCellComponent, [{
            type: Component,
            args: [{
                    selector: 'table-cell-edit-mode',
                    template: `
      <div [ngSwitch]="getEditorType()">
        <table-cell-custom-editor *ngSwitchCase="'custom'"
                                  [cell]="cell"
                                  [inputClass]="inputClass"
                                  (edited)="onEdited($event)">
        </table-cell-custom-editor>
        <table-cell-default-editor *ngSwitchDefault
                                  [cell]="cell"
                                  [inputClass]="inputClass"
                                  (edited)="onEdited($event)">
        </table-cell-default-editor>
      </div>
    `,
                }]
        }], null, { cell: [{
                type: Input
            }], inputClass: [{
                type: Input
            }], edited: [{
                type: Output
            }] });
})();

const _c0$b = ["dynamicTarget"];
function CustomViewComponent_ng_template_0_Template(rf, ctx) { }
class CustomViewComponent {
    constructor(resolver) {
        this.resolver = resolver;
    }
    ngOnInit() {
        if (this.cell && !this.customComponent) {
            this.createCustomComponent();
            this.callOnComponentInit();
            this.patchInstance();
        }
    }
    ngOnDestroy() {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
    }
    createCustomComponent() {
        const componentFactory = this.resolver.resolveComponentFactory(this.cell.getColumn().renderComponent);
        this.customComponent = this.dynamicTarget.createComponent(componentFactory);
    }
    callOnComponentInit() {
        const onComponentInitFunction = this.cell.getColumn().getOnComponentInitFunction();
        onComponentInitFunction && onComponentInitFunction(this.customComponent.instance);
    }
    patchInstance() {
        Object.assign(this.customComponent.instance, this.getPatch());
    }
    getPatch() {
        return {
            value: this.cell.getValue(),
            rowData: this.cell.getRow().getData()
        };
    }
}
CustomViewComponent.ɵfac = function CustomViewComponent_Factory(t) { return new (t || CustomViewComponent)(i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver)); };
CustomViewComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CustomViewComponent, selectors: [["custom-view-component"]], viewQuery: function CustomViewComponent_Query(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵviewQuery(_c0$b, 7, ViewContainerRef);
        }
        if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dynamicTarget = _t.first);
        }
    }, inputs: { cell: "cell" }, decls: 2, vars: 0, consts: [["dynamicTarget", ""]], template: function CustomViewComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, CustomViewComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        }
    }, encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CustomViewComponent, [{
            type: Component,
            args: [{
                    selector: 'custom-view-component',
                    template: `
    <ng-template #dynamicTarget></ng-template>
  `,
                }]
        }], function () { return [{ type: i0.ComponentFactoryResolver }]; }, { cell: [{
                type: Input
            }], dynamicTarget: [{
                type: ViewChild,
                args: ['dynamicTarget', { read: ViewContainerRef, static: true }]
            }] });
})();

function ViewCellComponent_custom_view_component_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "custom-view-component", 4);
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵproperty("cell", ctx_r0.cell);
    }
}
function ViewCellComponent_div_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "div", 5);
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵproperty("innerHTML", ctx_r1.cell.getValue(), i0.ɵɵsanitizeHtml);
    }
}
function ViewCellComponent_div_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx_r2.cell.getValue());
    }
}
class ViewCellComponent {
}
ViewCellComponent.ɵfac = function ViewCellComponent_Factory(t) { return new (t || ViewCellComponent)(); };
ViewCellComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ViewCellComponent, selectors: [["table-cell-view-mode"]], inputs: { cell: "cell" }, decls: 4, vars: 3, consts: [[3, "ngSwitch"], [3, "cell", 4, "ngSwitchCase"], [3, "innerHTML", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "cell"], [3, "innerHTML"]], template: function ViewCellComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtemplate(1, ViewCellComponent_custom_view_component_1_Template, 1, 1, "custom-view-component", 1);
            i0.ɵɵtemplate(2, ViewCellComponent_div_2_Template, 1, 1, "div", 2);
            i0.ɵɵtemplate(3, ViewCellComponent_div_3_Template, 2, 1, "div", 3);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵproperty("ngSwitch", ctx.cell.getColumn().type);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "custom");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "html");
        }
    }, dependencies: [i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, CustomViewComponent], encapsulation: 2, changeDetection: 0 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ViewCellComponent, [{
            type: Component,
            args: [{
                    selector: 'table-cell-view-mode',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: `
    <div [ngSwitch]="cell.getColumn().type">
        <custom-view-component *ngSwitchCase="'custom'" [cell]="cell"></custom-view-component>
        <div *ngSwitchCase="'html'" [innerHTML]="cell.getValue()"></div>
        <div *ngSwitchDefault>{{ cell.getValue() }}</div>
    </div>
    `,
                }]
        }], null, { cell: [{
                type: Input
            }] });
})();

function CellComponent_table_cell_view_mode_0_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "table-cell-view-mode", 2);
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵproperty("cell", ctx_r0.cell);
    }
}
function CellComponent_table_cell_edit_mode_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r3 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "table-cell-edit-mode", 3);
        i0.ɵɵlistener("edited", function CellComponent_table_cell_edit_mode_1_Template_table_cell_edit_mode_edited_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onEdited($event)); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵproperty("cell", ctx_r1.cell)("inputClass", ctx_r1.inputClass);
    }
}
class CellComponent {
    constructor() {
        this.inputClass = '';
        this.mode = 'inline';
        this.isInEditing = false;
        this.edited = new EventEmitter();
    }
    onEdited(event) {
        if (this.isNew) {
            this.grid.create(this.grid.getNewRow(), this.createConfirm);
        }
        else {
            this.grid.save(this.row, this.editConfirm);
        }
    }
}
CellComponent.ɵfac = function CellComponent_Factory(t) { return new (t || CellComponent)(); };
CellComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CellComponent, selectors: [["ng2-smart-table-cell"]], inputs: { grid: "grid", row: "row", editConfirm: "editConfirm", createConfirm: "createConfirm", isNew: "isNew", cell: "cell", inputClass: "inputClass", mode: "mode", isInEditing: "isInEditing" }, outputs: { edited: "edited" }, decls: 2, vars: 2, consts: [[3, "cell", 4, "ngIf"], [3, "cell", "inputClass", "edited", 4, "ngIf"], [3, "cell"], [3, "cell", "inputClass", "edited"]], template: function CellComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, CellComponent_table_cell_view_mode_0_Template, 1, 1, "table-cell-view-mode", 0);
            i0.ɵɵtemplate(1, CellComponent_table_cell_edit_mode_1_Template, 1, 2, "table-cell-edit-mode", 1);
        }
        if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.isInEditing);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.isInEditing);
        }
    }, dependencies: [i1.NgIf, EditCellComponent, ViewCellComponent], encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CellComponent, [{
            type: Component,
            args: [{
                    selector: 'ng2-smart-table-cell',
                    template: `
    <table-cell-view-mode *ngIf="!isInEditing" [cell]="cell"></table-cell-view-mode>
    <table-cell-edit-mode *ngIf="isInEditing" [cell]="cell"
                          [inputClass]="inputClass"
                          (edited)="onEdited($event)">
    </table-cell-edit-mode>
  `,
                }]
        }], null, { grid: [{
                type: Input
            }], row: [{
                type: Input
            }], editConfirm: [{
                type: Input
            }], createConfirm: [{
                type: Input
            }], isNew: [{
                type: Input
            }], cell: [{
                type: Input
            }], inputClass: [{
                type: Input
            }], mode: [{
                type: Input
            }], isInEditing: [{
                type: Input
            }], edited: [{
                type: Output
            }] });
})();

const CELL_COMPONENTS = [
    CellComponent,
    EditCellDefault,
    DefaultEditor,
    CustomEditComponent,
    DefaultEditComponent,
    EditCellComponent,
    CheckboxEditorComponent,
    CompleterEditorComponent,
    InputEditorComponent,
    SelectEditorComponent,
    TextareaEditorComponent,
    CustomViewComponent,
    ViewCellComponent,
];
class CellModule {
}
CellModule.ɵfac = function CellModule_Factory(t) { return new (t || CellModule)(); };
CellModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CellModule });
CellModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
        FormsModule] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CellModule, [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                    ],
                    declarations: [
                        ...CELL_COMPONENTS,
                    ],
                    exports: [
                        ...CELL_COMPONENTS,
                    ],
                }]
        }], null, null);
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CellModule, { declarations: [CellComponent,
            EditCellDefault,
            DefaultEditor,
            CustomEditComponent,
            DefaultEditComponent,
            EditCellComponent,
            CheckboxEditorComponent,
            CompleterEditorComponent,
            InputEditorComponent,
            SelectEditorComponent,
            TextareaEditorComponent,
            CustomViewComponent,
            ViewCellComponent], imports: [CommonModule,
            FormsModule], exports: [CellComponent,
            EditCellDefault,
            DefaultEditor,
            CustomEditComponent,
            DefaultEditComponent,
            EditCellComponent,
            CheckboxEditorComponent,
            CompleterEditorComponent,
            InputEditorComponent,
            SelectEditorComponent,
            TextareaEditorComponent,
            CustomViewComponent,
            ViewCellComponent] });
})();

class FilterDefault {
    constructor() {
        this.inputClass = '';
        this.filter = new EventEmitter();
        this.query = '';
    }
    onFilter(query) {
        this.source.addFilter({
            field: this.column.id,
            search: query,
            filter: this.column.getFilterFunction(),
        });
    }
}
FilterDefault.ɵfac = function FilterDefault_Factory(t) { return new (t || FilterDefault)(); };
FilterDefault.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FilterDefault, selectors: [["ng-component"]], inputs: { column: "column", source: "source", inputClass: "inputClass" }, outputs: { filter: "filter" }, decls: 0, vars: 0, template: function FilterDefault_Template(rf, ctx) { }, encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterDefault, [{
            type: Component,
            args: [{
                    template: '',
                }]
        }], null, { column: [{
                type: Input
            }], source: [{
                type: Input
            }], inputClass: [{
                type: Input
            }], filter: [{
                type: Output
            }] });
})();

class DefaultFilter {
    constructor() {
        this.delay = 300;
        this.filter = new EventEmitter();
    }
    ngOnDestroy() {
        if (this.changesSubscription) {
            this.changesSubscription.unsubscribe();
        }
    }
    setFilter() {
        this.filter.emit(this.query);
    }
}
DefaultFilter.ɵfac = function DefaultFilter_Factory(t) { return new (t || DefaultFilter)(); };
DefaultFilter.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DefaultFilter, selectors: [["ng-component"]], inputs: { query: "query", inputClass: "inputClass", column: "column" }, outputs: { filter: "filter" }, decls: 0, vars: 0, template: function DefaultFilter_Template(rf, ctx) { }, encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DefaultFilter, [{
            type: Component,
            args: [{
                    template: '',
                }]
        }], null, { query: [{
                type: Input
            }], inputClass: [{
                type: Input
            }], column: [{
                type: Input
            }], filter: [{
                type: Output
            }] });
})();

function CheckboxFilterComponent_a_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r2 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "a", 2);
        i0.ɵɵlistener("click", function CheckboxFilterComponent_a_1_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.resetFilter($event)); });
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        let tmp_0_0;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(((tmp_0_0 = ctx_r0.column.getFilterConfig()) == null ? null : tmp_0_0.resetText) || "reset");
    }
}
class CheckboxFilterComponent extends DefaultFilter {
    constructor() {
        super();
        this.filterActive = false;
        this.inputControl = new UntypedFormControl();
    }
    ngOnInit() {
        this.changesSubscription = this.inputControl.valueChanges
            .pipe(debounceTime(this.delay))
            .subscribe((checked) => {
            this.filterActive = true;
            const trueVal = (this.column.getFilterConfig() && this.column.getFilterConfig().true) || true;
            const falseVal = (this.column.getFilterConfig() && this.column.getFilterConfig().false) || false;
            this.query = checked ? trueVal : falseVal;
            this.setFilter();
        });
    }
    resetFilter(event) {
        event.preventDefault();
        this.query = '';
        this.inputControl.setValue(false, { emitEvent: false });
        this.filterActive = false;
        this.setFilter();
    }
}
CheckboxFilterComponent.ɵfac = function CheckboxFilterComponent_Factory(t) { return new (t || CheckboxFilterComponent)(); };
CheckboxFilterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CheckboxFilterComponent, selectors: [["checkbox-filter"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 3, consts: [["type", "checkbox", 1, "form-control", 3, "formControl", "ngClass"], ["href", "#", 3, "click", 4, "ngIf"], ["href", "#", 3, "click"]], template: function CheckboxFilterComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "input", 0);
            i0.ɵɵtemplate(1, CheckboxFilterComponent_a_1_Template, 2, 1, "a", 1);
        }
        if (rf & 2) {
            i0.ɵɵproperty("formControl", ctx.inputControl)("ngClass", ctx.inputClass);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.filterActive);
        }
    }, dependencies: [i1.NgClass, i1.NgIf, i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.FormControlDirective], encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CheckboxFilterComponent, [{
            type: Component,
            args: [{
                    selector: 'checkbox-filter',
                    template: `
    <input type="checkbox" [formControl]="inputControl" [ngClass]="inputClass" class="form-control">
    <a href="#" *ngIf="filterActive"
                (click)="resetFilter($event)">{{column.getFilterConfig()?.resetText || 'reset'}}</a>
  `,
                }]
        }], function () { return []; }, null);
})();

class CompleterFilterComponent extends DefaultFilter {
    constructor() {
        super();
        this.completerContent = new Subject();
    }
    ngOnInit() {
        // const config = this.column.getFilterConfig().completer;
        // config.dataService = this.completerService.local(config.data, config.searchFields, config.titleField);
        // config.dataService.descriptionField(config.descriptionField);
        // this.changesSubscription = this.completerContent
        //   .pipe(
        //     map((ev: any) => (ev && ev.title) || ev || ''),
        //     distinctUntilChanged(),
        //     debounceTime(this.delay)
        //   )
        //   .subscribe((search: string) => {
        //     this.query = search;
        //     this.setFilter();
        //   });
    }
    inputTextChanged(event) {
        // workaround to trigger the search event when the home/end buttons are clicked
        // when this happens the [(ngModel)]="query" is set to "" but the (selected) method is not called
        // so here it gets called manually
        if (event === '') {
            this.completerContent.next(event);
        }
    }
}
CompleterFilterComponent.ɵfac = function CompleterFilterComponent_Factory(t) { return new (t || CompleterFilterComponent)(); };
CompleterFilterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CompleterFilterComponent, selectors: [["completer-filter"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 0, vars: 0, template: function CompleterFilterComponent_Template(rf, ctx) { }, encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CompleterFilterComponent, [{
            type: Component,
            args: [{
                    selector: 'completer-filter',
                    template: `
    <!-- <ng2-completer [(ngModel)]="query"
                   (ngModelChange)="inputTextChanged($event)"
                   [dataService]="column.getFilterConfig().completer.dataService"
                   [minSearchLength]="column.getFilterConfig().completer.minSearchLength || 0"
                   [pause]="column.getFilterConfig().completer.pause || 0"
                   [placeholder]="column.getFilterConfig().completer.placeholder || 'Start typing...'"
                   (selected)="completerContent.next($event)">
    </ng2-completer> -->
  `,
                }]
        }], function () { return []; }, null);
})();

class InputFilterComponent extends DefaultFilter {
    constructor() {
        super();
        this.inputControl = new UntypedFormControl();
    }
    ngOnInit() {
        if (this.query) {
            this.inputControl.setValue(this.query);
        }
        this.inputControl.valueChanges
            .pipe(distinctUntilChanged(), debounceTime(this.delay))
            .subscribe((value) => {
            this.query = this.inputControl.value;
            this.setFilter();
        });
    }
    ngOnChanges(changes) {
        if (changes.query) {
            this.inputControl.setValue(this.query);
        }
    }
}
InputFilterComponent.ɵfac = function InputFilterComponent_Factory(t) { return new (t || InputFilterComponent)(); };
InputFilterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputFilterComponent, selectors: [["input-filter"]], features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 1, vars: 3, consts: [["type", "text", 1, "form-control", 3, "ngClass", "formControl", "placeholder"]], template: function InputFilterComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "input", 0);
        }
        if (rf & 2) {
            i0.ɵɵpropertyInterpolate("placeholder", ctx.column.title);
            i0.ɵɵproperty("ngClass", ctx.inputClass)("formControl", ctx.inputControl);
        }
    }, dependencies: [i1.NgClass, i2.DefaultValueAccessor, i2.NgControlStatus, i2.FormControlDirective], encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputFilterComponent, [{
            type: Component,
            args: [{
                    selector: 'input-filter',
                    template: `
    <input
      [ngClass]="inputClass"
      [formControl]="inputControl"
      class="form-control"
      type="text"
      placeholder="{{ column.title }}"/>
  `,
                }]
        }], function () { return []; }, null);
})();

const _c0$a = ["inputControl"];
function SelectFilterComponent_option_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "option", 4);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const option_r2 = ctx.$implicit;
        i0.ɵɵproperty("value", option_r2.value);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", option_r2.title, " ");
    }
}
class SelectFilterComponent extends DefaultFilter {
    constructor() {
        super();
    }
    ngOnInit() {
        this.inputControl.valueChanges
            .pipe(skip(1), distinctUntilChanged(), debounceTime(this.delay))
            .subscribe((value) => this.setFilter());
    }
}
SelectFilterComponent.ɵfac = function SelectFilterComponent_Factory(t) { return new (t || SelectFilterComponent)(); };
SelectFilterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SelectFilterComponent, selectors: [["select-filter"]], viewQuery: function SelectFilterComponent_Query(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵviewQuery(_c0$a, 7, NgControl);
        }
        if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputControl = _t.first);
        }
    }, features: [i0.ɵɵInheritDefinitionFeature], decls: 5, vars: 4, consts: [[1, "form-control", 3, "ngClass", "ngModel", "ngModelChange"], ["inputControl", ""], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SelectFilterComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "select", 0, 1);
            i0.ɵɵlistener("ngModelChange", function SelectFilterComponent_Template_select_ngModelChange_0_listener($event) { return ctx.query = $event; });
            i0.ɵɵelementStart(2, "option", 2);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, SelectFilterComponent_option_4_Template, 2, 2, "option", 3);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.inputClass)("ngModel", ctx.query);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx.column.getFilterConfig().selectText);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.column.getFilterConfig().list);
        }
    }, dependencies: [i1.NgClass, i1.NgForOf, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgModel], encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectFilterComponent, [{
            type: Component,
            args: [{
                    selector: 'select-filter',
                    template: `
    <select [ngClass]="inputClass"
            class="form-control"
            #inputControl
            [(ngModel)]="query">

        <option value="">{{ column.getFilterConfig().selectText }}</option>
        <option *ngFor="let option of column.getFilterConfig().list" [value]="option.value">
          {{ option.title }}
        </option>
    </select>
  `,
                }]
        }], function () { return []; }, { inputControl: [{
                type: ViewChild,
                args: ['inputControl', { read: NgControl, static: true }]
            }] });
})();

function DefaultFilterComponent_select_filter_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "select-filter", 3);
        i0.ɵɵlistener("filter", function DefaultFilterComponent_select_filter_1_Template_select_filter_filter_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.onFilter($event)); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵproperty("query", ctx_r0.query)("ngClass", ctx_r0.inputClass)("column", ctx_r0.column);
    }
}
function DefaultFilterComponent_checkbox_filter_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r7 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "checkbox-filter", 3);
        i0.ɵɵlistener("filter", function DefaultFilterComponent_checkbox_filter_2_Template_checkbox_filter_filter_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.onFilter($event)); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵproperty("query", ctx_r1.query)("ngClass", ctx_r1.inputClass)("column", ctx_r1.column);
    }
}
function DefaultFilterComponent_completer_filter_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r9 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "completer-filter", 3);
        i0.ɵɵlistener("filter", function DefaultFilterComponent_completer_filter_3_Template_completer_filter_filter_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.onFilter($event)); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵproperty("query", ctx_r2.query)("ngClass", ctx_r2.inputClass)("column", ctx_r2.column);
    }
}
function DefaultFilterComponent_input_filter_4_Template(rf, ctx) {
    if (rf & 1) {
        const _r11 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "input-filter", 3);
        i0.ɵɵlistener("filter", function DefaultFilterComponent_input_filter_4_Template_input_filter_filter_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.onFilter($event)); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r3 = i0.ɵɵnextContext();
        i0.ɵɵproperty("query", ctx_r3.query)("ngClass", ctx_r3.inputClass)("column", ctx_r3.column);
    }
}
class DefaultFilterComponent extends FilterDefault {
}
DefaultFilterComponent.ɵfac = /*@__PURE__*/ function () { let ɵDefaultFilterComponent_BaseFactory; return function DefaultFilterComponent_Factory(t) { return (ɵDefaultFilterComponent_BaseFactory || (ɵDefaultFilterComponent_BaseFactory = i0.ɵɵgetInheritedFactory(DefaultFilterComponent)))(t || DefaultFilterComponent); }; }();
DefaultFilterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DefaultFilterComponent, selectors: [["default-table-filter"]], inputs: { query: "query" }, features: [i0.ɵɵInheritDefinitionFeature], decls: 5, vars: 4, consts: [[3, "ngSwitch"], [3, "query", "ngClass", "column", "filter", 4, "ngSwitchCase"], [3, "query", "ngClass", "column", "filter", 4, "ngSwitchDefault"], [3, "query", "ngClass", "column", "filter"]], template: function DefaultFilterComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0, 0);
            i0.ɵɵtemplate(1, DefaultFilterComponent_select_filter_1_Template, 1, 3, "select-filter", 1);
            i0.ɵɵtemplate(2, DefaultFilterComponent_checkbox_filter_2_Template, 1, 3, "checkbox-filter", 1);
            i0.ɵɵtemplate(3, DefaultFilterComponent_completer_filter_3_Template, 1, 3, "completer-filter", 1);
            i0.ɵɵtemplate(4, DefaultFilterComponent_input_filter_4_Template, 1, 3, "input-filter", 2);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            i0.ɵɵproperty("ngSwitch", ctx.column.getFilterType());
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "list");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "checkbox");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "completer");
        }
    }, dependencies: [i1.NgClass, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, CheckboxFilterComponent, CompleterFilterComponent, InputFilterComponent, SelectFilterComponent], encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DefaultFilterComponent, [{
            type: Component,
            args: [{
                    selector: 'default-table-filter',
                    template: `
    <ng-container [ngSwitch]="column.getFilterType()">
      <select-filter *ngSwitchCase="'list'"
                     [query]="query"
                     [ngClass]="inputClass"
                     [column]="column"
                     (filter)="onFilter($event)">
      </select-filter>
      <checkbox-filter *ngSwitchCase="'checkbox'"
                       [query]="query"
                       [ngClass]="inputClass"
                       [column]="column"
                       (filter)="onFilter($event)">
      </checkbox-filter>
      <completer-filter *ngSwitchCase="'completer'"
                        [query]="query"
                        [ngClass]="inputClass"
                        [column]="column"
                        (filter)="onFilter($event)">
      </completer-filter>
      <input-filter *ngSwitchDefault
                    [query]="query"
                    [ngClass]="inputClass"
                    [column]="column"
                    (filter)="onFilter($event)">
      </input-filter>
    </ng-container>
  `,
                }]
        }], null, { query: [{
                type: Input
            }] });
})();

const _c0$9 = ["dynamicTarget"];
function CustomFilterComponent_ng_template_0_Template(rf, ctx) { }
class CustomFilterComponent extends FilterDefault {
    constructor(resolver) {
        super();
        this.resolver = resolver;
    }
    ngOnChanges(changes) {
        if (this.column && !this.customComponent) {
            const componentFactory = this.resolver.resolveComponentFactory(this.column.filter.component);
            this.customComponent = this.dynamicTarget.createComponent(componentFactory);
            // set @Inputs and @Outputs of custom component
            this.customComponent.instance.query = this.query;
            this.customComponent.instance.column = this.column;
            this.customComponent.instance.source = this.source;
            this.customComponent.instance.inputClass = this.inputClass;
            this.customComponent.instance.filter.subscribe((event) => this.onFilter(event));
        }
        if (this.customComponent) {
            this.customComponent.instance.ngOnChanges(changes);
        }
    }
    ngOnDestroy() {
        if (this.customComponent) {
            this.customComponent.destroy();
        }
    }
}
CustomFilterComponent.ɵfac = function CustomFilterComponent_Factory(t) { return new (t || CustomFilterComponent)(i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver)); };
CustomFilterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CustomFilterComponent, selectors: [["custom-table-filter"]], viewQuery: function CustomFilterComponent_Query(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵviewQuery(_c0$9, 7, ViewContainerRef);
        }
        if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dynamicTarget = _t.first);
        }
    }, inputs: { query: "query" }, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 2, vars: 0, consts: [["dynamicTarget", ""]], template: function CustomFilterComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, CustomFilterComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        }
    }, encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CustomFilterComponent, [{
            type: Component,
            args: [{
                    selector: 'custom-table-filter',
                    template: `<ng-template #dynamicTarget></ng-template>`,
                }]
        }], function () { return [{ type: i0.ComponentFactoryResolver }]; }, { query: [{
                type: Input
            }], dynamicTarget: [{
                type: ViewChild,
                args: ['dynamicTarget', { read: ViewContainerRef, static: true }]
            }] });
})();

function FilterComponent_div_0_custom_table_filter_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r4 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "custom-table-filter", 4);
        i0.ɵɵlistener("filter", function FilterComponent_div_0_custom_table_filter_1_Template_custom_table_filter_filter_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r3.onFilter($event)); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext(2);
        i0.ɵɵproperty("query", ctx_r1.query)("column", ctx_r1.column)("source", ctx_r1.source)("inputClass", ctx_r1.inputClass);
    }
}
function FilterComponent_div_0_default_table_filter_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r6 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "default-table-filter", 4);
        i0.ɵɵlistener("filter", function FilterComponent_div_0_default_table_filter_2_Template_default_table_filter_filter_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r5.onFilter($event)); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r2 = i0.ɵɵnextContext(2);
        i0.ɵɵproperty("query", ctx_r2.query)("column", ctx_r2.column)("source", ctx_r2.source)("inputClass", ctx_r2.inputClass);
    }
}
function FilterComponent_div_0_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 1);
        i0.ɵɵtemplate(1, FilterComponent_div_0_custom_table_filter_1_Template, 1, 4, "custom-table-filter", 2);
        i0.ɵɵtemplate(2, FilterComponent_div_0_default_table_filter_2_Template, 1, 4, "default-table-filter", 3);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵproperty("ngSwitch", ctx_r0.column.getFilterType());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "custom");
    }
}
class FilterComponent extends FilterDefault {
    constructor() {
        super(...arguments);
        this.query = '';
    }
    ngOnChanges(changes) {
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe((dataChanges) => {
                const filterConf = this.source.getFilter();
                if (filterConf && filterConf.filters && filterConf.filters.length === 0) {
                    this.query = '';
                    // add a check for existing filters an set the query if one exists for this column
                    // this covers instances where the filter is set by user code while maintaining existing functionality
                }
                else if (filterConf && filterConf.filters && filterConf.filters.length > 0) {
                    filterConf.filters.forEach((k, v) => {
                        if (k.field == this.column.id) {
                            this.query = k.search;
                        }
                    });
                }
            });
        }
    }
}
FilterComponent.ɵfac = /*@__PURE__*/ function () { let ɵFilterComponent_BaseFactory; return function FilterComponent_Factory(t) { return (ɵFilterComponent_BaseFactory || (ɵFilterComponent_BaseFactory = i0.ɵɵgetInheritedFactory(FilterComponent)))(t || FilterComponent); }; }();
FilterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FilterComponent, selectors: [["ng2-smart-table-filter"]], features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [["class", "ng2-smart-filter", 3, "ngSwitch", 4, "ngIf"], [1, "ng2-smart-filter", 3, "ngSwitch"], [3, "query", "column", "source", "inputClass", "filter", 4, "ngSwitchCase"], [3, "query", "column", "source", "inputClass", "filter", 4, "ngSwitchDefault"], [3, "query", "column", "source", "inputClass", "filter"]], template: function FilterComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, FilterComponent_div_0_Template, 3, 2, "div", 0);
        }
        if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.column.isFilterable);
        }
    }, dependencies: [i1.NgIf, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, DefaultFilterComponent, CustomFilterComponent], styles: ["[_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     input, [_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     select{width:100%;line-height:normal;padding:.375em .75em;font-weight:400}[_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     input[type=search]{box-sizing:inherit}[_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     .completer-dropdown-holder{font-weight:400}[_nghost-%COMP%]   .ng2-smart-filter[_ngcontent-%COMP%]     a{font-weight:400}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterComponent, [{
            type: Component,
            args: [{ selector: 'ng2-smart-table-filter', template: `
      <div class="ng2-smart-filter" *ngIf="column.isFilterable" [ngSwitch]="column.getFilterType()">
        <custom-table-filter *ngSwitchCase="'custom'"
                             [query]="query"
                             [column]="column"
                             [source]="source"
                             [inputClass]="inputClass"
                             (filter)="onFilter($event)">
        </custom-table-filter>
        <default-table-filter *ngSwitchDefault
                              [query]="query"
                              [column]="column"
                              [source]="source"
                              [inputClass]="inputClass"
                              (filter)="onFilter($event)">
        </default-table-filter>
      </div>
    `, styles: [":host .ng2-smart-filter ::ng-deep input,:host .ng2-smart-filter ::ng-deep select{width:100%;line-height:normal;padding:.375em .75em;font-weight:400}:host .ng2-smart-filter ::ng-deep input[type=search]{box-sizing:inherit}:host .ng2-smart-filter ::ng-deep .completer-dropdown-holder{font-weight:400}:host .ng2-smart-filter ::ng-deep a{font-weight:400}\n"] }]
        }], null, null);
})();

const FILTER_COMPONENTS = [
    FilterDefault,
    DefaultFilter,
    FilterComponent,
    DefaultFilterComponent,
    CustomFilterComponent,
    CheckboxFilterComponent,
    CompleterFilterComponent,
    InputFilterComponent,
    SelectFilterComponent,
];
class FilterModule {
}
FilterModule.ɵfac = function FilterModule_Factory(t) { return new (t || FilterModule)(); };
FilterModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FilterModule });
FilterModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FilterModule, [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                    ],
                    declarations: [
                        ...FILTER_COMPONENTS,
                    ],
                    exports: [
                        ...FILTER_COMPONENTS,
                    ],
                }]
        }], null, null);
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FilterModule, { declarations: [FilterDefault,
            DefaultFilter,
            FilterComponent,
            DefaultFilterComponent,
            CustomFilterComponent,
            CheckboxFilterComponent,
            CompleterFilterComponent,
            InputFilterComponent,
            SelectFilterComponent], imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule], exports: [FilterDefault,
            DefaultFilter,
            FilterComponent,
            DefaultFilterComponent,
            CustomFilterComponent,
            CheckboxFilterComponent,
            CompleterFilterComponent,
            InputFilterComponent,
            SelectFilterComponent] });
})();

function PagerComponent_nav_0_li_14_span_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 14);
        i0.ɵɵtext(1);
        i0.ɵɵelementStart(2, "span", 7);
        i0.ɵɵtext(3, "(current)");
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const page_r3 = i0.ɵɵnextContext().$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1("", page_r3, " ");
    }
}
function PagerComponent_nav_0_li_14_a_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r9 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "a", 15);
        i0.ɵɵlistener("click", function PagerComponent_nav_0_li_14_a_2_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r9); const page_r3 = i0.ɵɵnextContext().$implicit; const ctx_r7 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r7.paginate(page_r3)); });
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const page_r3 = i0.ɵɵnextContext().$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(page_r3);
    }
}
const _c0$8 = function (a0) { return { active: a0 }; };
function PagerComponent_nav_0_li_14_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "li", 4);
        i0.ɵɵtemplate(1, PagerComponent_nav_0_li_14_span_1_Template, 4, 1, "span", 12);
        i0.ɵɵtemplate(2, PagerComponent_nav_0_li_14_a_2_Template, 2, 1, "a", 13);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const page_r3 = ctx.$implicit;
        const ctx_r2 = i0.ɵɵnextContext(2);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c0$8, ctx_r2.getPage() == page_r3));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r2.getPage() == page_r3);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r2.getPage() != page_r3);
    }
}
const _c1$1 = function (a0) { return { disabled: a0 }; };
function PagerComponent_nav_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r12 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "nav", 2)(1, "ul", 3)(2, "li", 4)(3, "a", 5);
        i0.ɵɵlistener("click", function PagerComponent_nav_0_Template_a_click_3_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r11.getPage() == 1 ? false : ctx_r11.paginate(1)); });
        i0.ɵɵelementStart(4, "span", 6);
        i0.ɵɵtext(5, "\u00AB");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "span", 7);
        i0.ɵɵtext(7, "First");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(8, "li", 4)(9, "a", 8);
        i0.ɵɵlistener("click", function PagerComponent_nav_0_Template_a_click_9_listener() { i0.ɵɵrestoreView(_r12); const ctx_r13 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r13.getPage() == 1 ? false : ctx_r13.prev()); });
        i0.ɵɵelementStart(10, "span", 6);
        i0.ɵɵtext(11, "<");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "span", 7);
        i0.ɵɵtext(13, "Prev");
        i0.ɵɵelementEnd()()();
        i0.ɵɵtemplate(14, PagerComponent_nav_0_li_14_Template, 3, 5, "li", 9);
        i0.ɵɵelementStart(15, "li", 4)(16, "a", 10);
        i0.ɵɵlistener("click", function PagerComponent_nav_0_Template_a_click_16_listener() { i0.ɵɵrestoreView(_r12); const ctx_r14 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r14.getPage() == ctx_r14.getLast() ? false : ctx_r14.next()); });
        i0.ɵɵelementStart(17, "span", 6);
        i0.ɵɵtext(18, ">");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "span", 7);
        i0.ɵɵtext(20, "Next");
        i0.ɵɵelementEnd()()();
        i0.ɵɵelementStart(21, "li", 4)(22, "a", 11);
        i0.ɵɵlistener("click", function PagerComponent_nav_0_Template_a_click_22_listener() { i0.ɵɵrestoreView(_r12); const ctx_r15 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r15.getPage() == ctx_r15.getLast() ? false : ctx_r15.paginate(ctx_r15.getLast())); });
        i0.ɵɵelementStart(23, "span", 6);
        i0.ɵɵtext(24, "\u00BB");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "span", 7);
        i0.ɵɵtext(26, "Last");
        i0.ɵɵelementEnd()()()()();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c1$1, ctx_r0.getPage() == 1));
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(7, _c1$1, ctx_r0.getPage() == 1));
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngForOf", ctx_r0.getPages());
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(9, _c1$1, ctx_r0.getPage() == ctx_r0.getLast()));
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(11, _c1$1, ctx_r0.getPage() == ctx_r0.getLast()));
    }
}
function PagerComponent_nav_1_option_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "option", 20);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const item_r17 = ctx.$implicit;
        i0.ɵɵproperty("value", item_r17);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(item_r17);
    }
}
function PagerComponent_nav_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r19 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "nav", 16)(1, "label", 17);
        i0.ɵɵtext(2, " Per Page: ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "select", 18);
        i0.ɵɵlistener("change", function PagerComponent_nav_1_Template_select_change_3_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r18.onChangePerPage($event)); })("ngModelChange", function PagerComponent_nav_1_Template_select_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r20 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r20.currentPerPage = $event); });
        i0.ɵɵtemplate(4, PagerComponent_nav_1_option_4_Template, 2, 2, "option", 19);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx_r1.currentPerPage);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx_r1.perPageSelect);
    }
}
class PagerComponent {
    constructor() {
        this.perPageSelect = [];
        this.changePage = new EventEmitter();
        this.count = 0;
    }
    ngOnChanges(changes) {
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe((dataChanges) => {
                this.page = this.source.getPaging().page;
                this.perPage = this.source.getPaging().perPage;
                this.currentPerPage = this.perPage;
                this.count = this.source.count();
                if (this.isPageOutOfBounce()) {
                    this.source.setPage(--this.page);
                }
                this.processPageChange(dataChanges);
                this.initPages();
            });
        }
    }
    /**
     * We change the page here depending on the action performed against data source
     * if a new element was added to the end of the table - then change the page to the last
     * if a new element was added to the beginning of the table - then to the first page
     * @param changes
     */
    processPageChange(changes) {
        if (changes['action'] === 'prepend') {
            this.source.setPage(1);
        }
        if (changes['action'] === 'append') {
            this.source.setPage(this.getLast());
        }
    }
    shouldShow() {
        return this.source.count() > this.perPage;
    }
    paginate(page) {
        this.source.setPage(page);
        this.page = page;
        this.changePage.emit({ page });
        return false;
    }
    next() {
        return this.paginate(this.getPage() + 1);
    }
    prev() {
        return this.paginate(this.getPage() - 1);
    }
    getPage() {
        return this.page;
    }
    getPages() {
        return this.pages;
    }
    getLast() {
        return Math.ceil(this.count / this.perPage);
    }
    isPageOutOfBounce() {
        return (this.page * this.perPage) >= (this.count + this.perPage) && this.page > 1;
    }
    initPages() {
        const pagesCount = this.getLast();
        let showPagesCount = 4;
        showPagesCount = pagesCount < showPagesCount ? pagesCount : showPagesCount;
        this.pages = [];
        if (this.shouldShow()) {
            let middleOne = Math.ceil(showPagesCount / 2);
            middleOne = this.page >= middleOne ? this.page : middleOne;
            let lastOne = middleOne + Math.floor(showPagesCount / 2);
            lastOne = lastOne >= pagesCount ? pagesCount : lastOne;
            const firstOne = lastOne - showPagesCount + 1;
            for (let i = firstOne; i <= lastOne; i++) {
                this.pages.push(i);
            }
        }
    }
    onChangePerPage(event) {
        if (this.currentPerPage) {
            if (typeof this.currentPerPage === 'string' && this.currentPerPage.toLowerCase() === 'all') {
                this.source.getPaging().perPage = null;
            }
            else {
                this.source.getPaging().perPage = this.currentPerPage * 1;
                this.source.refresh();
            }
            this.initPages();
        }
    }
}
PagerComponent.ɵfac = function PagerComponent_Factory(t) { return new (t || PagerComponent)(); };
PagerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PagerComponent, selectors: [["ng2-smart-table-pager"]], inputs: { source: "source", perPageSelect: "perPageSelect" }, outputs: { changePage: "changePage" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [["class", "ng2-smart-pagination-nav", 4, "ngIf"], ["class", "ng2-smart-pagination-per-page", 4, "ngIf"], [1, "ng2-smart-pagination-nav"], [1, "ng2-smart-pagination", "pagination"], [1, "ng2-smart-page-item", "page-item", 3, "ngClass"], ["href", "#", "aria-label", "First", 1, "ng2-smart-page-link", "page-link", 3, "click"], ["aria-hidden", "true"], [1, "sr-only"], ["href", "#", "aria-label", "Prev", 1, "ng2-smart-page-link", "page-link", "page-link-prev", 3, "click"], ["class", "ng2-smart-page-item page-item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["href", "#", "aria-label", "Next", 1, "ng2-smart-page-link", "page-link", "page-link-next", 3, "click"], ["href", "#", "aria-label", "Last", 1, "ng2-smart-page-link", "page-link", 3, "click"], ["class", "ng2-smart-page-link page-link", 4, "ngIf"], ["class", "ng2-smart-page-link page-link", "href", "#", 3, "click", 4, "ngIf"], [1, "ng2-smart-page-link", "page-link"], ["href", "#", 1, "ng2-smart-page-link", "page-link", 3, "click"], [1, "ng2-smart-pagination-per-page"], ["for", "per-page"], ["id", "per-page", 3, "ngModel", "change", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function PagerComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, PagerComponent_nav_0_Template, 27, 13, "nav", 0);
            i0.ɵɵtemplate(1, PagerComponent_nav_1_Template, 5, 2, "nav", 1);
        }
        if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.shouldShow());
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.perPageSelect && ctx.perPageSelect.length > 0);
        }
    }, dependencies: [i1.NgClass, i1.NgForOf, i1.NgIf, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgModel], styles: [".ng2-smart-pagination[_ngcontent-%COMP%]{display:inline-flex;font-size:.875em;padding:0}.ng2-smart-pagination[_ngcontent-%COMP%]   .sr-only[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.ng2-smart-pagination[_ngcontent-%COMP%]   .ng2-smart-page-item[_ngcontent-%COMP%]{display:inline}.ng2-smart-pagination[_ngcontent-%COMP%]   .page-link-next[_ngcontent-%COMP%], .ng2-smart-pagination[_ngcontent-%COMP%]   .page-link-prev[_ngcontent-%COMP%]{font-size:10px}[_nghost-%COMP%]{display:flex;justify-content:space-between}[_nghost-%COMP%]   select[_ngcontent-%COMP%]{margin:1rem 0 1rem 1rem}[_nghost-%COMP%]   label[_ngcontent-%COMP%]{margin:1rem 0 1rem 1rem;line-height:2.5rem}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PagerComponent, [{
            type: Component,
            args: [{ selector: 'ng2-smart-table-pager', template: `
    <nav *ngIf="shouldShow()" class="ng2-smart-pagination-nav">
      <ul class="ng2-smart-pagination pagination">
        <li class="ng2-smart-page-item page-item" [ngClass]="{disabled: getPage() == 1}">
          <a class="ng2-smart-page-link page-link" href="#"
          (click)="getPage() == 1 ? false : paginate(1)" aria-label="First">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">First</span>
          </a>
        </li>
        <li class="ng2-smart-page-item page-item" [ngClass]="{disabled: getPage() == 1}">
          <a class="ng2-smart-page-link page-link page-link-prev" href="#"
             (click)="getPage() == 1 ? false : prev()" aria-label="Prev">
            <span aria-hidden="true">&lt;</span>
            <span class="sr-only">Prev</span>
          </a>
        </li>
        <li class="ng2-smart-page-item page-item"
        [ngClass]="{active: getPage() == page}" *ngFor="let page of getPages()">
          <span class="ng2-smart-page-link page-link"
          *ngIf="getPage() == page">{{ page }} <span class="sr-only">(current)</span></span>
          <a class="ng2-smart-page-link page-link" href="#"
          (click)="paginate(page)" *ngIf="getPage() != page">{{ page }}</a>
        </li>

        <li class="ng2-smart-page-item page-item"
            [ngClass]="{disabled: getPage() == getLast()}">
          <a class="ng2-smart-page-link page-link page-link-next" href="#"
             (click)="getPage() == getLast() ? false : next()" aria-label="Next">
            <span aria-hidden="true">&gt;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
        
        <li class="ng2-smart-page-item page-item"
        [ngClass]="{disabled: getPage() == getLast()}">
          <a class="ng2-smart-page-link page-link" href="#"
          (click)="getPage() == getLast() ? false : paginate(getLast())" aria-label="Last">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Last</span>
          </a>
        </li>
      </ul>
    </nav>
    
    <nav *ngIf="perPageSelect && perPageSelect.length > 0" class="ng2-smart-pagination-per-page">
      <label for="per-page">
        Per Page:
      </label>
      <select (change)="onChangePerPage($event)" [(ngModel)]="currentPerPage" id="per-page">
        <option *ngFor="let item of perPageSelect" [value]="item">{{ item }}</option>
      </select>
    </nav>
  `, styles: [".ng2-smart-pagination{display:inline-flex;font-size:.875em;padding:0}.ng2-smart-pagination .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.ng2-smart-pagination .ng2-smart-page-item{display:inline}.ng2-smart-pagination .page-link-next,.ng2-smart-pagination .page-link-prev{font-size:10px}:host{display:flex;justify-content:space-between}:host select{margin:1rem 0 1rem 1rem}:host label{margin:1rem 0 1rem 1rem;line-height:2.5rem}\n"] }]
        }], null, { source: [{
                type: Input
            }], perPageSelect: [{
                type: Input
            }], changePage: [{
                type: Output
            }] });
})();

class PagerModule {
}
PagerModule.ɵfac = function PagerModule_Factory(t) { return new (t || PagerModule)(); };
PagerModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PagerModule });
PagerModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
        FormsModule] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PagerModule, [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                    ],
                    declarations: [
                        PagerComponent,
                    ],
                    exports: [
                        PagerComponent,
                    ],
                }]
        }], null, null);
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PagerModule, { declarations: [PagerComponent], imports: [CommonModule,
            FormsModule], exports: [PagerComponent] });
})();

class TbodyCreateCancelComponent {
    onSave(event) {
        event.preventDefault();
        event.stopPropagation();
        this.grid.save(this.row, this.editConfirm);
    }
    onCancelEdit(event) {
        event.preventDefault();
        event.stopPropagation();
        this.row.isInEditing = false;
    }
    ngOnChanges() {
        this.saveButtonContent = this.grid.getSetting('edit.saveButtonContent');
        this.cancelButtonContent = this.grid.getSetting('edit.cancelButtonContent');
    }
}
TbodyCreateCancelComponent.ɵfac = function TbodyCreateCancelComponent_Factory(t) { return new (t || TbodyCreateCancelComponent)(); };
TbodyCreateCancelComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TbodyCreateCancelComponent, selectors: [["ng2-st-tbody-create-cancel"]], inputs: { grid: "grid", row: "row", editConfirm: "editConfirm" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [["href", "#", 1, "ng2-smart-action", "ng2-smart-action-edit-save", 3, "innerHTML", "click"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-edit-cancel", 3, "innerHTML", "click"]], template: function TbodyCreateCancelComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "a", 0);
            i0.ɵɵlistener("click", function TbodyCreateCancelComponent_Template_a_click_0_listener($event) { return ctx.onSave($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(1, "a", 1);
            i0.ɵɵlistener("click", function TbodyCreateCancelComponent_Template_a_click_1_listener($event) { return ctx.onCancelEdit($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵproperty("innerHTML", ctx.saveButtonContent, i0.ɵɵsanitizeHtml);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("innerHTML", ctx.cancelButtonContent, i0.ɵɵsanitizeHtml);
        }
    }, encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TbodyCreateCancelComponent, [{
            type: Component,
            args: [{
                    selector: 'ng2-st-tbody-create-cancel',
                    template: `
    <a href="#" class="ng2-smart-action ng2-smart-action-edit-save"
        [innerHTML]="saveButtonContent" (click)="onSave($event)"></a>
    <a href="#" class="ng2-smart-action ng2-smart-action-edit-cancel"
        [innerHTML]="cancelButtonContent" (click)="onCancelEdit($event)"></a>
  `,
                }]
        }], null, { grid: [{
                type: Input
            }], row: [{
                type: Input
            }], editConfirm: [{
                type: Input
            }] });
})();

function TbodyEditDeleteComponent_a_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r3 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "a", 2);
        i0.ɵɵlistener("click", function TbodyEditDeleteComponent_a_0_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onEdit($event)); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵproperty("innerHTML", ctx_r0.editRowButtonContent, i0.ɵɵsanitizeHtml);
    }
}
function TbodyEditDeleteComponent_a_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "a", 3);
        i0.ɵɵlistener("click", function TbodyEditDeleteComponent_a_1_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.onDelete($event)); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵproperty("innerHTML", ctx_r1.deleteRowButtonContent, i0.ɵɵsanitizeHtml);
    }
}
class TbodyEditDeleteComponent {
    constructor() {
        this.edit = new EventEmitter();
        this.delete = new EventEmitter();
        this.editRowSelect = new EventEmitter();
    }
    onEdit(event) {
        event.preventDefault();
        event.stopPropagation();
        this.editRowSelect.emit(this.row);
        if (this.grid.getSetting('mode') === 'external') {
            this.edit.emit({
                data: this.row.getData(),
                source: this.source,
            });
        }
        else {
            this.grid.edit(this.row);
        }
    }
    onDelete(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.delete.emit({
                data: this.row.getData(),
                source: this.source,
            });
        }
        else {
            this.grid.delete(this.row, this.deleteConfirm);
        }
    }
    ngOnChanges() {
        this.isActionEdit = this.grid.getSetting('actions.edit');
        this.isActionDelete = this.grid.getSetting('actions.delete');
        this.editRowButtonContent = this.grid.getSetting('edit.editButtonContent');
        this.deleteRowButtonContent = this.grid.getSetting('delete.deleteButtonContent');
    }
}
TbodyEditDeleteComponent.ɵfac = function TbodyEditDeleteComponent_Factory(t) { return new (t || TbodyEditDeleteComponent)(); };
TbodyEditDeleteComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TbodyEditDeleteComponent, selectors: [["ng2-st-tbody-edit-delete"]], inputs: { grid: "grid", row: "row", source: "source", deleteConfirm: "deleteConfirm", editConfirm: "editConfirm" }, outputs: { edit: "edit", delete: "delete", editRowSelect: "editRowSelect" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [["href", "#", "class", "ng2-smart-action ng2-smart-action-edit-edit", 3, "innerHTML", "click", 4, "ngIf"], ["href", "#", "class", "ng2-smart-action ng2-smart-action-delete-delete", 3, "innerHTML", "click", 4, "ngIf"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-edit-edit", 3, "innerHTML", "click"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-delete-delete", 3, "innerHTML", "click"]], template: function TbodyEditDeleteComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, TbodyEditDeleteComponent_a_0_Template, 1, 1, "a", 0);
            i0.ɵɵtemplate(1, TbodyEditDeleteComponent_a_1_Template, 1, 1, "a", 1);
        }
        if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isActionEdit);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.isActionDelete);
        }
    }, dependencies: [i1.NgIf], encapsulation: 2, changeDetection: 0 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TbodyEditDeleteComponent, [{
            type: Component,
            args: [{
                    selector: 'ng2-st-tbody-edit-delete',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: `
    <a href="#" *ngIf="isActionEdit" class="ng2-smart-action ng2-smart-action-edit-edit"
        [innerHTML]="editRowButtonContent" (click)="onEdit($event)"></a>
    <a href="#" *ngIf="isActionDelete" class="ng2-smart-action ng2-smart-action-delete-delete"
        [innerHTML]="deleteRowButtonContent" (click)="onDelete($event)"></a>
  `,
                }]
        }], null, { grid: [{
                type: Input
            }], row: [{
                type: Input
            }], source: [{
                type: Input
            }], deleteConfirm: [{
                type: Input
            }], editConfirm: [{
                type: Input
            }], edit: [{
                type: Output
            }], delete: [{
                type: Output
            }], editRowSelect: [{
                type: Output
            }] });
})();

function TbodyCustomComponent_a_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r3 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "a", 1);
        i0.ɵɵlistener("click", function TbodyCustomComponent_a_0_Template_a_click_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r3); const action_r1 = restoredCtx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.onCustom(action_r1, $event)); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const action_r1 = ctx.$implicit;
        i0.ɵɵproperty("innerHTML", action_r1.title, i0.ɵɵsanitizeHtml);
    }
}
class TbodyCustomComponent {
    constructor() {
        this.custom = new EventEmitter();
    }
    onCustom(action, event) {
        event.preventDefault();
        event.stopPropagation();
        this.custom.emit({
            action: action.name,
            data: this.row.getData(),
            source: this.source
        });
    }
}
TbodyCustomComponent.ɵfac = function TbodyCustomComponent_Factory(t) { return new (t || TbodyCustomComponent)(); };
TbodyCustomComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TbodyCustomComponent, selectors: [["ng2-st-tbody-custom"]], inputs: { grid: "grid", row: "row", source: "source" }, outputs: { custom: "custom" }, decls: 1, vars: 1, consts: [["href", "#", "class", "ng2-smart-action ng2-smart-action-custom-custom", 3, "innerHTML", "click", 4, "ngFor", "ngForOf"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-custom-custom", 3, "innerHTML", "click"]], template: function TbodyCustomComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, TbodyCustomComponent_a_0_Template, 1, 1, "a", 0);
        }
        if (rf & 2) {
            i0.ɵɵproperty("ngForOf", ctx.grid.getSetting("actions.custom"));
        }
    }, dependencies: [i1.NgForOf], encapsulation: 2, changeDetection: 0 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TbodyCustomComponent, [{
            type: Component,
            args: [{
                    selector: 'ng2-st-tbody-custom',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: `
      <a *ngFor="let action of grid.getSetting('actions.custom')" href="#"
         class="ng2-smart-action ng2-smart-action-custom-custom" 
         [innerHTML]="action.title"
         (click)="onCustom(action, $event)"></a>
        `
                }]
        }], null, { grid: [{
                type: Input
            }], row: [{
                type: Input
            }], source: [{
                type: Input
            }], custom: [{
                type: Output
            }] });
})();

const _c0$7 = ["ng2-st-tbody", ""];
function Ng2SmartTableTbodyComponent_tr_0_td_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r11 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "td", 7);
        i0.ɵɵlistener("click", function Ng2SmartTableTbodyComponent_tr_0_td_1_Template_td_click_0_listener($event) { i0.ɵɵrestoreView(_r11); const row_r2 = i0.ɵɵnextContext().$implicit; const ctx_r9 = i0.ɵɵnextContext(); ctx_r9.multipleSelectRow.emit(row_r2); return i0.ɵɵresetView($event.stopPropagation()); });
        i0.ɵɵelement(1, "input", 8);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const row_r2 = i0.ɵɵnextContext().$implicit;
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", row_r2.isSelected);
    }
}
function Ng2SmartTableTbodyComponent_tr_0_td_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r15 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "td", 9);
        i0.ɵɵlistener("click", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_td_click_0_listener($event) { return $event.stopPropagation(); });
        i0.ɵɵelementStart(1, "ng2-st-tbody-custom", 10);
        i0.ɵɵlistener("custom", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_custom_custom_1_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r14.custom.emit($event)); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "ng2-st-tbody-edit-delete", 11);
        i0.ɵɵlistener("edit", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_edit_delete_edit_2_listener() { i0.ɵɵrestoreView(_r15); const row_r2 = i0.ɵɵnextContext().$implicit; const ctx_r16 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r16.edit.emit(row_r2)); })("delete", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_edit_delete_delete_2_listener() { i0.ɵɵrestoreView(_r15); const row_r2 = i0.ɵɵnextContext().$implicit; const ctx_r18 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r18.delete.emit(row_r2)); })("editRowSelect", function Ng2SmartTableTbodyComponent_tr_0_td_2_Template_ng2_st_tbody_edit_delete_editRowSelect_2_listener($event) { i0.ɵɵrestoreView(_r15); const ctx_r20 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r20.editRowSelect.emit($event)); });
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const row_r2 = i0.ɵɵnextContext().$implicit;
        const ctx_r4 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("grid", ctx_r4.grid)("row", row_r2)("source", ctx_r4.source);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("grid", ctx_r4.grid)("deleteConfirm", ctx_r4.deleteConfirm)("editConfirm", ctx_r4.editConfirm)("row", row_r2)("source", ctx_r4.source);
    }
}
function Ng2SmartTableTbodyComponent_tr_0_td_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 12);
        i0.ɵɵelement(1, "ng2-st-tbody-create-cancel", 13);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const row_r2 = i0.ɵɵnextContext().$implicit;
        const ctx_r5 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("grid", ctx_r5.grid)("row", row_r2)("editConfirm", ctx_r5.editConfirm);
    }
}
function Ng2SmartTableTbodyComponent_tr_0_td_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "td");
        i0.ɵɵelement(1, "ng2-smart-table-cell", 14);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const cell_r23 = ctx.$implicit;
        const row_r2 = i0.ɵɵnextContext().$implicit;
        const ctx_r6 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cell", cell_r23)("grid", ctx_r6.grid)("row", row_r2)("isNew", false)("mode", ctx_r6.mode)("editConfirm", ctx_r6.editConfirm)("inputClass", ctx_r6.editInputClass)("isInEditing", row_r2.isInEditing);
    }
}
function Ng2SmartTableTbodyComponent_tr_0_td_5_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "td", 12);
        i0.ɵɵelement(1, "ng2-st-tbody-create-cancel", 13);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const row_r2 = i0.ɵɵnextContext().$implicit;
        const ctx_r7 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("grid", ctx_r7.grid)("row", row_r2)("editConfirm", ctx_r7.editConfirm);
    }
}
function Ng2SmartTableTbodyComponent_tr_0_td_6_Template(rf, ctx) {
    if (rf & 1) {
        const _r27 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "td", 12)(1, "ng2-st-tbody-custom", 10);
        i0.ɵɵlistener("custom", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_custom_custom_1_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r26 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r26.custom.emit($event)); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "ng2-st-tbody-edit-delete", 11);
        i0.ɵɵlistener("edit", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_edit_delete_edit_2_listener() { i0.ɵɵrestoreView(_r27); const row_r2 = i0.ɵɵnextContext().$implicit; const ctx_r28 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r28.edit.emit(row_r2)); })("delete", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_edit_delete_delete_2_listener() { i0.ɵɵrestoreView(_r27); const row_r2 = i0.ɵɵnextContext().$implicit; const ctx_r30 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r30.delete.emit(row_r2)); })("editRowSelect", function Ng2SmartTableTbodyComponent_tr_0_td_6_Template_ng2_st_tbody_edit_delete_editRowSelect_2_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r32 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r32.editRowSelect.emit($event)); });
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const row_r2 = i0.ɵɵnextContext().$implicit;
        const ctx_r8 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("grid", ctx_r8.grid)("row", row_r2)("source", ctx_r8.source);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("grid", ctx_r8.grid)("deleteConfirm", ctx_r8.deleteConfirm)("editConfirm", ctx_r8.editConfirm)("row", row_r2)("source", ctx_r8.source);
    }
}
const _c1 = function (a0) { return { selected: a0 }; };
function Ng2SmartTableTbodyComponent_tr_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r35 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "tr", 2);
        i0.ɵɵlistener("click", function Ng2SmartTableTbodyComponent_tr_0_Template_tr_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r35); const row_r2 = restoredCtx.$implicit; const ctx_r34 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r34.userClickedRow.emit(row_r2)); })("mouseover", function Ng2SmartTableTbodyComponent_tr_0_Template_tr_mouseover_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r35); const row_r2 = restoredCtx.$implicit; const ctx_r36 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r36.rowHover.emit(row_r2)); });
        i0.ɵɵtemplate(1, Ng2SmartTableTbodyComponent_tr_0_td_1_Template, 2, 1, "td", 3);
        i0.ɵɵtemplate(2, Ng2SmartTableTbodyComponent_tr_0_td_2_Template, 3, 8, "td", 4);
        i0.ɵɵtemplate(3, Ng2SmartTableTbodyComponent_tr_0_td_3_Template, 2, 3, "td", 5);
        i0.ɵɵtemplate(4, Ng2SmartTableTbodyComponent_tr_0_td_4_Template, 2, 8, "td", 6);
        i0.ɵɵtemplate(5, Ng2SmartTableTbodyComponent_tr_0_td_5_Template, 2, 3, "td", 5);
        i0.ɵɵtemplate(6, Ng2SmartTableTbodyComponent_tr_0_td_6_Template, 3, 8, "td", 5);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const row_r2 = ctx.$implicit;
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵproperty("className", ctx_r0.rowClassFunction(row_r2))("ngClass", i0.ɵɵpureFunction1(8, _c1, row_r2.isSelected));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx_r0.isMultiSelectVisible);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !row_r2.isInEditing && ctx_r0.showActionColumnLeft);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", row_r2.isInEditing && ctx_r0.showActionColumnLeft);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx_r0.getVisibleCells(row_r2.cells));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", row_r2.isInEditing && ctx_r0.showActionColumnRight);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !row_r2.isInEditing && ctx_r0.showActionColumnRight);
    }
}
function Ng2SmartTableTbodyComponent_tr_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "tr")(1, "td");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("colspan", ctx_r1.tableColumnsCount);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx_r1.noDataMessage, " ");
    }
}
class Ng2SmartTableTbodyComponent {
    constructor() {
        this.save = new EventEmitter();
        this.cancel = new EventEmitter();
        this.edit = new EventEmitter();
        this.delete = new EventEmitter();
        this.custom = new EventEmitter();
        this.edited = new EventEmitter();
        this.userSelectRow = new EventEmitter();
        this.userClickedRow = new EventEmitter();
        this.editRowSelect = new EventEmitter();
        this.multipleSelectRow = new EventEmitter();
        this.rowHover = new EventEmitter();
    }
    get tableColumnsCount() {
        const actionColumns = this.isActionAdd || this.isActionEdit || this.isActionDelete ? 1 : 0;
        return this.grid.getColumns().length + actionColumns;
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.mode = this.grid.getSetting('mode');
        this.editInputClass = this.grid.getSetting('edit.inputClass');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.isActionAdd = this.grid.getSetting('actions.add');
        this.isActionEdit = this.grid.getSetting('actions.edit');
        this.isActionDelete = this.grid.getSetting('actions.delete');
        this.noDataMessage = this.grid.getSetting('noDataMessage');
    }
    getVisibleCells(cells) {
        return (cells || []).filter((cell) => !cell.getColumn().hide);
    }
}
Ng2SmartTableTbodyComponent.ɵfac = function Ng2SmartTableTbodyComponent_Factory(t) { return new (t || Ng2SmartTableTbodyComponent)(); };
Ng2SmartTableTbodyComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Ng2SmartTableTbodyComponent, selectors: [["", "ng2-st-tbody", ""]], inputs: { grid: "grid", source: "source", deleteConfirm: "deleteConfirm", editConfirm: "editConfirm", rowClassFunction: "rowClassFunction" }, outputs: { save: "save", cancel: "cancel", edit: "edit", delete: "delete", custom: "custom", edited: "edited", userSelectRow: "userSelectRow", userClickedRow: "userClickedRow", editRowSelect: "editRowSelect", multipleSelectRow: "multipleSelectRow", rowHover: "rowHover" }, features: [i0.ɵɵNgOnChangesFeature], attrs: _c0$7, decls: 2, vars: 2, consts: [["class", "ng2-smart-row", 3, "className", "ngClass", "click", "mouseover", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "ng2-smart-row", 3, "className", "ngClass", "click", "mouseover"], ["class", "ng2-smart-actions ng2-smart-action-multiple-select", 3, "click", 4, "ngIf"], ["class", "ng2-smart-actions", 3, "click", 4, "ngIf"], ["class", "ng2-smart-actions", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "ng2-smart-actions", "ng2-smart-action-multiple-select", 3, "click"], ["type", "checkbox", 1, "form-control", 3, "ngModel"], [1, "ng2-smart-actions", 3, "click"], [3, "grid", "row", "source", "custom"], [3, "grid", "deleteConfirm", "editConfirm", "row", "source", "edit", "delete", "editRowSelect"], [1, "ng2-smart-actions"], [3, "grid", "row", "editConfirm"], [3, "cell", "grid", "row", "isNew", "mode", "editConfirm", "inputClass", "isInEditing"]], template: function Ng2SmartTableTbodyComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, Ng2SmartTableTbodyComponent_tr_0_Template, 7, 10, "tr", 0);
            i0.ɵɵtemplate(1, Ng2SmartTableTbodyComponent_tr_1_Template, 3, 2, "tr", 1);
        }
        if (rf & 2) {
            i0.ɵɵproperty("ngForOf", ctx.grid.getRows());
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.grid.getRows().length == 0);
        }
    }, dependencies: [i1.NgClass, i1.NgForOf, i1.NgIf, i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.NgModel, CellComponent, TbodyCreateCancelComponent, TbodyEditDeleteComponent, TbodyCustomComponent], styles: ["[_nghost-%COMP%]   .ng2-smart-row.selected[_ngcontent-%COMP%]{background:rgba(0,0,0,.05)}[_nghost-%COMP%]   .ng2-smart-row[_ngcontent-%COMP%]   .ng2-smart-actions.ng2-smart-action-multiple-select[_ngcontent-%COMP%]{text-align:center}[_nghost-%COMP%]     ng2-st-tbody-edit-delete a:first-child, [_nghost-%COMP%]     ng2-st-tbody-create-cancel a:first-child{margin-right:.25rem}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Ng2SmartTableTbodyComponent, [{
            type: Component,
            args: [{ selector: '[ng2-st-tbody]', template: "<tr *ngFor=\"let row of grid.getRows()\" (click)=\"userClickedRow.emit(row)\" (mouseover)=\"rowHover.emit(row)\" class=\"ng2-smart-row\" [className]=\"rowClassFunction(row)\" [ngClass]=\"{selected: row.isSelected}\">\n  <td *ngIf=\"isMultiSelectVisible\" class=\"ng2-smart-actions ng2-smart-action-multiple-select\" (click)=\"multipleSelectRow.emit(row); $event.stopPropagation();\">\n    <input type=\"checkbox\" class=\"form-control\" [ngModel]=\"row.isSelected\">\n  </td>\n  <td *ngIf=\"!row.isInEditing && showActionColumnLeft\" class=\"ng2-smart-actions\" (click)=\"$event.stopPropagation()\">\n    <ng2-st-tbody-custom [grid]=\"grid\" (custom)=\"custom.emit($event)\" [row]=\"row\" [source]=\"source\"></ng2-st-tbody-custom>\n\n    <ng2-st-tbody-edit-delete [grid]=\"grid\"\n                              [deleteConfirm]=\"deleteConfirm\"\n                              [editConfirm]=\"editConfirm\"\n                              (edit)=\"edit.emit(row)\"\n                              (delete)=\"delete.emit(row)\"\n                              (editRowSelect)=\"editRowSelect.emit($event)\"\n                              [row]=\"row\"\n                              [source]=\"source\">\n    </ng2-st-tbody-edit-delete>\n  </td>\n   <td *ngIf=\"row.isInEditing && showActionColumnLeft\"  class=\"ng2-smart-actions\">\n    <ng2-st-tbody-create-cancel [grid]=\"grid\" [row]=\"row\" [editConfirm]=\"editConfirm\"></ng2-st-tbody-create-cancel>\n  </td>\n  <td *ngFor=\"let cell of getVisibleCells(row.cells)\">\n    <ng2-smart-table-cell [cell]=\"cell\"\n                          [grid]=\"grid\"\n                          [row]=\"row\"\n                          [isNew]=\"false\"\n                          [mode]=\"mode\"\n                          [editConfirm]=\"editConfirm\"\n                          [inputClass]=\"editInputClass\"\n                          [isInEditing]=\"row.isInEditing\">\n    </ng2-smart-table-cell>\n  </td>\n\n  <td *ngIf=\"row.isInEditing && showActionColumnRight\"  class=\"ng2-smart-actions\">\n    <ng2-st-tbody-create-cancel [grid]=\"grid\" [row]=\"row\" [editConfirm]=\"editConfirm\"></ng2-st-tbody-create-cancel>\n  </td>\n\n  <td *ngIf=\"!row.isInEditing && showActionColumnRight\" class=\"ng2-smart-actions\">\n    <ng2-st-tbody-custom [grid]=\"grid\" (custom)=\"custom.emit($event)\" [row]=\"row\" [source]=\"source\"></ng2-st-tbody-custom>\n\n    <ng2-st-tbody-edit-delete [grid]=\"grid\"\n                              [deleteConfirm]=\"deleteConfirm\"\n                              [editConfirm]=\"editConfirm\"\n                              [row]=\"row\"\n                              [source]=\"source\"\n                              (edit)=\"edit.emit(row)\"\n                              (delete)=\"delete.emit(row)\"\n                              (editRowSelect)=\"editRowSelect.emit($event)\">\n    </ng2-st-tbody-edit-delete>\n  </td>\n</tr>\n\n<tr *ngIf=\"grid.getRows().length == 0\">\n  <td [attr.colspan]=\"tableColumnsCount\">\n    {{ noDataMessage }}\n  </td>\n</tr>\n", styles: [":host .ng2-smart-row.selected{background:rgba(0,0,0,.05)}:host .ng2-smart-row .ng2-smart-actions.ng2-smart-action-multiple-select{text-align:center}:host ::ng-deep ng2-st-tbody-edit-delete a:first-child,:host ::ng-deep ng2-st-tbody-create-cancel a:first-child{margin-right:.25rem}\n"] }]
        }], null, { grid: [{
                type: Input
            }], source: [{
                type: Input
            }], deleteConfirm: [{
                type: Input
            }], editConfirm: [{
                type: Input
            }], rowClassFunction: [{
                type: Input
            }], save: [{
                type: Output
            }], cancel: [{
                type: Output
            }], edit: [{
                type: Output
            }], delete: [{
                type: Output
            }], custom: [{
                type: Output
            }], edited: [{
                type: Output
            }], userSelectRow: [{
                type: Output
            }], userClickedRow: [{
                type: Output
            }], editRowSelect: [{
                type: Output
            }], multipleSelectRow: [{
                type: Output
            }], rowHover: [{
                type: Output
            }] });
})();

const TBODY_COMPONENTS = [
    TbodyCreateCancelComponent,
    TbodyEditDeleteComponent,
    TbodyCustomComponent,
    Ng2SmartTableTbodyComponent
];
class TBodyModule {
}
TBodyModule.ɵfac = function TBodyModule_Factory(t) { return new (t || TBodyModule)(); };
TBodyModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: TBodyModule });
TBodyModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
        FormsModule,
        CellModule] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TBodyModule, [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        CellModule,
                    ],
                    declarations: [
                        ...TBODY_COMPONENTS,
                    ],
                    exports: [
                        ...TBODY_COMPONENTS,
                    ],
                }]
        }], null, null);
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TBodyModule, { declarations: [TbodyCreateCancelComponent,
            TbodyEditDeleteComponent,
            TbodyCustomComponent,
            Ng2SmartTableTbodyComponent], imports: [CommonModule,
            FormsModule,
            CellModule], exports: [TbodyCreateCancelComponent,
            TbodyEditDeleteComponent,
            TbodyCustomComponent,
            Ng2SmartTableTbodyComponent] });
})();

const _c0$6 = ["ng2-st-add-button", ""];
function AddButtonComponent_a_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r2 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "a", 1);
        i0.ɵɵlistener("click", function AddButtonComponent_a_0_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onAdd($event)); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵproperty("innerHTML", ctx_r0.addNewButtonContent, i0.ɵɵsanitizeHtml);
    }
}
class AddButtonComponent {
    constructor(ref) {
        this.ref = ref;
        this.create = new EventEmitter();
    }
    ngAfterViewInit() {
        this.ref.nativeElement.classList.add('ng2-smart-actions-title', 'ng2-smart-actions-title-add');
    }
    ngOnChanges() {
        this.isActionAdd = this.grid.getSetting('actions.add');
        this.addNewButtonContent = this.grid.getSetting('add.addButtonContent');
    }
    onAdd(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.create.emit({
                source: this.source,
            });
        }
        else {
            this.grid.createFormShown = true;
        }
    }
}
AddButtonComponent.ɵfac = function AddButtonComponent_Factory(t) { return new (t || AddButtonComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
AddButtonComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AddButtonComponent, selectors: [["", "ng2-st-add-button", ""]], inputs: { grid: "grid", source: "source" }, outputs: { create: "create" }, features: [i0.ɵɵNgOnChangesFeature], attrs: _c0$6, decls: 1, vars: 1, consts: [["href", "#", "class", "ng2-smart-action ng2-smart-action-add-add", 3, "innerHTML", "click", 4, "ngIf"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-add-add", 3, "innerHTML", "click"]], template: function AddButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, AddButtonComponent_a_0_Template, 1, 1, "a", 0);
        }
        if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isActionAdd);
        }
    }, dependencies: [i1.NgIf], encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AddButtonComponent, [{
            type: Component,
            args: [{
                    selector: '[ng2-st-add-button]',
                    template: `
    <a *ngIf="isActionAdd" href="#" class="ng2-smart-action ng2-smart-action-add-add"
        [innerHTML]="addNewButtonContent" (click)="onAdd($event)"></a>
  `,
                }]
        }], function () { return [{ type: i0.ElementRef }]; }, { grid: [{
                type: Input
            }], source: [{
                type: Input
            }], create: [{
                type: Output
            }] });
})();

const _c0$5 = ["ng2-st-thead-filters-row", ""];
function TheadFitlersRowComponent_th_0_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "th");
    }
}
function TheadFitlersRowComponent_th_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "th", 4);
        i0.ɵɵlistener("create", function TheadFitlersRowComponent_th_1_Template_th_create_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.create.emit($event)); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵproperty("grid", ctx_r1.grid);
    }
}
function TheadFitlersRowComponent_th_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "th")(1, "ng2-smart-table-filter", 5);
        i0.ɵɵlistener("filter", function TheadFitlersRowComponent_th_2_Template_ng2_smart_table_filter_filter_1_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.filter.emit($event)); });
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const column_r6 = ctx.$implicit;
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵclassMapInterpolate1("ng2-smart-th ", column_r6.id, "");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("source", ctx_r2.source)("column", column_r6)("inputClass", ctx_r2.filterInputClass);
    }
}
function TheadFitlersRowComponent_th_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r10 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "th", 6);
        i0.ɵɵlistener("create", function TheadFitlersRowComponent_th_3_Template_th_create_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r9.create.emit($event)); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r3 = i0.ɵɵnextContext();
        i0.ɵɵproperty("grid", ctx_r3.grid)("source", ctx_r3.source);
    }
}
class TheadFitlersRowComponent {
    constructor() {
        this.create = new EventEmitter();
        this.filter = new EventEmitter();
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.filterInputClass = this.grid.getSetting('filter.inputClass');
    }
    getVisibleColumns(columns) {
        return (columns || []).filter((column) => !column.hide);
    }
}
TheadFitlersRowComponent.ɵfac = function TheadFitlersRowComponent_Factory(t) { return new (t || TheadFitlersRowComponent)(); };
TheadFitlersRowComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TheadFitlersRowComponent, selectors: [["", "ng2-st-thead-filters-row", ""]], inputs: { grid: "grid", source: "source" }, outputs: { create: "create", filter: "filter" }, features: [i0.ɵɵNgOnChangesFeature], attrs: _c0$5, decls: 4, vars: 4, consts: [[4, "ngIf"], ["ng2-st-add-button", "", 3, "grid", "create", 4, "ngIf"], [3, "class", 4, "ngFor", "ngForOf"], ["ng2-st-add-button", "", 3, "grid", "source", "create", 4, "ngIf"], ["ng2-st-add-button", "", 3, "grid", "create"], [3, "source", "column", "inputClass", "filter"], ["ng2-st-add-button", "", 3, "grid", "source", "create"]], template: function TheadFitlersRowComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, TheadFitlersRowComponent_th_0_Template, 1, 0, "th", 0);
            i0.ɵɵtemplate(1, TheadFitlersRowComponent_th_1_Template, 1, 1, "th", 1);
            i0.ɵɵtemplate(2, TheadFitlersRowComponent_th_2_Template, 2, 6, "th", 2);
            i0.ɵɵtemplate(3, TheadFitlersRowComponent_th_3_Template, 1, 2, "th", 3);
        }
        if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isMultiSelectVisible);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showActionColumnLeft);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.getVisibleColumns(ctx.grid.getColumns()));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showActionColumnRight);
        }
    }, dependencies: [i1.NgForOf, i1.NgIf, FilterComponent, AddButtonComponent], encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TheadFitlersRowComponent, [{
            type: Component,
            args: [{
                    selector: '[ng2-st-thead-filters-row]',
                    template: `
    <th *ngIf="isMultiSelectVisible"></th>
    <th ng2-st-add-button *ngIf="showActionColumnLeft"
                          [grid]="grid"
                          (create)="create.emit($event)">
    </th>
    <th *ngFor="let column of getVisibleColumns(grid.getColumns())" class="ng2-smart-th {{ column.id }}">
      <ng2-smart-table-filter [source]="source"
                              [column]="column"
                              [inputClass]="filterInputClass"
                              (filter)="filter.emit($event)">
      </ng2-smart-table-filter>
    </th>
    <th ng2-st-add-button *ngIf="showActionColumnRight"
                          [grid]="grid"
                          [source]="source"
                          (create)="create.emit($event)">
    </th>
  `,
                }]
        }], null, { grid: [{
                type: Input
            }], source: [{
                type: Input
            }], create: [{
                type: Output
            }], filter: [{
                type: Output
            }] });
})();

class ActionsComponent {
    constructor() {
        this.create = new EventEmitter();
    }
    ngOnChanges() {
        this.createButtonContent = this.grid.getSetting('add.createButtonContent');
        this.cancelButtonContent = this.grid.getSetting('add.cancelButtonContent');
    }
}
ActionsComponent.ɵfac = function ActionsComponent_Factory(t) { return new (t || ActionsComponent)(); };
ActionsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ActionsComponent, selectors: [["ng2-st-actions"]], inputs: { grid: "grid" }, outputs: { create: "create" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [["href", "#", 1, "ng2-smart-action", "ng2-smart-action-add-create", 3, "innerHTML", "click"], ["href", "#", 1, "ng2-smart-action", "ng2-smart-action-add-cancel", 3, "innerHTML", "click"]], template: function ActionsComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "a", 0);
            i0.ɵɵlistener("click", function ActionsComponent_Template_a_click_0_listener($event) { $event.preventDefault(); return ctx.create.emit($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(1, "a", 1);
            i0.ɵɵlistener("click", function ActionsComponent_Template_a_click_1_listener($event) { $event.preventDefault(); return ctx.grid.createFormShown = false; });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵproperty("innerHTML", ctx.createButtonContent, i0.ɵɵsanitizeHtml);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("innerHTML", ctx.cancelButtonContent, i0.ɵɵsanitizeHtml);
        }
    }, encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActionsComponent, [{
            type: Component,
            args: [{
                    selector: 'ng2-st-actions',
                    template: `
    <a href="#" class="ng2-smart-action ng2-smart-action-add-create"
        [innerHTML]="createButtonContent"
        (click)="$event.preventDefault();create.emit($event)"></a>
    <a href="#" class="ng2-smart-action ng2-smart-action-add-cancel"
        [innerHTML]="cancelButtonContent"
        (click)="$event.preventDefault();grid.createFormShown = false;"></a>
  `,
                }]
        }], null, { grid: [{
                type: Input
            }], create: [{
                type: Output
            }] });
})();

const _c0$4 = ["ng2-st-thead-form-row", ""];
function TheadFormRowComponent_td_0_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "td");
    }
}
function TheadFormRowComponent_td_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "td", 3)(1, "ng2-st-actions", 4);
        i0.ɵɵlistener("create", function TheadFormRowComponent_td_1_Template_ng2_st_actions_create_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.onCreate($event)); });
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("grid", ctx_r1.grid);
    }
}
function TheadFormRowComponent_td_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "td")(1, "ng2-smart-table-cell", 5);
        i0.ɵɵlistener("edited", function TheadFormRowComponent_td_2_Template_ng2_smart_table_cell_edited_1_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.onCreate($event)); });
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const cell_r6 = ctx.$implicit;
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cell", cell_r6)("grid", ctx_r2.grid)("isNew", true)("createConfirm", ctx_r2.createConfirm)("inputClass", ctx_r2.addInputClass)("isInEditing", ctx_r2.grid.getNewRow().isInEditing);
    }
}
function TheadFormRowComponent_td_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r10 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "td", 3)(1, "ng2-st-actions", 4);
        i0.ɵɵlistener("create", function TheadFormRowComponent_td_3_Template_ng2_st_actions_create_1_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r9.onCreate($event)); });
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const ctx_r3 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("grid", ctx_r3.grid);
    }
}
class TheadFormRowComponent {
    constructor() {
        this.create = new EventEmitter();
    }
    onCreate(event) {
        event.stopPropagation();
        this.grid.create(this.grid.getNewRow(), this.createConfirm);
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.addInputClass = this.grid.getSetting('add.inputClass');
    }
    getVisibleCells(cells) {
        return (cells || []).filter((cell) => !cell.getColumn().hide);
    }
}
TheadFormRowComponent.ɵfac = function TheadFormRowComponent_Factory(t) { return new (t || TheadFormRowComponent)(); };
TheadFormRowComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TheadFormRowComponent, selectors: [["", "ng2-st-thead-form-row", ""]], inputs: { grid: "grid", row: "row", createConfirm: "createConfirm" }, outputs: { create: "create" }, features: [i0.ɵɵNgOnChangesFeature], attrs: _c0$4, decls: 4, vars: 3, consts: [[4, "ngIf"], ["class", "ng2-smart-actions", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "ng2-smart-actions"], [3, "grid", "create"], [3, "cell", "grid", "isNew", "createConfirm", "inputClass", "isInEditing", "edited"]], template: function TheadFormRowComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, TheadFormRowComponent_td_0_Template, 1, 0, "td", 0);
            i0.ɵɵtemplate(1, TheadFormRowComponent_td_1_Template, 2, 1, "td", 1);
            i0.ɵɵtemplate(2, TheadFormRowComponent_td_2_Template, 2, 6, "td", 2);
            i0.ɵɵtemplate(3, TheadFormRowComponent_td_3_Template, 2, 1, "td", 1);
        }
        if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showActionColumnLeft);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.getVisibleCells(ctx.grid.getNewRow().getCells()));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showActionColumnRight);
        }
    }, dependencies: [i1.NgForOf, i1.NgIf, CellComponent, ActionsComponent], encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TheadFormRowComponent, [{
            type: Component,
            args: [{
                    selector: '[ng2-st-thead-form-row]',
                    template: `
      <td *ngIf=""></td>
      <td  *ngIf="showActionColumnLeft"  class="ng2-smart-actions">
        <ng2-st-actions [grid]="grid" (create)="onCreate($event)"></ng2-st-actions>
      </td>
      <td *ngFor="let cell of getVisibleCells(grid.getNewRow().getCells())">
        <ng2-smart-table-cell [cell]="cell"
                              [grid]="grid"
                              [isNew]="true"
                              [createConfirm]="createConfirm"
                              [inputClass]="addInputClass"
                              [isInEditing]="grid.getNewRow().isInEditing"
                              (edited)="onCreate($event)">
        </ng2-smart-table-cell>
      </td>
      <td  *ngIf="showActionColumnRight"  class="ng2-smart-actions">
        <ng2-st-actions [grid]="grid" (create)="onCreate($event)"></ng2-st-actions>
      </td>
  `,
                }]
        }], null, { grid: [{
                type: Input
            }], row: [{
                type: Input
            }], createConfirm: [{
                type: Input
            }], create: [{
                type: Output
            }] });
})();

const _c0$3 = ["ng2-st-actions-title", ""];
class ActionsTitleComponent {
    constructor(ref) {
        this.ref = ref;
    }
    ngAfterViewInit() {
        this.ref.nativeElement.classList.add('ng2-smart-actions');
    }
    ngOnChanges() {
        this.actionsColumnTitle = this.grid.getSetting('actions.columnTitle');
    }
}
ActionsTitleComponent.ɵfac = function ActionsTitleComponent_Factory(t) { return new (t || ActionsTitleComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
ActionsTitleComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ActionsTitleComponent, selectors: [["", "ng2-st-actions-title", ""]], inputs: { grid: "grid" }, features: [i0.ɵɵNgOnChangesFeature], attrs: _c0$3, decls: 2, vars: 1, consts: [[1, "ng2-smart-title"]], template: function ActionsTitleComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(ctx.actionsColumnTitle);
        }
    }, encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ActionsTitleComponent, [{
            type: Component,
            args: [{
                    selector: '[ng2-st-actions-title]',
                    template: `
    <div class="ng2-smart-title">{{ actionsColumnTitle }}</div>
  `,
                }]
        }], function () { return [{ type: i0.ElementRef }]; }, { grid: [{
                type: Input
            }] });
})();

const _c0$2 = ["ng2-st-checkbox-select-all", ""];
class CheckboxSelectAllComponent {
}
CheckboxSelectAllComponent.ɵfac = function CheckboxSelectAllComponent_Factory(t) { return new (t || CheckboxSelectAllComponent)(); };
CheckboxSelectAllComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CheckboxSelectAllComponent, selectors: [["", "ng2-st-checkbox-select-all", ""]], inputs: { grid: "grid", source: "source" }, attrs: _c0$2, decls: 1, vars: 1, consts: [["type", "checkbox", 3, "ngModel"]], template: function CheckboxSelectAllComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "input", 0);
        }
        if (rf & 2) {
            i0.ɵɵproperty("ngModel", ctx.grid.dataSet.isAllSelected);
        }
    }, dependencies: [i2.CheckboxControlValueAccessor, i2.NgControlStatus, i2.NgModel], encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CheckboxSelectAllComponent, [{
            type: Component,
            args: [{
                    selector: '[ng2-st-checkbox-select-all]',
                    template: `
    <input type="checkbox" [ngModel]="this.grid.dataSet.isAllSelected">
  `,
                }]
        }], null, { grid: [{
                type: Input
            }], source: [{
                type: Input
            }] });
})();

function TitleComponent_a_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r3 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "a", 2);
        i0.ɵɵlistener("click", function TitleComponent_a_0_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2._sort($event)); });
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵproperty("ngClass", ctx_r0.currentDirection);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx_r0.column.title, " ");
    }
}
function TitleComponent_span_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 3);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx_r1.column.title);
    }
}
class TitleComponent {
    constructor() {
        this.currentDirection = '';
        this.sort = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes.source) {
            if (!changes.source.firstChange) {
                this.dataChangedSub.unsubscribe();
            }
            this.dataChangedSub = this.source.onChanged().subscribe((dataChanges) => {
                const sortConf = this.source.getSort();
                if (sortConf.length > 0 && sortConf[0]['field'] === this.column.id) {
                    this.currentDirection = sortConf[0]['direction'];
                }
                else {
                    this.currentDirection = '';
                }
                sortConf.forEach((fieldConf) => {
                });
            });
        }
    }
    _sort(event) {
        event.preventDefault();
        this.changeSortDirection();
        this.source.setSort([
            {
                field: this.column.id,
                direction: this.currentDirection,
                compare: this.column.getCompareFunction(),
            },
        ]);
        this.sort.emit(null);
    }
    changeSortDirection() {
        if (this.currentDirection) {
            const newDirection = this.currentDirection === 'asc' ? 'desc' : 'asc';
            this.currentDirection = newDirection;
        }
        else {
            this.currentDirection = this.column.sortDirection;
        }
        return this.currentDirection;
    }
}
TitleComponent.ɵfac = function TitleComponent_Factory(t) { return new (t || TitleComponent)(); };
TitleComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TitleComponent, selectors: [["ng2-smart-table-title"]], inputs: { column: "column", source: "source" }, outputs: { sort: "sort" }, features: [i0.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [["href", "#", "class", "ng2-smart-sort-link sort", 3, "ngClass", "click", 4, "ngIf"], ["class", "ng2-smart-sort", 4, "ngIf"], ["href", "#", 1, "ng2-smart-sort-link", "sort", 3, "ngClass", "click"], [1, "ng2-smart-sort"]], template: function TitleComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, TitleComponent_a_0_Template, 2, 2, "a", 0);
            i0.ɵɵtemplate(1, TitleComponent_span_1_Template, 2, 1, "span", 1);
        }
        if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.column.isSortable);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.column.isSortable);
        }
    }, dependencies: [i1.NgClass, i1.NgIf], styles: ["a.sort.asc[_ngcontent-%COMP%], a.sort.desc[_ngcontent-%COMP%]{font-weight:700}a.sort.asc[_ngcontent-%COMP%]:after, a.sort.desc[_ngcontent-%COMP%]:after{content:\"\";display:inline-block;width:0;height:0;border-bottom:4px solid rgba(0,0,0,.3);border-top:4px solid transparent;border-left:4px solid transparent;border-right:4px solid transparent;margin-bottom:2px}a.sort.desc[_ngcontent-%COMP%]:after{transform:rotate(-180deg);margin-bottom:-2px}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TitleComponent, [{
            type: Component,
            args: [{ selector: 'ng2-smart-table-title', template: `
    <a href="#" *ngIf="column.isSortable"
                (click)="_sort($event)"
                class="ng2-smart-sort-link sort"
                [ngClass]="currentDirection">
      {{ column.title }}
    </a>
    <span class="ng2-smart-sort" *ngIf="!column.isSortable">{{ column.title }}</span>
  `, styles: ["a.sort.asc,a.sort.desc{font-weight:700}a.sort.asc:after,a.sort.desc:after{content:\"\";display:inline-block;width:0;height:0;border-bottom:4px solid rgba(0,0,0,.3);border-top:4px solid transparent;border-left:4px solid transparent;border-right:4px solid transparent;margin-bottom:2px}a.sort.desc:after{transform:rotate(-180deg);margin-bottom:-2px}\n"] }]
        }], null, { column: [{
                type: Input
            }], source: [{
                type: Input
            }], sort: [{
                type: Output
            }] });
})();

class ColumnTitleComponent {
    constructor() {
        this.sort = new EventEmitter();
    }
}
ColumnTitleComponent.ɵfac = function ColumnTitleComponent_Factory(t) { return new (t || ColumnTitleComponent)(); };
ColumnTitleComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ColumnTitleComponent, selectors: [["ng2-st-column-title"]], inputs: { column: "column", source: "source" }, outputs: { sort: "sort" }, decls: 2, vars: 2, consts: [[1, "ng2-smart-title"], [3, "source", "column", "sort"]], template: function ColumnTitleComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "ng2-smart-table-title", 1);
            i0.ɵɵlistener("sort", function ColumnTitleComponent_Template_ng2_smart_table_title_sort_1_listener($event) { return ctx.sort.emit($event); });
            i0.ɵɵelementEnd()();
        }
        if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("source", ctx.source)("column", ctx.column);
        }
    }, dependencies: [TitleComponent], encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ColumnTitleComponent, [{
            type: Component,
            args: [{
                    selector: 'ng2-st-column-title',
                    template: `
    <div class="ng2-smart-title">
      <ng2-smart-table-title [source]="source" [column]="column" (sort)="sort.emit($event)"></ng2-smart-table-title>
    </div>
  `,
                }]
        }], null, { column: [{
                type: Input
            }], source: [{
                type: Input
            }], sort: [{
                type: Output
            }] });
})();

const _c0$1 = ["ng2-st-thead-titles-row", ""];
function TheadTitlesRowComponent_th_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r5 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "th", 3);
        i0.ɵɵlistener("click", function TheadTitlesRowComponent_th_0_Template_th_click_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.selectAllRows.emit($event)); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵproperty("grid", ctx_r0.grid)("source", ctx_r0.source);
    }
}
function TheadTitlesRowComponent_th_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "th", 4);
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵproperty("grid", ctx_r1.grid);
    }
}
function TheadTitlesRowComponent_th_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "th", 5)(1, "ng2-st-column-title", 6);
        i0.ɵɵlistener("sort", function TheadTitlesRowComponent_th_2_Template_ng2_st_column_title_sort_1_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.sort.emit($event)); });
        i0.ɵɵelementEnd()();
    }
    if (rf & 2) {
        const column_r6 = ctx.$implicit;
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵclassMapInterpolate1("ng2-smart-th ", column_r6.id, "");
        i0.ɵɵstyleProp("width", column_r6.width);
        i0.ɵɵproperty("ngClass", column_r6.class);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("source", ctx_r2.source)("column", column_r6);
    }
}
function TheadTitlesRowComponent_th_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "th", 4);
    }
    if (rf & 2) {
        const ctx_r3 = i0.ɵɵnextContext();
        i0.ɵɵproperty("grid", ctx_r3.grid);
    }
}
class TheadTitlesRowComponent {
    constructor() {
        this.sort = new EventEmitter();
        this.selectAllRows = new EventEmitter();
    }
    ngOnChanges() {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.showActionColumnRight = this.grid.showActionColumn('right');
    }
    getVisibleColumns(columns) {
        return (columns || []).filter((column) => !column.hide);
    }
}
TheadTitlesRowComponent.ɵfac = function TheadTitlesRowComponent_Factory(t) { return new (t || TheadTitlesRowComponent)(); };
TheadTitlesRowComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TheadTitlesRowComponent, selectors: [["", "ng2-st-thead-titles-row", ""]], inputs: { grid: "grid", source: "source" }, outputs: { sort: "sort", selectAllRows: "selectAllRows" }, features: [i0.ɵɵNgOnChangesFeature], attrs: _c0$1, decls: 4, vars: 4, consts: [["ng2-st-checkbox-select-all", "", 3, "grid", "source", "click", 4, "ngIf"], ["ng2-st-actions-title", "", 3, "grid", 4, "ngIf"], [3, "class", "ngClass", "width", 4, "ngFor", "ngForOf"], ["ng2-st-checkbox-select-all", "", 3, "grid", "source", "click"], ["ng2-st-actions-title", "", 3, "grid"], [3, "ngClass"], [3, "source", "column", "sort"]], template: function TheadTitlesRowComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, TheadTitlesRowComponent_th_0_Template, 1, 2, "th", 0);
            i0.ɵɵtemplate(1, TheadTitlesRowComponent_th_1_Template, 1, 1, "th", 1);
            i0.ɵɵtemplate(2, TheadTitlesRowComponent_th_2_Template, 2, 8, "th", 2);
            i0.ɵɵtemplate(3, TheadTitlesRowComponent_th_3_Template, 1, 1, "th", 1);
        }
        if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isMultiSelectVisible);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showActionColumnLeft);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.getVisibleColumns(ctx.grid.getColumns()));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.showActionColumnRight);
        }
    }, dependencies: [i1.NgClass, i1.NgForOf, i1.NgIf, ActionsTitleComponent, CheckboxSelectAllComponent, ColumnTitleComponent], encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TheadTitlesRowComponent, [{
            type: Component,
            args: [{
                    selector: '[ng2-st-thead-titles-row]',
                    template: `
    <th ng2-st-checkbox-select-all *ngIf="isMultiSelectVisible"
                                   [grid]="grid"
                                   [source]="source"
                                   (click)="selectAllRows.emit($event)">
    </th>
    <th ng2-st-actions-title *ngIf="showActionColumnLeft" [grid]="grid"></th>
    <th *ngFor="let column of getVisibleColumns(grid.getColumns())"
        class="ng2-smart-th {{ column.id }}"
        [ngClass]="column.class"
        [style.width]="column.width">
      <ng2-st-column-title [source]="source" [column]="column" (sort)="sort.emit($event)"></ng2-st-column-title>
    </th>
    <th ng2-st-actions-title *ngIf="showActionColumnRight" [grid]="grid"></th>
  `,
                }]
        }], null, { grid: [{
                type: Input
            }], source: [{
                type: Input
            }], sort: [{
                type: Output
            }], selectAllRows: [{
                type: Output
            }] });
})();

const _c0 = ["ng2-st-thead", ""];
function Ng2SmartTableTheadComponent_tr_0_Template(rf, ctx) {
    if (rf & 1) {
        const _r4 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "tr", 3);
        i0.ɵɵlistener("sort", function Ng2SmartTableTheadComponent_tr_0_Template_tr_sort_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.sort.emit($event)); })("selectAllRows", function Ng2SmartTableTheadComponent_tr_0_Template_tr_selectAllRows_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.selectAllRows.emit($event)); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵproperty("grid", ctx_r0.grid)("source", ctx_r0.source);
    }
}
function Ng2SmartTableTheadComponent_tr_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r7 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "tr", 4);
        i0.ɵɵlistener("create", function Ng2SmartTableTheadComponent_tr_1_Template_tr_create_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r6.create.emit($event)); })("filter", function Ng2SmartTableTheadComponent_tr_1_Template_tr_filter_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.filter.emit($event)); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵproperty("grid", ctx_r1.grid)("source", ctx_r1.source);
    }
}
function Ng2SmartTableTheadComponent_tr_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "tr", 5);
    }
    if (rf & 2) {
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵproperty("grid", ctx_r2.grid)("createConfirm", ctx_r2.createConfirm);
    }
}
class Ng2SmartTableTheadComponent {
    constructor() {
        this.sort = new EventEmitter();
        this.selectAllRows = new EventEmitter();
        this.create = new EventEmitter();
        this.filter = new EventEmitter();
    }
    ngOnChanges() {
        this.isHideHeader = this.grid.getSetting('hideHeader');
        this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
    }
}
Ng2SmartTableTheadComponent.ɵfac = function Ng2SmartTableTheadComponent_Factory(t) { return new (t || Ng2SmartTableTheadComponent)(); };
Ng2SmartTableTheadComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Ng2SmartTableTheadComponent, selectors: [["", "ng2-st-thead", ""]], inputs: { grid: "grid", source: "source", createConfirm: "createConfirm" }, outputs: { sort: "sort", selectAllRows: "selectAllRows", create: "create", filter: "filter" }, features: [i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 3, vars: 3, consts: [["ng2-st-thead-titles-row", "", "class", "ng2-smart-titles", 3, "grid", "source", "sort", "selectAllRows", 4, "ngIf"], ["ng2-st-thead-filters-row", "", "class", "ng2-smart-filters", 3, "grid", "source", "create", "filter", 4, "ngIf"], ["ng2-st-thead-form-row", "", 3, "grid", "createConfirm", 4, "ngIf"], ["ng2-st-thead-titles-row", "", 1, "ng2-smart-titles", 3, "grid", "source", "sort", "selectAllRows"], ["ng2-st-thead-filters-row", "", 1, "ng2-smart-filters", 3, "grid", "source", "create", "filter"], ["ng2-st-thead-form-row", "", 3, "grid", "createConfirm"]], template: function Ng2SmartTableTheadComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, Ng2SmartTableTheadComponent_tr_0_Template, 1, 2, "tr", 0);
            i0.ɵɵtemplate(1, Ng2SmartTableTheadComponent_tr_1_Template, 1, 2, "tr", 1);
            i0.ɵɵtemplate(2, Ng2SmartTableTheadComponent_tr_2_Template, 1, 2, "tr", 2);
        }
        if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.isHideHeader);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.isHideSubHeader);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.grid.createFormShown);
        }
    }, dependencies: [i1.NgIf, TheadFitlersRowComponent, TheadFormRowComponent, TheadTitlesRowComponent], encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Ng2SmartTableTheadComponent, [{
            type: Component,
            args: [{ selector: '[ng2-st-thead]', template: "<tr ng2-st-thead-titles-row *ngIf=\"!isHideHeader\"\n                            class=\"ng2-smart-titles\"\n                            [grid]=\"grid\"\n                            [source]=\"source\"\n                            (sort)=\"sort.emit($event)\"\n                            (selectAllRows)=\"selectAllRows.emit($event)\">\n</tr>\n\n<tr ng2-st-thead-filters-row *ngIf=\"!isHideSubHeader\"\n                              class=\"ng2-smart-filters\"\n                              [grid]=\"grid\"\n                              [source]=\"source\"\n                              (create)=\"create.emit($event)\"\n                              (filter)=\"filter.emit($event)\">\n</tr>\n\n<tr ng2-st-thead-form-row *ngIf=\"grid.createFormShown\"\n                          [grid]=\"grid\"\n                          [createConfirm]=\"createConfirm\">\n</tr>\n" }]
        }], null, { grid: [{
                type: Input
            }], source: [{
                type: Input
            }], createConfirm: [{
                type: Input
            }], sort: [{
                type: Output
            }], selectAllRows: [{
                type: Output
            }], create: [{
                type: Output
            }], filter: [{
                type: Output
            }] });
})();

const THEAD_COMPONENTS = [
    ActionsComponent,
    ActionsTitleComponent,
    AddButtonComponent,
    CheckboxSelectAllComponent,
    ColumnTitleComponent,
    TitleComponent,
    TheadFitlersRowComponent,
    TheadFormRowComponent,
    TheadTitlesRowComponent,
    Ng2SmartTableTheadComponent,
];
class THeadModule {
}
THeadModule.ɵfac = function THeadModule_Factory(t) { return new (t || THeadModule)(); };
THeadModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: THeadModule });
THeadModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
        FormsModule,
        FilterModule,
        CellModule] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(THeadModule, [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        FilterModule,
                        CellModule,
                    ],
                    declarations: [
                        ...THEAD_COMPONENTS,
                    ],
                    exports: [
                        ...THEAD_COMPONENTS,
                    ],
                }]
        }], null, null);
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(THeadModule, { declarations: [ActionsComponent,
            ActionsTitleComponent,
            AddButtonComponent,
            CheckboxSelectAllComponent,
            ColumnTitleComponent,
            TitleComponent,
            TheadFitlersRowComponent,
            TheadFormRowComponent,
            TheadTitlesRowComponent,
            Ng2SmartTableTheadComponent], imports: [CommonModule,
            FormsModule,
            FilterModule,
            CellModule], exports: [ActionsComponent,
            ActionsTitleComponent,
            AddButtonComponent,
            CheckboxSelectAllComponent,
            ColumnTitleComponent,
            TitleComponent,
            TheadFitlersRowComponent,
            TheadFormRowComponent,
            TheadTitlesRowComponent,
            Ng2SmartTableTheadComponent] });
})();

/**
 * Extending object that entered in first argument.
 *
 * Returns extended object or false if have no target object or incorrect type.
 *
 * If you wish to clone source object (without modify it), just use empty new
 * object as first argument, like this:
 *   deepExtend({}, yourObj_1, [yourObj_N]);
 */
const deepExtend = function (...objects) {
    if (arguments.length < 1 || typeof arguments[0] !== 'object') {
        return false;
    }
    if (arguments.length < 2) {
        return arguments[0];
    }
    const target = arguments[0];
    // convert arguments to array and cut off target object
    const args = Array.prototype.slice.call(arguments, 1);
    let val, src;
    args.forEach((obj) => {
        // skip argument if it is array or isn't object
        if (typeof obj !== 'object' || Array.isArray(obj)) {
            return;
        }
        Object.keys(obj).forEach(function (key) {
            src = target[key]; // source value
            val = obj[key]; // new value
            // recursion prevention
            if (val === target) {
                return;
                /**
                 * if new value isn't object then just overwrite by new value
                 * instead of extending.
                 */
            }
            else if (typeof val !== 'object' || val === null) {
                target[key] = val;
                return;
                // just clone arrays (and recursive clone objects inside)
            }
            else if (Array.isArray(val)) {
                target[key] = [...val];
                return;
                // overwrite by new value if source isn't object or array
            }
            else if (typeof src !== 'object' || src === null || Array.isArray(src)) {
                target[key] = deepExtend({}, val);
                return;
                // source value and new value is objects both, extending...
            }
            else {
                target[key] = deepExtend(src, val);
                return;
            }
        });
    });
    return target;
};
class Deferred {
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}
// getDeepFromObject({result: {data: 1}}, 'result.data', 2); // returns 1
function getDeepFromObject(object = {}, name, defaultValue) {
    const keys = name.split('.');
    // clone the object
    let level = deepExtend({}, object);
    keys.forEach((k) => {
        if (level && typeof level[k] !== 'undefined') {
            level = level[k];
        }
    });
    return typeof level === 'undefined' ? defaultValue : level;
}
function getPageForRowIndex(index, perPage) {
    // we need to add 1 to convert 0-based index to 1-based page number.
    return Math.floor(index / perPage) + 1;
}

function prepareValue(value) { return value; }
class Cell {
    constructor(value, row, column, dataSet) {
        this.value = value;
        this.row = row;
        this.column = column;
        this.dataSet = dataSet;
        this.newValue = '';
        this.newValue = value;
    }
    getColumn() {
        return this.column;
    }
    getRow() {
        return this.row;
    }
    getValue() {
        const valid = this.column.getValuePrepareFunction() instanceof Function;
        const prepare = valid ? this.column.getValuePrepareFunction() : Cell.PREPARE;
        return prepare.call(null, this.value, this.row.getData(), this);
    }
    setValue(value) {
        this.newValue = value;
    }
    getId() {
        return this.getColumn().id;
    }
    getTitle() {
        return this.getColumn().title;
    }
    isEditable() {
        if (this.getRow().index === -1) {
            return this.getColumn().isAddable;
        }
        else {
            return this.getColumn().isEditable;
        }
    }
}
Cell.PREPARE = prepareValue;

class Row {
    constructor(index, data, _dataSet) {
        this.index = index;
        this.data = data;
        this._dataSet = _dataSet;
        this.isSelected = false;
        this.isInEditing = false;
        this.cells = [];
        this.process();
    }
    getCell(column) {
        return this.cells.find(el => el.getColumn() === column);
    }
    getCells() {
        return this.cells;
    }
    getData() {
        return this.data;
    }
    getIsSelected() {
        return this.isSelected;
    }
    getNewData() {
        const values = Object.assign({}, this.data);
        this.getCells().forEach((cell) => values[cell.getColumn().id] = cell.newValue);
        return values;
    }
    setData(data) {
        this.data = data;
        this.process();
    }
    process() {
        this.cells = [];
        this._dataSet.getColumns().forEach((column) => {
            const cell = this.createCell(column);
            this.cells.push(cell);
        });
    }
    createCell(column) {
        const defValue = column.settings.defaultValue ? column.settings.defaultValue : '';
        const value = typeof this.data[column.id] === 'undefined' ? defValue : this.data[column.id];
        return new Cell(value, this, column, this._dataSet);
    }
}

class Column {
    constructor(id, settings, dataSet) {
        this.id = id;
        this.settings = settings;
        this.dataSet = dataSet;
        this.title = '';
        this.type = '';
        this.class = '';
        this.width = '';
        this.hide = false;
        this.isSortable = false;
        this.isEditable = true;
        this.isAddable = true;
        this.isFilterable = false;
        this.sortDirection = '';
        this.defaultSortDirection = '';
        this.editor = { type: '', config: {}, component: null };
        this.filter = { type: '', config: {}, component: null };
        this.renderComponent = null;
        this.process();
    }
    getOnComponentInitFunction() {
        return this.onComponentInitFunction;
    }
    getCompareFunction() {
        return this.compareFunction;
    }
    getValuePrepareFunction() {
        return this.valuePrepareFunction;
    }
    getFilterFunction() {
        return this.filterFunction;
    }
    getConfig() {
        return this.editor && this.editor.config;
    }
    getFilterType() {
        return this.filter && this.filter.type;
    }
    getFilterConfig() {
        return this.filter && this.filter.config;
    }
    process() {
        this.title = this.settings['title'];
        this.class = this.settings['class'];
        this.width = this.settings['width'];
        this.hide = !!this.settings['hide'];
        this.type = this.prepareType();
        this.editor = this.settings['editor'];
        this.filter = this.settings['filter'];
        this.renderComponent = this.settings['renderComponent'];
        this.isFilterable = typeof this.settings['filter'] === 'undefined' ? true : !!this.settings['filter'];
        this.defaultSortDirection = ['asc', 'desc']
            .indexOf(this.settings['sortDirection']) !== -1 ? this.settings['sortDirection'] : '';
        this.isSortable = typeof this.settings['sort'] === 'undefined' ? true : !!this.settings['sort'];
        this.isEditable = typeof this.settings['editable'] === 'undefined' ? true : !!this.settings['editable'];
        this.isAddable = typeof this.settings['addable'] === 'undefined' ? true : !!this.settings['addable'];
        this.sortDirection = this.prepareSortDirection();
        this.compareFunction = this.settings['compareFunction'];
        this.valuePrepareFunction = this.settings['valuePrepareFunction'];
        this.filterFunction = this.settings['filterFunction'];
        this.onComponentInitFunction = this.settings['onComponentInitFunction'];
    }
    prepareType() {
        return this.settings['type'] || this.determineType();
    }
    prepareSortDirection() {
        return this.settings['sort'] === 'desc' ? 'desc' : 'asc';
    }
    determineType() {
        // TODO: determine type by data
        return 'text';
    }
}

class DataSet {
    constructor(data = [], columnSettings) {
        this.columnSettings = columnSettings;
        this.data = [];
        this.columns = [];
        this.rows = [];
        this.selectedRows = new Set();
        this.createColumns(columnSettings);
        this.setData(data);
        this.createNewRow();
    }
    setData(data) {
        this.data = data;
        this.createRows();
    }
    getColumns() {
        return this.columns;
    }
    getRows() {
        return this.rows;
    }
    getFirstRow() {
        return this.rows[0];
    }
    getLastRow() {
        return this.rows[this.rows.length - 1];
    }
    findRowByData(data) {
        return this.rows.find((row) => row.getData() === data);
    }
    setSelectAll(state) {
        this.rows.forEach((row) => {
            row.isSelected = state;
            this.storeSelectedRow(row);
        });
    }
    deselectAll() {
        this.rows.forEach((row) => {
            row.isSelected = false;
        });
        // we need to clear selectedRow field because no one row selected
        this.selectedRows.clear();
    }
    selectRow(row, state) {
        row.isSelected = state;
        this.storeSelectedRow(row);
    }
    multipleSelectRow(row) {
        row.isSelected = !row.isSelected;
        this.storeSelectedRow(row);
        return row;
    }
    getSelectedRowsData() {
        return [...this.selectedRows];
    }
    createNewRow() {
        this.newRow = new Row(-1, {}, this);
        this.newRow.isInEditing = true;
    }
    /**
     * Create columns by mapping from the settings
     * @param settings
     * @private
     */
    createColumns(settings) {
        for (const id in settings) {
            if (settings.hasOwnProperty(id)) {
                this.columns.push(new Column(id, settings[id], this));
            }
        }
    }
    /**
     * Create rows based on current data prepared in data source
     * @private
     */
    createRows() {
        this.rows = [];
        this.data.forEach((el, index) => {
            const row = new Row(index, el, this);
            row.isSelected = this.selectedRows.has(row.getData());
            this.rows.push(row);
        });
    }
    get isAllSelected() {
        return this.rows.every((row) => row.isSelected);
    }
    storeSelectedRow(row) {
        if (row.isSelected) {
            this.selectedRows.add(row.getData());
        }
        else {
            this.selectedRows.delete(row.getData());
        }
    }
}

class Grid {
    constructor(source, settings) {
        this.createFormShown = false;
        this.onSelectRowSource = new Subject();
        this.onDeselectRowSource = new Subject();
        this.setSettings(settings);
        this.setSource(source);
    }
    detach() {
        if (this.sourceOnChangedSubscription) {
            this.sourceOnChangedSubscription.unsubscribe();
        }
        if (this.sourceOnUpdatedSubscription) {
            this.sourceOnUpdatedSubscription.unsubscribe();
        }
    }
    showActionColumn(position) {
        return this.isCurrentActionsPosition(position) && this.isActionsVisible();
    }
    isCurrentActionsPosition(position) {
        return position == this.getSetting('actions.position');
    }
    isActionsVisible() {
        return this.getSetting('actions.add') || this.getSetting('actions.edit') || this.getSetting('actions.delete') || this.getSetting('actions.custom').length;
    }
    isMultiSelectVisible() {
        return this.getSetting('selectMode') === 'multi';
    }
    getNewRow() {
        return this.dataSet.newRow;
    }
    setSettings(settings) {
        this.settings = settings;
        this.dataSet = new DataSet([], this.getSetting('columns'));
        if (this.source) {
            this.source.refresh();
        }
    }
    getDataSet() {
        return this.dataSet;
    }
    setSource(source) {
        this.source = this.prepareSource(source);
        this.detach();
        this.sourceOnChangedSubscription = this.source.onChanged().subscribe((changes) => this.processDataChange(changes));
        this.sourceOnUpdatedSubscription = this.source.onUpdated().subscribe((data) => {
            const changedRow = this.dataSet.findRowByData(data);
            changedRow.setData(data);
        });
    }
    getSetting(name, defaultValue) {
        return getDeepFromObject(this.settings, name, defaultValue);
    }
    getColumns() {
        return this.dataSet.getColumns();
    }
    getRows() {
        return this.dataSet.getRows();
    }
    selectRow(row, state) {
        this.dataSet.selectRow(row, state);
    }
    multipleSelectRow(row) {
        this.dataSet.multipleSelectRow(row);
    }
    onSelectRow() {
        return this.onSelectRowSource.asObservable();
    }
    onDeselectRow() {
        return this.onDeselectRowSource.asObservable();
    }
    edit(row) {
        row.isInEditing = true;
    }
    create(row, confirmEmitter) {
        const deferred = new Deferred();
        deferred.promise.then((newData) => {
            newData = newData ? newData : row.getNewData();
            if (deferred.resolve.skipAdd) {
                this.createFormShown = false;
            }
            else {
                this.source.prepend(newData).then(() => {
                    this.createFormShown = false;
                    this.dataSet.createNewRow();
                });
            }
        }).catch((err) => {
            // doing nothing
        });
        if (this.getSetting('add.confirmCreate')) {
            confirmEmitter.emit({
                newData: row.getNewData(),
                source: this.source,
                confirm: deferred,
            });
        }
        else {
            deferred.resolve();
        }
    }
    save(row, confirmEmitter) {
        const deferred = new Deferred();
        deferred.promise.then((newData) => {
            newData = newData ? newData : row.getNewData();
            if (deferred.resolve.skipEdit) {
                row.isInEditing = false;
            }
            else {
                this.source.update(row.getData(), newData).then(() => {
                    row.isInEditing = false;
                });
            }
        }).catch((err) => {
            // doing nothing
        });
        if (this.getSetting('edit.confirmSave')) {
            confirmEmitter.emit({
                data: row.getData(),
                newData: row.getNewData(),
                source: this.source,
                confirm: deferred,
            });
        }
        else {
            deferred.resolve();
        }
    }
    delete(row, confirmEmitter) {
        const deferred = new Deferred();
        deferred.promise.then(() => {
            this.source.remove(row.getData());
        }).catch((err) => {
            // doing nothing
        });
        if (this.getSetting('delete.confirmDelete')) {
            confirmEmitter.emit({
                data: row.getData(),
                source: this.source,
                confirm: deferred,
            });
        }
        else {
            deferred.resolve();
        }
        if (row.isSelected) {
            this.dataSet.selectRow(row, false);
        }
    }
    processDataChange(changes) {
        if (this.shouldProcessChange(changes)) {
            if (changes['action'] === 'load') {
                this.dataSet.deselectAll();
            }
            this.dataSet.setData(changes['elements']);
        }
    }
    shouldProcessChange(changes) {
        if (['filter', 'sort', 'page', 'remove', 'refresh', 'load', 'paging'].indexOf(changes['action']) !== -1) {
            return true;
        }
        else if (['prepend', 'append'].indexOf(changes['action']) !== -1 && !this.getSetting('pager.display')) {
            return true;
        }
        return false;
    }
    prepareSource(source) {
        const initialSource = this.getInitialSort();
        if (initialSource && initialSource['field'] && initialSource['direction']) {
            source.setSort([initialSource], false);
        }
        if (this.getSetting('pager.display') === true) {
            source.setPaging(this.getPageToSelect(source), this.getSetting('pager.perPage'), false);
        }
        source.refresh();
        return source;
    }
    getInitialSort() {
        const sortConf = {};
        this.getColumns().forEach((column) => {
            if (column.isSortable && column.defaultSortDirection) {
                sortConf['field'] = column.id;
                sortConf['direction'] = column.defaultSortDirection;
                sortConf['compare'] = column.getCompareFunction();
            }
        });
        return sortConf;
    }
    getSelectedRowsData() {
        return this.dataSet.getRows();
    }
    selectAllRows(status) {
        this.dataSet.setSelectAll(status);
    }
    getFirstRow() {
        return this.dataSet.getFirstRow();
    }
    getLastRow() {
        return this.dataSet.getLastRow();
    }
    getSelectionInfo() {
        const switchPageToSelectedRowPage = this.getSetting('switchPageToSelectedRowPage');
        const selectedRowIndex = Number(this.getSetting('selectedRowIndex', 0)) || 0;
        const { perPage, page } = this.getSetting('pager');
        return { perPage, page, selectedRowIndex, switchPageToSelectedRowPage };
    }
    getPageToSelect(source) {
        const { switchPageToSelectedRowPage, selectedRowIndex, perPage, page } = this.getSelectionInfo();
        let pageToSelect = Math.max(1, page);
        if (switchPageToSelectedRowPage && selectedRowIndex >= 0) {
            pageToSelect = getPageForRowIndex(selectedRowIndex, perPage);
        }
        const maxPageAmount = Math.ceil(source.count() / perPage);
        return maxPageAmount ? Math.min(pageToSelect, maxPageAmount) : pageToSelect;
    }
}

class DataSource {
    constructor() {
        this.onChangedSource = new Subject();
        this.onAddedSource = new Subject();
        this.onUpdatedSource = new Subject();
        this.onRemovedSource = new Subject();
    }
    refresh() {
        this.emitOnChanged('refresh');
    }
    load(data) {
        this.emitOnChanged('load');
        return Promise.resolve();
    }
    onChanged() {
        return this.onChangedSource.asObservable();
    }
    onAdded() {
        return this.onAddedSource.asObservable();
    }
    onUpdated() {
        return this.onUpdatedSource.asObservable();
    }
    onRemoved() {
        return this.onRemovedSource.asObservable();
    }
    prepend(element) {
        this.emitOnAdded(element);
        this.emitOnChanged('prepend');
        return Promise.resolve();
    }
    append(element) {
        this.emitOnAdded(element);
        this.emitOnChanged('append');
        return Promise.resolve();
    }
    add(element) {
        this.emitOnAdded(element);
        this.emitOnChanged('add');
        return Promise.resolve();
    }
    remove(element) {
        this.emitOnRemoved(element);
        this.emitOnChanged('remove');
        return Promise.resolve();
    }
    update(element, values) {
        this.emitOnUpdated(element);
        this.emitOnChanged('update');
        return Promise.resolve();
    }
    empty() {
        this.emitOnChanged('empty');
        return Promise.resolve();
    }
    setSort(conf, doEmit) {
        if (doEmit) {
            this.emitOnChanged('sort');
        }
    }
    setFilter(conf, andOperator, doEmit) {
        if (doEmit) {
            this.emitOnChanged('filter');
        }
    }
    addFilter(fieldConf, andOperator, doEmit) {
        if (doEmit) {
            this.emitOnChanged('filter');
        }
    }
    setPaging(page, perPage, doEmit) {
        if (doEmit) {
            this.emitOnChanged('paging');
        }
    }
    setPage(page, doEmit) {
        if (doEmit) {
            this.emitOnChanged('page');
        }
    }
    emitOnRemoved(element) {
        this.onRemovedSource.next(element);
    }
    emitOnUpdated(element) {
        this.onUpdatedSource.next(element);
    }
    emitOnAdded(element) {
        this.onAddedSource.next(element);
    }
    emitOnChanged(action) {
        this.getElements().then((elements) => this.onChangedSource.next({
            action: action,
            elements: elements,
            paging: this.getPaging(),
            filter: this.getFilter(),
            sort: this.getSort(),
        }));
    }
}

function compareValues(direction, a, b) {
    if (a < b) {
        return -1 * direction;
    }
    if (a > b) {
        return direction;
    }
    return 0;
}
class LocalSorter {
    static sort(data, field, direction, customCompare) {
        const dir = (direction === 'asc') ? 1 : -1;
        const compare = customCompare ? customCompare : compareValues;
        return data.sort((a, b) => {
            return compare.call(null, dir, a[field], b[field]);
        });
    }
}

function filterValues(value, search) {
    return value.toString().toLowerCase().includes(search.toString().toLowerCase());
}
class LocalFilter {
    static filter(data, field, search, customFilter) {
        const filter = customFilter ? customFilter : filterValues;
        return data.filter((el) => {
            const value = typeof el[field] === 'undefined' || el[field] === null ? '' : el[field];
            return filter.call(null, value, search);
        });
    }
}

class LocalPager {
    static paginate(data, page, perPage) {
        return data.slice(perPage * (page - 1), perPage * page);
    }
}

class LocalDataSource extends DataSource {
    constructor(data = []) {
        super();
        this.data = [];
        this.filteredAndSorted = [];
        this.sortConf = [];
        this.filterConf = {
            filters: [],
            andOperator: true,
        };
        this.pagingConf = {};
        this.data = data;
    }
    load(data) {
        this.data = data;
        return super.load(data);
    }
    prepend(element) {
        this.reset(true);
        this.data.unshift(element);
        return super.prepend(element);
    }
    append(element) {
        this.reset(true);
        this.data.push(element);
        return super.append(element);
    }
    add(element) {
        this.data.push(element);
        return super.add(element);
    }
    remove(element) {
        this.data = this.data.filter(el => el !== element);
        return super.remove(element);
    }
    update(element, values) {
        return new Promise((resolve, reject) => {
            this.find(element).then((found) => {
                found = deepExtend(found, values);
                super.update(found, values).then(resolve).catch(reject);
            }).catch(reject);
        });
    }
    find(element) {
        const found = this.data.find(el => el === element);
        if (found) {
            return Promise.resolve(found);
        }
        return Promise.reject(new Error('Element was not found in the dataset'));
    }
    getElements() {
        const data = this.data.slice(0);
        return Promise.resolve(this.prepareData(data));
    }
    getFilteredAndSorted() {
        let data = this.data.slice(0);
        this.prepareData(data);
        return Promise.resolve(this.filteredAndSorted);
    }
    getAll() {
        const data = this.data.slice(0);
        return Promise.resolve(data);
    }
    reset(silent = false) {
        if (silent) {
            this.filterConf = {
                filters: [],
                andOperator: true,
            };
            this.sortConf = [];
            this.pagingConf['page'] = 1;
        }
        else {
            this.setFilter([], true, false);
            this.setSort([], false);
            this.setPage(1);
        }
    }
    empty() {
        this.data = [];
        return super.empty();
    }
    count() {
        return this.filteredAndSorted.length;
    }
    /**
     *
     * Array of conf objects
     * [
     *  {field: string, direction: asc|desc|null, compare: Function|null},
     * ]
     * @param conf
     * @param doEmit
     * @returns {LocalDataSource}
     */
    setSort(conf, doEmit = true) {
        if (conf !== null) {
            conf.forEach((fieldConf) => {
                if (!fieldConf['field'] || typeof fieldConf['direction'] === 'undefined') {
                    throw new Error('Sort configuration object is not valid');
                }
            });
            this.sortConf = conf;
        }
        super.setSort(conf, doEmit);
        return this;
    }
    /**
     *
     * Array of conf objects
     * [
     *  {field: string, search: string, filter: Function|null},
     * ]
     * @param conf
     * @param andOperator
     * @param doEmit
     * @returns {LocalDataSource}
     */
    setFilter(conf, andOperator = true, doEmit = true) {
        if (conf && conf.length > 0) {
            conf.forEach((fieldConf) => {
                this.addFilter(fieldConf, andOperator, false);
            });
        }
        else {
            this.filterConf = {
                filters: [],
                andOperator: true,
            };
        }
        this.filterConf.andOperator = andOperator;
        this.pagingConf['page'] = 1;
        super.setFilter(conf, andOperator, doEmit);
        return this;
    }
    addFilter(fieldConf, andOperator = true, doEmit = true) {
        if (!fieldConf['field'] || typeof fieldConf['search'] === 'undefined') {
            throw new Error('Filter configuration object is not valid');
        }
        let found = false;
        this.filterConf.filters.forEach((currentFieldConf, index) => {
            if (currentFieldConf['field'] === fieldConf['field']) {
                this.filterConf.filters[index] = fieldConf;
                found = true;
            }
        });
        if (!found) {
            this.filterConf.filters.push(fieldConf);
        }
        this.filterConf.andOperator = andOperator;
        super.addFilter(fieldConf, andOperator, doEmit);
        return this;
    }
    setPaging(page, perPage, doEmit = true) {
        this.pagingConf['page'] = page;
        this.pagingConf['perPage'] = perPage;
        super.setPaging(page, perPage, doEmit);
        return this;
    }
    setPage(page, doEmit = true) {
        this.pagingConf['page'] = page;
        super.setPage(page, doEmit);
        return this;
    }
    getSort() {
        return this.sortConf;
    }
    getFilter() {
        return this.filterConf;
    }
    getPaging() {
        return this.pagingConf;
    }
    prepareData(data) {
        data = this.filter(data);
        data = this.sort(data);
        this.filteredAndSorted = data.slice(0);
        return this.paginate(data);
    }
    sort(data) {
        if (this.sortConf) {
            this.sortConf.forEach((fieldConf) => {
                data = LocalSorter
                    .sort(data, fieldConf['field'], fieldConf['direction'], fieldConf['compare']);
            });
        }
        return data;
    }
    // TODO: refactor?
    filter(data) {
        if (this.filterConf.filters) {
            if (this.filterConf.andOperator) {
                this.filterConf.filters.forEach((fieldConf) => {
                    if (fieldConf['search'].length > 0) {
                        data = LocalFilter
                            .filter(data, fieldConf['field'], fieldConf['search'], fieldConf['filter']);
                    }
                });
            }
            else {
                let mergedData = [];
                this.filterConf.filters.forEach((fieldConf) => {
                    if (fieldConf['search'].length > 0) {
                        mergedData = mergedData.concat(LocalFilter
                            .filter(data, fieldConf['field'], fieldConf['search'], fieldConf['filter']));
                    }
                });
                // remove non unique items
                data = mergedData.filter((elem, pos, arr) => {
                    return arr.indexOf(elem) === pos;
                });
            }
        }
        return data;
    }
    paginate(data) {
        if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
            data = LocalPager.paginate(data, this.pagingConf['page'], this.pagingConf['perPage']);
        }
        return data;
    }
}

function Ng2SmartTableComponent_thead_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r3 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "thead", 4);
        i0.ɵɵlistener("create", function Ng2SmartTableComponent_thead_1_Template_thead_create_0_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r2.create.emit($event)); })("selectAllRows", function Ng2SmartTableComponent_thead_1_Template_thead_selectAllRows_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r4 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r4.onSelectAllRows()); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵproperty("grid", ctx_r0.grid)("source", ctx_r0.source)("createConfirm", ctx_r0.createConfirm);
    }
}
function Ng2SmartTableComponent_ng2_smart_table_pager_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "ng2-smart-table-pager", 5);
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵproperty("source", ctx_r1.source)("perPageSelect", ctx_r1.perPageSelect);
    }
}
class Ng2SmartTableComponent {
    constructor() {
        this.multiRowSelect = new EventEmitter();
        this.rowClicked = new EventEmitter();
        this.delete = new EventEmitter();
        this.edit = new EventEmitter();
        this.create = new EventEmitter();
        this.custom = new EventEmitter();
        this.deleteConfirm = new EventEmitter();
        this.editConfirm = new EventEmitter();
        this.createConfirm = new EventEmitter();
        this.rowHover = new EventEmitter();
        this.defaultSettings = {
            mode: 'inline',
            selectMode: 'single',
            /**
             * Points to an element in all data
             *
             * when < 0 all lines must be deselected
             */
            selectedRowIndex: 0,
            switchPageToSelectedRowPage: false,
            hideHeader: false,
            hideSubHeader: false,
            actions: {
                columnTitle: 'Actions',
                add: true,
                edit: true,
                delete: true,
                custom: [],
                position: 'left', // left|right
            },
            filter: {
                inputClass: '',
            },
            edit: {
                inputClass: '',
                editButtonContent: 'Edit',
                saveButtonContent: 'Update',
                cancelButtonContent: 'Cancel',
                confirmSave: false,
            },
            add: {
                inputClass: '',
                addButtonContent: 'Add New',
                createButtonContent: 'Create',
                cancelButtonContent: 'Cancel',
                confirmCreate: false,
            },
            delete: {
                deleteButtonContent: 'Delete',
                confirmDelete: false,
            },
            attr: {
                id: '',
                class: '',
            },
            noDataMessage: 'No data found',
            columns: {},
            pager: {
                display: true,
                page: 1,
                perPage: 10,
            },
            rowClassFunction: () => '',
        };
    }
    ngOnChanges(changes) {
        if (this.grid) {
            if (changes['settings']) {
                this.grid.setSettings(this.prepareSettings());
            }
            if (changes['source']) {
                this.source = this.prepareSource();
                this.grid.setSource(this.source);
            }
        }
        else {
            this.initGrid();
        }
        this.tableId = this.grid.getSetting('attr.id');
        this.tableClass = this.grid.getSetting('attr.class');
        this.isHideHeader = this.grid.getSetting('hideHeader');
        this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
        this.isPagerDisplay = this.grid.getSetting('pager.display');
        this.isPagerDisplay = this.grid.getSetting('pager.display');
        this.perPageSelect = this.grid.getSetting('pager.perPageSelect');
        this.rowClassFunction = this.grid.getSetting('rowClassFunction');
    }
    onRowHover(row) {
        this.rowHover.emit(row);
    }
    multipleSelectRow(row) {
        this.grid.multipleSelectRow(row);
        this.emitUserSelectRow(row);
    }
    onSelectAllRows() {
        this.grid.dataSet.isAllSelected;
        this.grid.selectAllRows(!this.grid.dataSet.isAllSelected);
        this.emitUserSelectRow(null);
    }
    onSelectRow(row, state) {
        this.grid.selectRow(row, state);
    }
    initGrid() {
        this.source = this.prepareSource();
        this.grid = new Grid(this.source, this.prepareSettings());
    }
    prepareSource() {
        if (this.source instanceof DataSource) {
            return this.source;
        }
        return new LocalDataSource();
    }
    prepareSettings() {
        return deepExtend({}, this.defaultSettings, this.settings);
    }
    emitUserSelectRow(row) {
        this.multiRowSelect.emit({
            data: row ? row.getData() : null,
            isSelected: row ? row.getIsSelected() : null,
            source: this.source,
            selected: this.grid.dataSet.getSelectedRowsData(),
        });
    }
    emitUserRowClicked(row) {
        this.rowClicked.emit({
            data: row ? row.getData() : null,
            source: this.source,
        });
    }
}
Ng2SmartTableComponent.ɵfac = function Ng2SmartTableComponent_Factory(t) { return new (t || Ng2SmartTableComponent)(); };
Ng2SmartTableComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: Ng2SmartTableComponent, selectors: [["ng2-smart-table"]], inputs: { source: "source", settings: "settings" }, outputs: { multiRowSelect: "multiRowSelect", rowClicked: "rowClicked", delete: "delete", edit: "edit", create: "create", custom: "custom", deleteConfirm: "deleteConfirm", editConfirm: "editConfirm", createConfirm: "createConfirm", rowHover: "rowHover" }, features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 9, consts: [[3, "id", "ngClass"], ["ng2-st-thead", "", 3, "grid", "source", "createConfirm", "create", "selectAllRows", 4, "ngIf"], ["ng2-st-tbody", "", 3, "grid", "source", "deleteConfirm", "editConfirm", "rowClassFunction", "edit", "delete", "custom", "userClickedRow", "multipleSelectRow", "rowHover"], [3, "source", "perPageSelect", 4, "ngIf"], ["ng2-st-thead", "", 3, "grid", "source", "createConfirm", "create", "selectAllRows"], [3, "source", "perPageSelect"]], template: function Ng2SmartTableComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "table", 0);
            i0.ɵɵtemplate(1, Ng2SmartTableComponent_thead_1_Template, 1, 3, "thead", 1);
            i0.ɵɵelementStart(2, "tbody", 2);
            i0.ɵɵlistener("edit", function Ng2SmartTableComponent_Template_tbody_edit_2_listener($event) { return ctx.edit.emit($event); })("delete", function Ng2SmartTableComponent_Template_tbody_delete_2_listener($event) { return ctx.delete.emit($event); })("custom", function Ng2SmartTableComponent_Template_tbody_custom_2_listener($event) { return ctx.custom.emit($event); })("userClickedRow", function Ng2SmartTableComponent_Template_tbody_userClickedRow_2_listener($event) { return ctx.emitUserRowClicked($event); })("multipleSelectRow", function Ng2SmartTableComponent_Template_tbody_multipleSelectRow_2_listener($event) { return ctx.multipleSelectRow($event); })("rowHover", function Ng2SmartTableComponent_Template_tbody_rowHover_2_listener($event) { return ctx.onRowHover($event); });
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(3, Ng2SmartTableComponent_ng2_smart_table_pager_3_Template, 1, 2, "ng2-smart-table-pager", 3);
        }
        if (rf & 2) {
            i0.ɵɵproperty("id", ctx.tableId)("ngClass", ctx.tableClass);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.isHideHeader || !ctx.isHideSubHeader);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("grid", ctx.grid)("source", ctx.source)("deleteConfirm", ctx.deleteConfirm)("editConfirm", ctx.editConfirm)("rowClassFunction", ctx.rowClassFunction);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.isPagerDisplay);
        }
    }, dependencies: [i1.NgClass, i1.NgIf, PagerComponent, Ng2SmartTableTbodyComponent, Ng2SmartTableTheadComponent], styles: ["[_nghost-%COMP%]{font-size:1rem}[_nghost-%COMP%]     *{box-sizing:border-box}[_nghost-%COMP%]     button, [_nghost-%COMP%]     input, [_nghost-%COMP%]     optgroup, [_nghost-%COMP%]     select, [_nghost-%COMP%]     textarea{color:inherit;font:inherit;margin:0}[_nghost-%COMP%]     table{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;width:100%;max-width:100%;overflow:auto;word-break:normal;word-break:keep-all}[_nghost-%COMP%]     table tr th{font-weight:700}[_nghost-%COMP%]     table tr section{font-size:.75em;font-weight:700}[_nghost-%COMP%]     table tr td, [_nghost-%COMP%]     table tr th{font-size:.875em;margin:0;padding:.5em 1em}[_nghost-%COMP%]     a{color:#1e6bb8;text-decoration:none}[_nghost-%COMP%]     a:hover{text-decoration:underline}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Ng2SmartTableComponent, [{
            type: Component,
            args: [{ selector: 'ng2-smart-table', template: "<table [id]=\"tableId\" [ngClass]=\"tableClass\">\n\n  <thead ng2-st-thead *ngIf=\"!isHideHeader || !isHideSubHeader\"\n                      [grid]=\"grid\"\n                      [source]=\"source\"\n                      [createConfirm]=\"createConfirm\"\n                      (create)=\"create.emit($event)\"\n                      (selectAllRows)=\"onSelectAllRows()\">\n  </thead>\n\n  <tbody ng2-st-tbody [grid]=\"grid\"\n                      [source]=\"source\"\n                      [deleteConfirm]=\"deleteConfirm\"\n                      [editConfirm]=\"editConfirm\"\n                      [rowClassFunction]=\"rowClassFunction\"\n                      (edit)=\"edit.emit($event)\"\n                      (delete)=\"delete.emit($event)\"\n                      (custom)=\"custom.emit($event)\"\n                      (userClickedRow)=\"emitUserRowClicked($event)\"\n                      (multipleSelectRow)=\"multipleSelectRow($event)\"\n                      (rowHover)=\"onRowHover($event)\">\n  </tbody>\n\n</table>\n\n<ng2-smart-table-pager *ngIf=\"isPagerDisplay\"\n                        [source]=\"source\"\n                        [perPageSelect]=\"perPageSelect\">\n</ng2-smart-table-pager>\n", styles: [":host{font-size:1rem}:host ::ng-deep *{box-sizing:border-box}:host ::ng-deep button,:host ::ng-deep input,:host ::ng-deep optgroup,:host ::ng-deep select,:host ::ng-deep textarea{color:inherit;font:inherit;margin:0}:host ::ng-deep table{line-height:1.5em;border-collapse:collapse;border-spacing:0;display:table;width:100%;max-width:100%;overflow:auto;word-break:normal;word-break:keep-all}:host ::ng-deep table tr th{font-weight:700}:host ::ng-deep table tr section{font-size:.75em;font-weight:700}:host ::ng-deep table tr td,:host ::ng-deep table tr th{font-size:.875em;margin:0;padding:.5em 1em}:host ::ng-deep a{color:#1e6bb8;text-decoration:none}:host ::ng-deep a:hover{text-decoration:underline}\n"] }]
        }], null, { source: [{
                type: Input
            }], settings: [{
                type: Input
            }], multiRowSelect: [{
                type: Output
            }], rowClicked: [{
                type: Output
            }], delete: [{
                type: Output
            }], edit: [{
                type: Output
            }], create: [{
                type: Output
            }], custom: [{
                type: Output
            }], deleteConfirm: [{
                type: Output
            }], editConfirm: [{
                type: Output
            }], createConfirm: [{
                type: Output
            }], rowHover: [{
                type: Output
            }] });
})();

class Ng2SmartTableModule {
}
Ng2SmartTableModule.ɵfac = function Ng2SmartTableModule_Factory(t) { return new (t || Ng2SmartTableModule)(); };
Ng2SmartTableModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: Ng2SmartTableModule });
Ng2SmartTableModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CellModule,
        FilterModule,
        PagerModule,
        TBodyModule,
        THeadModule] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Ng2SmartTableModule, [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        CellModule,
                        FilterModule,
                        PagerModule,
                        TBodyModule,
                        THeadModule,
                    ],
                    declarations: [
                        Ng2SmartTableComponent,
                    ],
                    exports: [
                        Ng2SmartTableComponent,
                    ],
                }]
        }], null, null);
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(Ng2SmartTableModule, { declarations: [Ng2SmartTableComponent], imports: [CommonModule,
            FormsModule,
            ReactiveFormsModule,
            CellModule,
            FilterModule,
            PagerModule,
            TBodyModule,
            THeadModule], exports: [Ng2SmartTableComponent] });
})();

class ServerSourceConf {
    constructor({ endPoint = '', sortFieldKey = '', sortDirKey = '', pagerPageKey = '', pagerLimitKey = '', filterFieldKey = '', totalKey = '', dataKey = '' } = {}) {
        this.endPoint = endPoint ? endPoint : '';
        this.sortFieldKey = sortFieldKey ? sortFieldKey : ServerSourceConf.SORT_FIELD_KEY;
        this.sortDirKey = sortDirKey ? sortDirKey : ServerSourceConf.SORT_DIR_KEY;
        this.pagerPageKey = pagerPageKey ? pagerPageKey : ServerSourceConf.PAGER_PAGE_KEY;
        this.pagerLimitKey = pagerLimitKey ? pagerLimitKey : ServerSourceConf.PAGER_LIMIT_KEY;
        this.filterFieldKey = filterFieldKey ? filterFieldKey : ServerSourceConf.FILTER_FIELD_KEY;
        this.totalKey = totalKey ? totalKey : ServerSourceConf.TOTAL_KEY;
        this.dataKey = dataKey ? dataKey : ServerSourceConf.DATA_KEY;
    }
}
ServerSourceConf.SORT_FIELD_KEY = '_sort';
ServerSourceConf.SORT_DIR_KEY = '_order';
ServerSourceConf.PAGER_PAGE_KEY = '_page';
ServerSourceConf.PAGER_LIMIT_KEY = '_limit';
ServerSourceConf.FILTER_FIELD_KEY = '#field#_like';
ServerSourceConf.TOTAL_KEY = 'x-total-count';
ServerSourceConf.DATA_KEY = '';

class ServerDataSource extends LocalDataSource {
    constructor(http, conf = {}) {
        super();
        this.http = http;
        this.lastRequestCount = 0;
        this.conf = new ServerSourceConf(conf);
        if (!this.conf.endPoint) {
            throw new Error('At least endPoint must be specified as a configuration of the server data source.');
        }
    }
    count() {
        return this.lastRequestCount;
    }
    getElements() {
        return this.requestElements()
            .pipe(map(res => {
            this.lastRequestCount = this.extractTotalFromResponse(res);
            this.data = this.extractDataFromResponse(res);
            return this.data;
        })).toPromise();
    }
    /**
     * Extracts array of data from server response
     * @param res
     * @returns {any}
     */
    extractDataFromResponse(res) {
        const rawData = res.body;
        const data = !!this.conf.dataKey ? getDeepFromObject(rawData, this.conf.dataKey, []) : rawData;
        if (data instanceof Array) {
            return data;
        }
        throw new Error(`Data must be an array.
    Please check that data extracted from the server response by the key '${this.conf.dataKey}' exists and is array.`);
    }
    /**
     * Extracts total rows count from the server response
     * Looks for the count in the heders first, then in the response body
     * @param res
     * @returns {any}
     */
    extractTotalFromResponse(res) {
        if (res.headers.has(this.conf.totalKey)) {
            return +res.headers.get(this.conf.totalKey);
        }
        else {
            const rawData = res.body;
            return getDeepFromObject(rawData, this.conf.totalKey, 0);
        }
    }
    requestElements() {
        let httpParams = this.createRequesParams();
        return this.http.get(this.conf.endPoint, { params: httpParams, observe: 'response' });
    }
    createRequesParams() {
        let httpParams = new HttpParams();
        httpParams = this.addSortRequestParams(httpParams);
        httpParams = this.addFilterRequestParams(httpParams);
        return this.addPagerRequestParams(httpParams);
    }
    addSortRequestParams(httpParams) {
        if (this.sortConf) {
            this.sortConf.forEach((fieldConf) => {
                httpParams = httpParams.set(this.conf.sortFieldKey, fieldConf.field);
                httpParams = httpParams.set(this.conf.sortDirKey, fieldConf.direction.toUpperCase());
            });
        }
        return httpParams;
    }
    addFilterRequestParams(httpParams) {
        if (this.filterConf.filters) {
            this.filterConf.filters.forEach((fieldConf) => {
                if (fieldConf['search']) {
                    httpParams = httpParams.set(this.conf.filterFieldKey.replace('#field#', fieldConf['field']), fieldConf['search']);
                }
            });
        }
        return httpParams;
    }
    addPagerRequestParams(httpParams) {
        if (this.pagingConf && this.pagingConf['page'] && this.pagingConf['perPage']) {
            httpParams = httpParams.set(this.conf.pagerPageKey, this.pagingConf['page']);
            httpParams = httpParams.set(this.conf.pagerLimitKey, this.pagingConf['perPage']);
        }
        return httpParams;
    }
}

/**
 * Generated bundle index. Do not edit.
 */

export { Cell, DefaultEditor, DefaultFilter, LocalDataSource, Ng2SmartTableComponent, Ng2SmartTableModule, ServerDataSource };
//# sourceMappingURL=Den4ik92-ng2-smart-table.mjs.map