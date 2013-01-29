function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.leWindow = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        orientationModes: [ Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT ],
        id: "leWindow"
    }), "Window", null);
    $.__views.__alloyId0 = A$(Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "Lifting Equipment Store",
        id: "__alloyId0"
    }), "Label", $.__views.leWindow);
    $.__views.leWindow.add($.__views.__alloyId0);
    $.__views.leTab = A$(Ti.UI.createTab({
        backroundColor: "white",
        icon: "/icons/leIcon.png",
        window: $.__views.leWindow,
        id: "leTab",
        title: "Lifting Equipment Store"
    }), "Tab", null);
    $.addTopLevelView($.__views.leTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var currentWin = Ti.UI.currentWindow, views = [], categoryCategories = Alloy.Collections.categoryCategory, categories = Alloy.Collections.category;
    categories.fetch({
        query: "SELECT * FROM Category LEFT JOIN CategoryCategory ON Category._id=CategoryCategory.childId WHERE CategoryCategory.parentId=\"2\""
    });
    var labelTitle = Titanium.UI.createLabel({
        textAlign: "left",
        color: "#000",
        html: categories.length,
        font: {
            fontSize: 20,
            fontFamily: "Helvetica Neue"
        }
    });
    $.leWindow.add(labelTitle);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;