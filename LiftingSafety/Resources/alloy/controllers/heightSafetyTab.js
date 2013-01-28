function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.hsWindow = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        orientationModes: [ Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT ],
        id: "hsWindow"
    }), "Window", null);
    $.__views.hsTitle = A$(Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        contentWidth: "auto",
        contentHeight: "auto",
        top: 0,
        text: "Height Safety Shop",
        id: "hsTitle"
    }), "Label", $.__views.hsWindow);
    $.__views.hsWindow.add($.__views.hsTitle);
    $.__views.hs1 = A$(Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        id: "hs1"
    }), "Label", $.__views.hsWindow);
    $.__views.hsWindow.add($.__views.hs1);
    $.__views.hsTab = A$(Ti.UI.createTab({
        backroundColor: "white",
        icon: "/icons/hsIcon.png",
        window: $.__views.hsWindow,
        id: "hsTab",
        title: "Heigh Safety Store"
    }), "Tab", null);
    $.addTopLevelView($.__views.hsTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var product = Alloy.createModel("Product"), title = product.get("title"), image = product.get("image");
    $.hs1.text = title + "\n" + image;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;