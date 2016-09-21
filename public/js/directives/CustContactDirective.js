custContactModule.directive("custContactWidget", function () {
    return {
        transclude: false,
        scope: {

        },
        controller:"custContactWidgetController",
        templateUrl: "partials/directives/custContact.html"
    };

});
