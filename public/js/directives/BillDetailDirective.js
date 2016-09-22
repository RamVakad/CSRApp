billDetailModule.directive("billDetailWidget", function () {
    return {
        transclude: false,
        scope: {

        },
        controller:"billDetailWidgetController",
        templateUrl: "partials/directives/billDetail.html"
    };

});
