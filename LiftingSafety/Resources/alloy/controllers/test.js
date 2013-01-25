function Controller() {
    function showId(e) {
        e.row.model && alert(e.row.model);
    }
    function addTestFighter(e) {
        var model = Alloy.createModel("test", {
            title: "Title " + counter,
            author: "Author " + counter
        });
        counter++;
        test.add(model);
        model.save();
        test.fetch();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.__alloyId5 = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "__alloyId5"
    }), "Window", null);
    $.__views.title = A$(Ti.UI.createLabel({
        height: "50dp",
        width: Ti.UI.FILL,
        top: 0,
        color: "#fff",
        backgroundColor: "#a00",
        font: {
            fontSize: "36dp",
            fontWeight: "bold"
        },
        textAlign: "center",
        text: "Books",
        id: "title"
    }), "Label", $.__views.__alloyId5);
    $.__views.__alloyId5.add($.__views.title);
    addTestFighter ? $.__views.title.on("click", addTestFighter) : __defers["$.__views.title!click!addTestFighter"] = !0;
    $.__views.table = A$(Ti.UI.createTableView({
        top: "50dp",
        bottom: 0,
        id: "table"
    }), "TableView", $.__views.__alloyId5);
    $.__views.__alloyId5.add($.__views.table);
    var __alloyId10 = function(e) {
        var models = Alloy.Collections.test.models, len = models.length, rows = [];
        for (var i = 0; i < len; i++) {
            var __alloyId8 = models[i];
            __alloyId8.__transform = {};
            var __alloyId9 = Alloy.createController("row", {
                id: "__alloyId6",
                $model: __alloyId8
            });
            rows.push(__alloyId9.getViewEx({
                recurse: !0
            }));
        }
        $.__views.table.setData(rows);
    };
    Alloy.Collections.test.on("fetch destroy change add remove reset", __alloyId10);
    showId ? $.__views.table.on("click", showId) : __defers["$.__views.table!click!showId"] = !0;
    $.__views.testTab = A$(Ti.UI.createTab({
        window: $.__views.__alloyId5,
        id: "testTab",
        title: "Test"
    }), "Tab", null);
    $.addTopLevelView($.__views.testTab);
    exports.destroy = function() {
        Alloy.Collections.test.off("fetch destroy change add remove reset", __alloyId10);
    };
    _.extend($, $.__views);
    var test = Alloy.Collections.test, counter = 1;
    test.fetch();
    __defers["$.__views.title!click!addTestFighter"] && $.__views.title.on("click", addTestFighter);
    __defers["$.__views.table!click!showId"] && $.__views.table.on("click", showId);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;