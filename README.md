# json-schema-form-generator

A tool to generate json schema forms

[![Travis build status](http://img.shields.io/travis/json-schema-form/json-schema-form-genetator-es6.svg?style=flat)](https://travis-ci.org/json-schema-form/json-schema-form-genetator-es6)
[![Code Climate](https://codeclimate.com/github/json-schema-form/json-schema-form-genetator-es6/badges/gpa.svg)](https://codeclimate.com/github/json-schema-form/json-schema-form-genetator-es6)
[![Test Coverage](https://codeclimate.com/github/json-schema-form/json-schema-form-genetator-es6/badges/coverage.svg)](https://codeclimate.com/github/json-schema-form/json-schema-form-genetator-es6)
[![Dependency Status](https://david-dm.org/json-schema-form/json-schema-form-genetator-es6.svg)](https://david-dm.org/json-schema-form/json-schema-form-genetator-es6)
[![devDependency Status](https://david-dm.org/json-schema-form/json-schema-form-genetator-es6/dev-status.svg)](https://david-dm.org/json-schema-form/json-schema-form-genetator-es6#info=devDependencies)

## Objective

The goal for this libary is to provide a generator that will allow users of json-schema-form to generate form definitions through various means. This is the base package and will provide translations of simple data into json-schema-form syntax. It will also import json-schema-form definitions and return it in a format that can be used with the GUI.

## Installation

    npm install json-schema-generator
  
## Usage

The generator accepts standard json schema form schema and form as input and will output json schema form schema, form and model that use jsf to edit the form definition. 


    var jsonSchemaFormGenerator = require('json-schema-generator').default;
    generator = jsonSchemaFormGenerator.getFormBuilder(schema, form);
    
In html:
   
    <div sf-schema="generator.schema" sf-form="generator.form" sf-model="generator.model"></div>
    
To get the form definitions, simply call ```getDefinitions``` with the model as parameter

    var output = jsonSchemaFormGenerator.getDefinitions(generator.model);
    
    
In html, you can then show the form like any standard json schema form:
   
    <div sf-schema="output.schema" sf-form="ouput.form"></div>  


NB: The examples use the angular-builder, however the generator is framework agnostic and uses plain javascript. Adapters for different frameworks are required for drop-in usage. 


## Todo

- Support the full json schema form definition
    - Enum and Titlemaps
    - Fields without keys
    - All Json Schema Draft 4 keywords
    - Fields with items
- Unit tests
- Framework adapters
    - Angular Directive





