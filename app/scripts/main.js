console.log('\'Allo \'Allo!');
 
function Collection (models) {
  this.models = models || [];
 
  this.find = function(id) {
    var result;
 
    if (typeof(id) != 'string') {
      throw new Error("Whoops!");
    }
 
    this.models.forEach(function(value, index){
      if (value.id == id) {
        result = value;
      }
    });
 
    if (result) {
      return result;
    };
  };

  this.add = function (group){
  	

  		if (_.isEmpty(group)){
  			throw new Error('It is empty');
  		}

  		if (!group.hasOwnProperty('id')) {
  			throw new Error('this is undefined');
  		}
  	

  	this.models.push(group);
  };

  this.remove = function (removePerson){
  		

  		if (_.isString(removePerson) != true) {
  			throw new Error('this is not a string');
  		}

		this.models = _.reject(models, function(idToRemove){
			return idToRemove.id == removePerson;
		})

		return true;
  };

  this.empty = function (){
  		
  		this.models = [];
  		return true;
  };

  	

};





