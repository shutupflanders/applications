migration.up = function(db) {
	db.createTable({
		"columns": {
			"code":"int",
			"title":"varchar",
			"description":"varchar",
			"model":"varchar",
			"image":"varchar",
			"price":"double",
			"status":"int"
		},
		"adapter": {
			"type": "sql",
			"collection_name": "products"
		}
	});
};

migration.down = function(db) {
	db.dropTable("products");
};
