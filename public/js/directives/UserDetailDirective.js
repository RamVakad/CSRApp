userDetailModule.directive("userDetailWidget", function () {
    return {
        transclude: false,
        scope: {

        },
        controller:"userDetailWidgetController",
        templateUrl: "partials/directives/userDetail.html"
    };

});
