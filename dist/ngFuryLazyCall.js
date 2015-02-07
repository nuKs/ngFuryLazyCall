(function() {
  'use strict';

  angular.module('Fury.FuryLazyCall', [])

  .factory('FuryLazyCall', [
    '$parse',
  function($parse) {

    function FuryLazyCall(scope, expression) {
      window.FuryLazyCall.call(this);

      var _this = this;

      if(scope && expression) {
        if(!!$parse(expression)(scope)) {
          this.exec();
        }
        else {
          var unwatch = scope.$watch(expression, function(expressionResult) {
            if(expressionResult) {
              _this.exec();
              unwatch();
            }
          });
        }
      }
    }
    FuryLazyCall.prototype = Object.create(window.FuryLazyCall.prototype);
    FuryLazyCall.prototype.constructor = FuryLazyCall;

    return FuryLazyCall;

  }]);

})();
//# sourceMappingURL=ngFuryLazyCall.js.map