module.exports.schema = {
  type: 'object',
  title: 'Comment',
  properties: {
    name: {
      type: 'string'
    },
    fields: {
      type: 'array',
      title: 'Fields',
      items: {
        type: 'object',
        properties: {
          open: {
            type: 'boolean',
            default: true
          },
          type: {
            title: 'Type',
            type: 'string',
            enum: [
              'actions',
              'array',
              'boolean',
              'button',
              'checkbox',
              'checkboxes',
              'date',
              'date-time',
              'email',
              'fieldset',
              'help',
              'number',
              'password',
              'radiobuttons',
              'radios',
              'radios-inline',
              'reset',
              'section',
              'select',
              'submit',
              'submit',
              'tab',
              'tabarray',
              'template',
              'text',
              'textarea',
              'time'
            ]
          },
          key: {
            title: 'Key',
            type: 'string',
            description: 'Unique identifier'
          },
          title: {
            condition: 'model.notitle',
            title: 'Title',
            type: 'string'
          },
          notitle: {
            type: 'boolean',
            title: 'Don\'t show title'
          },
          description: {
            title: 'Description',
            type: 'string'
          },
          validationMessage: {
            title: 'Validation Message',
            description: 'A custom validation error message. It can be a string, an object with error codes as key and messages as values or a custom message function',
            type: 'string'
          },
          onChange: {
            title: 'onChange',
            description: 'onChange event handler, expression or function. For expression, <code>modelValue</code> and <code>form</code> are both available. For a function, they will be passed as parameters in that order',
            type: 'string'
          },
          feedback: {
            title: 'Feedback Icon',
            description: 'Inline feedback icons. To turn off just set feedback to false. If set to a string that string is evaluated by a ngClass in the decorators scope. If not set att all the default value is <code>{ "glyphicon": true, "glyphicon-ok": hasSuccess(), "glyphicon-remove": hasError() }</code>',
            type: 'string'
          },
          disableSuccessState: {
            type: 'boolean',
            title: 'Disable Success State',
            default: false
          },
          disableErrorState: {
            type: 'boolean',
            title: 'Disable Error State',
            default: false
          },
          placeholder: {
            title: 'Placeholder',
            description: 'Placeholder on inputs and textarea',
            type: 'string'
          },
          ngModelOptions: {
            title: 'ng-Model Options',
            description: 'Passed along to ng-model-options',
            type: 'string'
          },
          readonly: {
            type: 'boolean',
            title: 'Readonly',
            default: false
          },
          htmlClass: {
            title: 'Class',
            description: 'CSS Class(es) to be added to the container div e.g. : \'street foobar\'',
            type: 'string'
          },
          destroyStrategy: {
            title: 'Destroy Strategy',
            description: 'One of <code>null</code>, <code>empty</code> , <code>remove</code>, or <code>retain</code>. Changes model on $destroy event. default is <code>remove</code>.',
            type: 'string'
          },
          copyValueTo: {
            title: 'Copy Value To',
            description: 'Copy values to these schema keys e.g [\'address.street\']. The receiving fields can be shown, but the intent for them is to be hidden.',
            type: 'string'
          },
          fieldHtmlClass: {
            title: 'Field Class',
            description: 'CSS Class(es) to be added to field input (or similar)',
            type: 'string'
          },
          labelHtmlClass: {
            title: 'Label Class',
            description: 'CSS Class(es) to be added to the label of the field (or similar)',
            type: 'string'
          },
          condition: {
            title: 'Condition',
            description: 'Show or hide field depending on an angular expression e.g \'model.age < 18\'. The expression has access to <code>model</code>, <code>modelValue</code>, <code> arrayIndex</code>.  The condition need not reference a model value it could be anything on scope.',
            type: 'string'
          },
          fieldAddonLeft: {
            title: 'Field Addon - Left',
            description: 'Add html code to left of input field. For reference check <a target=\'_blank\' href=\'http://getbootstrap.com/components/#input-groups\'>bootstrap input groups</a>.',
            type: 'string'
          },
          fieldAddonRight: {
            title: 'Field Addon - Right',
            description: 'Add html code to right of input field. For reference check <a target=\'_blank\' href=\'http://getbootstrap.com/components/#input-groups\'>bootstrap input groups</a>.',
            type: 'string'
          },
          onClick: {
            title: 'onClick',
            description: 'Function to call when a button/submit is clicked',
            type: 'string'
          },
          showAdvanced: {
            title: 'Show advance options',
            type: 'boolean'
          }
        },
        required: [
          'key'
        ]
      }
    }
  },
  required: ['name']
};
