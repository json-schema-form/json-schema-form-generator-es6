var _ = require('lodash');
const JSFToModel = {
  getModel(schema, form){
    let model = {};

    let index = _.indexOf(form, '*');
    if (index > -1) {
      form.splice(index, 1);
      _.each(schema.properties, (item, slug)=> {
        form.splice(index, 0, {key: slug});
        index++;
      });
    }


    form = _.map(form, (field)=> {
      "use strict";
      if (_.isString(field)) {
        field = {key: field};
      }

      field.schema = _.get(schema.properties, field.key, {});

      field = _.defaultsDeep(_.get(field.schema, 'x-schema-form', {}), field, field.schema);

      if(field.type == 'string')
      {
        field.type = 'text'
        if(field.enum)
        {
          field.type = 'select'
        }
      }

      return field;
    });
    model.fields = form;
    return model;

  },

  getSchema(){
    let definition = require('./generator-schema.js');
    console.log(definition.schema);
    return definition.schema;
  },
  getForm(){
    let definition = require('./generator-form.js');
    return definition.form;
  }

};

export default JSFToModel;
