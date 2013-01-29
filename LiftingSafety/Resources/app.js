var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Collections.product = Alloy.createCollection("product");

Alloy.Collections.category = Alloy.createCollection("category");

Alloy.Collections.categoryCategory = Alloy.createCollection("categoryCategory");

Alloy.Globals.categoryImageDir = "file:///storage/extSdCard/LS/category/";

Alloy.Globals.history = [];

Alloy.Globals.debugOn = !1;

Alloy.Globals.htmlEntity = function(string) {
    Ti.include("/helpers/htmlentities.js");
    var result;
    result = entityToHtml(string);
    return result;
};

Alloy.createController("index");