'use strict';

describe('Controller: EditpostCtrl', function () {

  // load the controller's module
  beforeEach(module('angularApp'));

  var EditpostCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditpostCtrl = $controller('EditpostCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
