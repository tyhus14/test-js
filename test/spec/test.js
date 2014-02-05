/* global describe, it */

(function () {
    'use strict';

    describe('Checking if object exists', function () {
        describe('within the array models', function () {
            it('should have two objects', function () {
              var models = []
              expect(models).to.have.length(2);
            });
        });
    });
})();
