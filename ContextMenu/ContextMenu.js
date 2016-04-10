angular.module('dmComponents', []);

/**
 * Created by Hassan on 4/10/2016.
 */

var scripts = document.getElementsByTagName("script")
var currentScriptPath = scripts[scripts.length-1].src;

app.directive("contextMenuHandler", function(){
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, elem, attr, ctrl) {
            elem.bind('contextmenu', function(event) {
                ctrl.$setViewValue({
                    display: true,
                    //locationX: event.
                    //locationY: event
                });
                return false; //Deactivate browser ContextMenu
            });
        }
    }
});

app.directive("contextMenuStructure", function(){
    return {
        restrict: 'AE',
        scope: {
            visible: '='
        },
        transclude: true,
        require: 'ngModel',
        controller: ['$scope', function($scope){

        }],
        controllerAs: 'vm',
        templateUrl: currentScriptPath.replace('contextMenuDirective.js','contextMenuStructureTemplate.html'),
        link: function(scope, elem, attr, ctrl) {
            scope.$watch(function () {
                    return ctrl.$modelValue.display
                }, function () {
                    if(ctrl.$modelValue!=null){
                        scope.visible = ctrl.$modelValue.display;
                    }
                }
            );
            //ctrl.$viewChangeListeners.push(function(){
            //    if(!isNaN(val)) {
            //        scope.visible = ctrl.$viewValue;
            //    }
            //});
        }
    }
});

app.directive("contextMenuItemContainer", function () {
    return {
        restrict: 'AE',
        require: '^^contextMenuStructure',
        transclude: true,
        templateUrl: currentScriptPath.replace('contextMenuDirective.js','contextMenuItemContainerTemplate.html'),
        link:function(scope, elem, attr){

        }
    }
});

app.directive("contextMenuItem", function () {
    return {
        restrict: 'AE',
        require: '^^contextMenuStructure',
        transclude: true,
        templateUrl: currentScriptPath.replace('contextMenuDirective.js','contextMenuItemTemplate.html'),
        link:function(scope, elem, attr){

        }
    }
});

app.directive("contextMenuDivider", function () {
    return {
        restrict: 'AE',
        require: '^^contextMenuStructure',
        replace: true,
        template: '<li class="divider"></li>'
    }
});

app.directive("contextMenuNested", function () {
    return {
        restrict: 'AE',
        require: '^^contextMenuStructure',
        transclude: true,
        templateUrl: currentScriptPath.replace('contextMenuDirective.js','contextMenuNestedTemplate.html')
    }
});
