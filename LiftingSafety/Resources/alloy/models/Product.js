exports.definition = {
    config: {
        columns: {
            model: "varchar",
            title: "varchar",
            image: "varchar"
        },
        defaults: {
            model: "Model",
            title: "Title",
            image: "Image"
        },
        adapter: {
            type: "sql",
            collection_name: "Product"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("Product", exports.definition, []);

collection = Alloy.C("Product", exports.definition, model);

exports.Model = model;

exports.Collection = collection;