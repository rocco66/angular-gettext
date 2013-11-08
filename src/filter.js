angular.module('gettext').filter('translate', function (gettextCatalog, $interpolate, $parse) {
    return function (input) {
        return gettextCatalog.getString(input);
    };
});

angular.module('gettext').filter('translateN', function (gettextCatalog, $interpolate, $parse) {
    return function (input, n, translatePlural) {
        // Validate filter parameters
        var nIsNumber = typeof(n) === "number",
            nIsStringNumber = typeof(parseInt(n, 10)) === "number";
        if (!nIsNumber && !nIsStringNumber) {
            throw new Error("First parameter of translateN must be a number, or a string with number, not " + n + ".");
        }
        if (typeof(translatePlural) !== "string") {
            throw new Error("Second parameter of translateN must be a string with plural form, not " + n + ".");
        }

        return gettextCatalog.getPlural(n, input, translatePlural);
    };
});
