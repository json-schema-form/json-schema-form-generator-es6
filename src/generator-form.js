module.exports.form = [
  {
    key: 'fields',
    type: 'array',
    title: 'Form Fields',
    add: 'Add a new Field',
    remove: 'Remove Field',
    startEmpty: true,
    items: [
      {
        key: 'fields[].title',
        htmlClass: 'hide-label',
        placeholder: 'Title'
      },
      {
        type: 'section',
        htmlClass: 'row',
        items: [
          {
            key: 'fields[].type',
            placeholder: 'Type',
            notitle: true,
            htmlClass: 'col-sm-6 hide-label',
          },
          {
            key: 'fields[].key',
            //type: 'section',
            placeholder: 'Key (Unique Identifier)',
            notitle: true,
            htmlClass: 'col-sm-6 hide-label',
          }
        ]
      },
      {
        key: 'fields[].open',
        notitle: true,
        type: 'hidden'
      },
      {
        key: 'fields[].description',
        type: 'textarea',
        placeholder: 'Description',
        notitle: true,
      },
      {
        type: 'section',
        htmlClass: 'row',
        items: [
          {
            key: 'fields[].notitle',
            htmlClass: 'col-sm-6'
          },
          {
            key: 'fields[].showAdvanced',
            htmlClass: 'col-sm-6'
          },
        ]
      },
      {
        condition: 'model.fields[arrayIndex].showAdvanced',
        type: 'help',
        helpvalue: '<hr/>'
      },
      {
        type: 'section',
        htmlClass: 'row',
        items: [
          {
            type: 'section',
            htmlClass: 'col-md-4',
            items: [
              {
                condition: 'model.fields[arrayIndex].showAdvanced',
                key: 'fields[].disableSuccessState'
              }
            ]
          },
          {
            type: 'section',
            htmlClass: 'col-md-4',
            items: [
              {
                condition: 'model.fields[arrayIndex].showAdvanced',
                key: 'fields[].disableErrorState'
              }
            ]
          },
          {
            type: 'section',
            htmlClass: 'col-md-4',
            items: [
              {
                condition: 'model.fields[arrayIndex].showAdvanced',
                key: 'fields[].readonly'
              },
            ]
          }
        ]
      },
      {
        condition: 'model.fields[arrayIndex].showAdvanced',
        type: 'help',
        helpvalue: '<hr/>'
      },
      {
        condition: 'model.fields[arrayIndex].showAdvanced',
        key: 'fields[].validationMessage',
        type: 'textarea'
      },
      {
        condition: 'model.fields[arrayIndex].showAdvanced',
        key: 'fields[].onChange',
        type: 'textarea'
      },
      {
        condition: 'model.fields[arrayIndex].showAdvanced',
        key: 'fields[].feedback'
      },
      {
        condition: 'model.fields[arrayIndex].showAdvanced',
        key: 'fields[].placeholder'
      },
      {
        condition: 'model.fields[arrayIndex].showAdvanced',
        key: 'fields[].ngModelOptions',
        type: 'textarea'
      },
      {
        condition: 'model.fields[arrayIndex].showAdvanced',
        key: 'fields[].htmlClass'
      },
      {
        condition: 'model.fields[arrayIndex].showAdvanced',
        key: 'fields[].destroyStrategy'
      },
      {
        condition: 'model.fields[arrayIndex].showAdvanced',
        key: 'fields[].copyValueTo'
      },
      {
        condition: 'model.fields[arrayIndex].showAdvanced',
        key: 'fields[].fieldHtmlClass'
      },
      {
        condition: 'model.fields[arrayIndex].showAdvanced',
        key: 'fields[].labelHtmlClass'
      },
      {
        condition: 'model.fields[arrayIndex].showAdvanced',
        key: 'fields[].condition'
      },
      {
        condition: 'model.fields[arrayIndex].showAdvanced',
        'key': 'fields[].fieldAddonLeft'
      },
      {
        condition: 'model.fields[arrayIndex].showAdvanced',
        key: 'fields[].fieldAddonRight'
      }

    ]
  }
];
