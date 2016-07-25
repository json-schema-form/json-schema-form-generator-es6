const _ = require('lodash'),
  jsfToModel = require('./jsf-to-model.js').default,
  modelToJsf = require('./model-to-jsf.js').default;
const jsonSchemaFormGenerator = {
  getFormBuilder(schema, form) {
    let _schema, _form, _model;
    _schema = jsfToModel.getSchema();
    _form = jsfToModel.getForm();
    _model = jsfToModel.getModel(schema, form);
    return {
      schema: _schema,
      form: _form,
      model: _model
    }
  },
  getDefinitions(model){
    "use strict";
    return modelToJsf.getFormDefinitions(model);
  },

};

export default jsonSchemaFormGenerator;
