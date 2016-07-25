var _ = require('lodash');

const formDefinitionsGenerator = {
  generateField(field, definitions){
    "use strict";
    let morpher = _.camelCase('_generate_' + field.type.replace('-', '_') + '_field');

    definitions = this.generateStandardFormAttributes(field, definitions);
    definitions = this.generateStandardSchemaAttributes(field, definitions);

    if (_.isFunction(this[morpher])) {
      definitions = this[morpher](field, definitions);
    }

    return definitions;
  },
  generateStandardFormAttributes(field, definitions)  {

    let form, formIndex, formProps = [
      'key',
      'condition',
      'onChange',
      'notitle',
      'showAdvanced',
      'validationMessage',
      'onChange',
      'ngModelOptions',
      'condition',
      'fieldAddonLeft',
      'fieldAddonRight',
      'showAdvanced',
      'validationMessage',
      'onChange',
      'feedback',
      'disableSuccessState',
      'disableErrorState',
      'placeholder',
      'ngModelOptions',
      'readonly',
      'htmlClass',
      'destroyStrategy',
      'copyValueTo',
      'fieldHtmlClass',
      'labelHtmlClass',
      'items'
    ];
    form = _.pick(field, formProps);
    formIndex = _.findIndex(definitions, {key: field.key});
    if (!form.key) {
      form.type = field.type;
      form.title = field.title;
      formIndex = _.findIndex(definitions, {key: undefined, type: field.type, title: field.title});
    }
    if (formIndex > -1) {
      definitions.form[formIndex] = form;
    } else {
      definitions.form.push(form);
    }
    return definitions;
  },
  generateStandardSchemaAttributes(field, definitions)  {

    let schemaProps = [
      'type',
      'format',
      'description',
      'title',
      'minLength',
      'maxLength'
    ];
    if (field.key) {
      definitions.schema.properties[field.key] = _.pick(field, schemaProps);
    }
    return definitions;
  },
  updateForm(definitions, key, attr, value) {
    let index = _.findKey(definitions.form, 'key', key);
    definitions.form[index][attr] = value;
    return definitions;
  },
  generateTextField(field, definitions){
    definitions.schema.properties[field.key]['type'] = 'string';
    return definitions;
  },
  generateTextareaField(field, definitions){
    definitions.schema.properties[field.key]['type'] = 'string';
    definitions = this.updateForm(definitions, field.key, 'type', 'textarea');
    return definitions;
  },
  generateEmailField(field, definitions){
    definitions.schema.properties[field.key]['type'] = 'string';
    definitions.schema.properties[field.key]['format'] = 'email';
    return definitions;
  },
  generateSelectField(field, definitions){
    definitions.schema.properties[field.key]['type'] = 'string';
    definitions.schema.properties[field.key]['enum'] = field.enum;
    return definitions;
  },
  generateCheckboxField(field, definitions){
    definitions.schema.properties[field.key]['type'] = 'string';
    definitions.schema.properties[field.key]['enum'] = field.enum;
    return definitions;
  },
  generateDateField(field, definitions){
    definitions.schema.properties[field.key]['type'] = 'string';
    definitions.schema.properties[field.key]['format'] = 'date';
    return definitions;
  },
  generateTimeField(field, definitions){
    definitions.schema.properties[field.key]['type'] = 'string';
    definitions.schema.properties[field.key]['format'] = 'time';
    return definitions;
  },
  generateDateTimeField(field, definitions){
    definitions.schema.properties[field.key]['type'] = 'string';
    definitions.schema.properties[field.key]['format'] = 'date-time';
    return definitions;
  },
  generateFieldsetField(field, definitions){
    if (field.key) {
      delete  definitions.schema.properties[field.key]
    }
    return definitions;
  },
  generateSectionField(field, definitions){
    return definitions;
  },
  generateActionsField(field, definitions){
    return definitions;
  },
  generateNumberField(field, definitions){
    return definitions;
  },
  generatePasswordField(field, definitions){
    return definitions;
  },
  generateCheckboxField(field, definitions){
    return definitions;
  },
  generateCheckboxesField(field, definitions){
    return definitions;
  },
  generateSubmitField(field, definitions){
    return definitions;
  },
  generateButtonField(field, definitions){
    return definitions;
  },
  generateRadiosField(field, definitions){
    return definitions;
  },
  generateRadiosInlineField(field, definitions){
    return definitions;
  },
  generateRadioButtonsField(field, definitions){
    return definitions;
  },
  generateHelpField(field, definitions){
    return definitions;
  },
  generateTemplateField(field, definitions){
    return definitions;
  },
  generateTabField(field, definitions){
    return definitions;
  },
  generateArrayField(field, definitions){
    return definitions;
  },
  generateTabArrayField(field, definitions){
    return definitions;
  },
}

export default formDefinitionsGenerator;