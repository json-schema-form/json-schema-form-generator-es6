var _ = require('lodash'),
  formGenerator = require('./form-definitions-generator').default,
  definitions;

const modelToJSF = {
  getFormDefinitions(model){
    "use strict";
    definitions = {schema: {type: 'object', properties: {}}, form: []};
    if (_.isArray(model.fields)) {
      _.forEach(model.fields, (field) => {
          if (field.type) {
            definitions = formGenerator.generateField(field, definitions);
          }
        }
      );
    }
    return definitions;
  },
  addField(field){

  }
};

export default modelToJSF;
