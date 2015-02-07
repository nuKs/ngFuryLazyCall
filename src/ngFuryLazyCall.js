(function() {
  'use strict';

  angular.module('Fury.FuryLazyCall', [])

  .factory('FuryLazyCall', [
    '$parse',
  function($parse) {

    function NgFuryLazyCall(scope, expression) {
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
    NgFuryLazyCall.prototype = Object.create(window.FuryLazyCall.prototype);
    NgFuryLazyCall.prototype.constructor = NgFuryLazyCall;

    return NgFuryLazyCall;

  }]);

})();