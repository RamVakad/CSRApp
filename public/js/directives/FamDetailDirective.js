famDetailModule.directive("famDetailWidget", function () {
    return {
        transclude: false,
        scope: {

        },
        controller:"famDetailWidgetController",
        templateUrl: "partials/directives/famDetail.html"
    };

});
