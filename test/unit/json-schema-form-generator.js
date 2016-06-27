import jsonSchemaFormGenerator from '../../src/json-schema-form-generator';

describe('jsonSchemaFormGenerator', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(jsonSchemaFormGenerator, 'greet');
      jsonSchemaFormGenerator.greet();
    });

    it('should have been run once', () => {
      expect(jsonSchemaFormGenerator.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(jsonSchemaFormGenerator.greet).to.have.always.returned('hello');
    });
  });
});
