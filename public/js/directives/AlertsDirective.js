alertsModule.directive("alertWidget", function () {
    return {
        transclude: false,
        scope: {

        },
        controller:"alertWidgetController",
        templateUrl: "partials/directives/alertsPartial.html"
    };

});
