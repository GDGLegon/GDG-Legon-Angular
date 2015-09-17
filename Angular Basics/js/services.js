angular.module('GDGLegon')
  .factory('AppService', function() {
    return {
      moreData: function(){
        return "Title from Service."
      }
    };
  });
