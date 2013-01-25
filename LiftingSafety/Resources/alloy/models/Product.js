exports.definition = {
    config: {
        adapter: {
            type: "sql_new",
            collection_name: "Product",
            db_file: "/products.sqlite",
            idAttribute: "_id"
        }
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("Product", exports.definition, []);

collection = Alloy.C("Product", exports.definition, model);

exports.Model = model;

exports.Collection = collection;