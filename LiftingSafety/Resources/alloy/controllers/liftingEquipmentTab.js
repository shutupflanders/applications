function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.leWindow = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
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
    var currentWin = Ti.UI.currentWindow, views = [], products = Alloy.Collections.product;
    products.fetch();
    for (var i = 1; i < products.length; i++) {
        var view = Ti.UI.createView({
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "#123"
        }), viewLabel = Titanium.UI.createLabel({
            color: "#999",
            text: "Product " + i,
            font: {
                fontSize: 20,
                fontFamily: "Helvetica Neue"
            },
            textAlign: "center"
        });
        view.add(viewLabel);
        views.push(view);
    }
    var sv = Ti.UI.createScrollableView({
        id: "scroller",
        showPagingControl: !1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        cacheSize: 4,
        backgroundColor: "#ff0000",
        views: views
    });
    $.leWindow.add(sv);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;