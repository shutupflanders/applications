exports.definition = {
	
	config: {
		"columns": {
			"model":"varchar",
			"title":"varchar",
			"image":"varchar"
		},
		"defaults": {
			"model":"Model",
			"title":"Title",
			"image":"Image"
		},
		"adapter": {
			"type": "sql",
			"collection_name": "Product"
		}
	},		

	extendModel: function(Model) {		
		_.extend(Model.prototype, {
						
			// extended functions go here

		}); // end extend
		
		return Model;
	},
	
	
	extendCollection: function(Collection) {		
		_.extend(Collection.prototype, {
			
			// extended functions go here			
			
		}); // end extend
		
		return Collection;
	}
		
}

