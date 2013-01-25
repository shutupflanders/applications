function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.row = A$(Ti.UI.createTableViewRow({
        height: "60dp",
        backgroundColor: "#fff",
        id: "row"
    }), "TableViewRow", null);
    $.addTopLevelView($.__views.row);
    $.__views.bookTitle = A$(Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        top: "7dp",
        left: "7dp",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        id: "bookTitle",
        text: typeof $model.__transform.title != "undefined" ? $model.__transform.title : $model.get("title")
    }), "Label", $.__views.row);
    $.__views.row.add($.__views.bookTitle);
    $.__views.author = A$(Ti.UI.createLabel({
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        bottom: "7dp",
        left: "14dp",
        font: {
            fontSize: "16dp",
            fonWeight: "normal"
        },
        id: "author",
        text: typeof $model.__transform.author != "undefined" ? $model.__transform.author : $model.get("author")
    }), "Label", $.__views.row);
    $.__views.row.add($.__views.author);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;