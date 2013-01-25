exports.definition = {
config: {
// No need to define columns object, loading the db_file
// below will do that for us.

"adapter": {
"type": "sql_new",

// The table name inside the sqlite database to use for
// models and collections based on this definition.
"collection_name": "Product",

// db_file tells model to use myapp.sqlite file to install
// database and to use "myapp" as the database name for
// all further operations
"db_file": "/products.sqlite",

// idAttribute tells Alloy/Backbone to use this column in
// my table as its unique identifier field. Without
// specifying this, Alloy's default behavior is to create
// and "alloy_id" field which will uniquely identify your
// rows in the table.
"idAttribute": "_id"
}
}
}