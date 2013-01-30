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
        query: "SELECT * FROM Category LEFT JOIN CategoryCategory ON Category._id=CategoryCategory.childId WHERE CategoryCategory.parentId=\"2\" AND status>0 ORDER BY rank"
    });
    for (var i = 0; i < categories.length; i++) {
        var view = Ti.UI.createView({
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "#123"
        });
        if (Titanium.Filesystem.isExternalStoragePresent()) {
            var mkdfs = require("dk.mikkendigital.mkdfs");
            if (Alloy.Globals.debugOn) {
                var label1 = Ti.UI.createLabel(), label2 = Ti.UI.createLabel();
                label1.text = Titanium.Filesystem.getExternalStorageDirectory();
                label2.text = mkdfs.getExternalFilesDir();
                Ti.API.info("module externalStorageDirectory is => " + mkdfs.externalStorageDirectory);
                Ti.API.info("module externalFilesDir is => " + mkdfs.externalFilesDir);
            }
            var image = Ti.UI.createImageView({
                id: categories.at(i).get("_id"),
                backgroundColor: "#fff",
                top: 0,
                borderColor: "#eee",
                borderWidth: 1,
                width: Titanium.UI.FILL,
                image: Titanium.Filesystem.getFile(Alloy.Globals.categoryImageDir, categories.at(i).get("image"))
            });
            image.addEventListener("click", function(e) {
                var history = Ti.UI.createPickerRow({
                    list_id: 2,
                    title: "Lifting Equipment Shop"
                });
                Alloy.Globals.history.push(history);
                Alloy.Globals.history.length > 9 && Alloy.Globals.history.shift();
                var obj = e.source, subCategory = Alloy.createController("subCategory", {
                    parentId: obj.id,
                    previous: 2
                }).getView();
            });
            view.add(image);
        } else if (Alloy.Globals.debugOn) {
            label1.text = "No external storage found";
            label2.text = "No external storage found";
        }
        if (Alloy.Globals.debugOn) {
            view.add(label1);
            view.add(label2);
        }
        var scrollViewTitle = Ti.UI.createScrollView({
            showVerticalScrollIndicator: !0,
            top: "50%",
            height: "10%",
            scrollType: "vertical"
        }), labelTitle = Titanium.UI.createLabel({
            textAlign: "left",
            color: "#fff",
            text: Alloy.Globals.htmlEntity(categories.at(i).get("title")),
            font: {
                fontSize: 20,
                fontFamily: "Helvetica Neue"
            }
        });
        scrollViewTitle.add(labelTitle);
        view.add(scrollViewTitle);
        var scrollViewDesc = Ti.UI.createScrollView({
            showVerticalScrollIndicator: !0,
            top: "60%",
            scrollType: "vertical"
        }), scrollViewChildLabel = Ti.UI.createLabel({
            html: Alloy.Globals.htmlEntity(categories.at(i).get("description"))
        });
        scrollViewDesc.add(scrollViewChildLabel);
        view.add(scrollViewDesc);
        views.push(view);
    }
    var sv = Ti.UI.createScrollableView({
        id: "scroller",
        showPagingControl: !0,
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