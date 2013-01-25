exports.definition = {
    config: {
        adapter: {
            type: "sql_new",
            collection_name: "test",
            db_file: "/test3.sqlite",
            idAttribute: "_id"
        }
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("test", exports.definition, []);

collection = Alloy.C("test", exports.definition, model);

exports.Model = model;

exports.Collection = collection;