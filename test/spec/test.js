 
 
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
          expect(students.find('99')).to.deep.equal({name: 'Jim', id: '99'})
        });
 
        it("should not return an object when that id is not present in the models", function(){
          var students = new Collection([{name: 'Jim', id: '99'}]);
          expect(students.find('1')).to.not.equal({name: 'Jim', id: '99'});
        });
 
        it("should return undefined when that id is not present in the models", function(){
          var students = new Collection([{name: 'Jim', id: '99'}]);
          expect(students.find('1')).to.equal(undefined);
        });
 
        it("should throw an error when given an arguemnt other than a string", function(){
          var students = new Collection([{name: 'Jim', id: '99'}]);
          expect(function(){students.find(1)}).to.throw(Error);
          expect(function(){students.find({})}).to.throw(Error);
          expect(function(){students.find([])}).to.throw(Error);
        });
      });
 
      describe("has an .add() method",function(){
        it("should add the object it's given to the models property", function(){
            var students = new Collection([{name: 'Jim', id: '99'}]);
            students.add({name: 'Sally', id: '33'});

            expect(students.models[1]).to.deep.equal({name: 'Sally', id: '33'});
        });

        it("should increase the models property's length by 1", function(){
        	  var students = new Collection([{name: 'Jim', id: '99'}]);
            students.add({name: 'Sally', id: '33'});

            expect(students.models.length).to.equal(2);
        });

        // it("should only accept a single object as an argument", function(){
        // 	var students = new Collection([{name: 'Jim', id: '99'}]);
        //     expect(function(){students.add({name: 'Sally', id: '33'}, {name: 'Steve', id: '45'})}).to.throw(Error);
        // });

        it("should not  accept an empty object as an argument", function(){
            var students = new Collection([{name: 'Jim', id: '99'}]);
            expect(function(){students.add({})}).to.throw(Error);
        });

        it("should throw an error when given an object without an id property", function(){
            var students = new Collection([{name: 'Jim', id: '99'}]);
            expect(function(){students.add({name: 'Sally', pet: "dog" })}).to.throw(Error);
        });
      });
 
      describe("has a .remove() method",function(){
        it("should, when given an id, remove the corresponding object from the models property", function(){
            var students = new Collection([{name: 'Jim', id: '99'}, {name: 'Sally', id: '33'}]);
            students.remove('99');

            expect(students.models[0]).to.deep.equal({name: 'Sally', id: '33'});
        });


        it("should decrease the models property's length by 1", function(){
            var students = new Collection([{name: 'Jim', id: '99'}, {name: 'Sally', id: '33'}]);
            students.remove('99');

            expect(students.models.length).to.deep.equal(1);
        });


        it("should only accept a single string as an id argument", function(){
        	  var students = new Collection([{name: 'Jim', id: '99'}, {name: 'Sally', id: '33'}]);
           
			      expect(function(){students.remove(1)}).to.throw(Error);
	          expect(function(){students.remove({})}).to.throw(Error);
	          expect(function(){students.remove([])}).to.throw(Error);
        });

        it("should return true on successful removal", function(){
        	  var students = new Collection([{name: 'Jim', id: '99'}, {name: 'Sally', id: '33'}]);
            expect(students.remove('99')).to.equal(true);
        });

      })

      describe("has an .empty() method", function(){
        it('should clear out the models array', function(){
        	  var students = new Collection([{name: 'Jim', id: '99'}, {name: 'Sally', id: '33'}]);
            students.empty();

            expect(students.models).to.deep.equal([]);
        });

        it('should decrease the models length to 0', function(){
        	  var students = new Collection([{name: 'Jim', id: '99'}, {name: 'Sally', id: '33'}]);
            students.empty();

            expect(students.models.length).to.equal(0);
        });

         it("should return true on successful removal", function(){
        	  var students = new Collection([{name: 'Jim', id: '99'}, {name: 'Sally', id: '33'}]);
           
            expect(students.empty()).to.equal(true);
        });

      })
 
      describe("has an .random() method", function(){
        it('should return a random object from the models array', function(){
        	  var students = new Collection([{name: 'Jim', id: '99'}, {name: 'Sally', id: '33'}]);
        	  sampleStudent = students.random();
            expect(students.models).to.include(sampleStudent);
        });

        it('should have the name property', function(){
       	  	var students = new Collection([{name: 'Jim', id: '99'}, {name: 'Sally', id: '33'}, {name: 'Billy', id: '44'}]);
       	  	sampleStudent = students.random();
          	expect(sampleStudent).to.have.property('name');
        });

        it('should have the id property', function(){
            var students = new Collection([{name: 'Jim', id: '99'}, {name: 'Sally', id: '33'}, {name: 'Billy', id: '44'}]);
            sampleStudent = students.random();
            expect(sampleStudent).to.have.property('id');
        });

      });
 
      describe("has a .length() method", function(){
        it('should return the length models array', function(){

          var students = new Collection([{name: 'Jim', id: '99'}, {name: 'Sally', id: '33'}, {name: 'Billy', id: '44'}]);

            expect(students.length()).to.equal(students.models.length)
        });

         it('should not accept a string as an arguments', function(){

          var students = new Collection([{name: 'Jim', id: '99'}, {name: 'Sally', id: '33'}, {name: 'Billy', id: '44'}]);

            expect(function(){students.length('this is an example')}).to.throw(Error)
        });

      });
    });
})();
    



