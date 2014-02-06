/* global describe, it */
 
(function () {
    'use strict';
 
    describe('A Collection constructor', function () {
        describe(', when run', function () {
            it('should return a new object', function () {
              var students = new Collection;
 
              expect(students.constructor.name).to.equal("Collection");
            });
 
            it('stores its first param in a property called models', function(){
              var toBeAdded = [{name: 'Bower', id: '1'},{name: 'Jack', id:'2'}]
              var students = new Collection(toBeAdded)
              
              expect(students.models).to.be.a('Array');
              expect(students.models[1].name).to.equal('Jack');
            });
 
        });
    });
 
    describe("A Collection instance", function(){
      describe("has a .find() method",function(){
        it("should return an object when given an id that is present in the models", function(){
          var students = new Collection([{name: 'Jim', id: '99'}]);
          expect(students.find('99')).to.deep.equal({name: 'Jim', id: '99'});
        });
 
        it("should not return an object when that id is not present in the models", function(){
          var students = new Collection([{name: 'Jim', id: '99'}]);
          expect(students.find('1')).to.not.equal({name: 'Jim', id: '99'});
        });
 
        it("should return undefined when that id is not present in the models", function(){
          var students = new Collection([{name: 'Jim', id: '99'}]);
          expect(students.find('1')).to.equal(undefined);
        });

        it('should return an object when given an name that is present in the models', function(){
        	var students = new Collection([{name: 'Jim', id: '99'}]);
        	expect(students.find('Jim')).to.deep.equal({name: 'Jim', id: '99'});
        });


        it("should return undefined when name is not present in the models", function(){
          var students = new Collection([{name: 'Jim', id: '99'}]);
          expect(students.find('Sammy')).to.equal(undefined);
        });

        it("should have students be an object", function(){
          var students = new Collection([{name: 'Jim', id: '99'}]);
          expect(students).to.be.an('object');
        });

        it("should have students not be a string or an array", function(){
          var students = new Collection([{name: 'Jim', id: '99'}]);
          expect(students).to.not.be.a('string' || 'array');
        });

        

      });
 
     describe("has an .add() method",function(){
        it("should add the object it's given to the models property", function(){
        	var morePeople = [{name: 'Jim', id: '99'}];
            var students = new Collection(morePeople);
            students.add({name: 'Steve', id: '77'});
            expect(students.add({name: 'Steve', id: '77'})).to.deep.equal({name: 'Steve', id: '77'});

        });

        it("should increase the models property's length by 1", function(){
        	var morePeople = [{name: 'Jim', id: '99'}];
            var students = new Collection(morePeople);
            students.add({name: 'Steve', id: '77'});
            expect(students.models.length).to.equal(2);
		});

        it("should only accept a single object as an argument", function(){

        	var morePeople = [{name: 'Jim', id: '99'}];
            var students = new Collection(morePeople);
             expect(students.add({name: 'Steve', id: '77'}, {name: 'John', id: '25'}).to.equal(undefined);
         });

        it("should not  accept an empty object as an argument", function(){
        	var morePeople = [{name: 'Jim', id: '99'}];
            var students = new Collection(morePeople);
            students.add({name: 'Steve', id: '77'});
            expect(students.add({})to.equal(undefined);
         });

        it("should throw an error when given an object without and id property", function(){
        	var morePeople = [{name: 'Jim', id: '99'}];
            var students = new Collection(morePeople);
            students.add({name: 'Steve', id: });
            expect(students.add({name: 'Steve', id: })to.throw(error);
      });
 
      describe("has a .remove() method",function(){
        it("should, when given an id, remove the corresponding object from the models property", function(){
 			var morePeople = [{name: 'Jim', id: '99'}];
            var students = new Collection(morePeople);
            students.remove({name: 'Jim', id: '99'});
            expect(students.remove({name: 'Jim', id: '99'}).to.equal([])
        });

        it("should decrease the models property's length by 1", function(){
        	var morePeople = [{name: 'Jim', id: '99'}];
            var students = new Collection(morePeople);
            students.remove({name: 'Jim', id: '99'});
            expect(students.models.length).to.equal(0);
        });

        it("should only accept a single string as an id argument");
        it("should return true on successful removal");
      });
    });
})();
    



