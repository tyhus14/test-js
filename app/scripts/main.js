console.log('\'Allo \'Allo!');
 
function Collection (models) {
  this.models = models || [];
 
  this.find = function(id) {
    var result;
    
 
    this.models.forEach(function(value, index){
      if (value.id == id || value.name == id) {
        result = value;
      };
    });
 
    if (result) {
      return result;
    };
  };

  this.add = function(){
  	var result;
  };


};



