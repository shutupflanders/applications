// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
//Alloy.Collections.products = Alloy.createCollection('products');

//Create Collections from db Tables
Alloy.Collections.product = Alloy.createCollection('product');
Alloy.Collections.category = Alloy.createCollection('category');
Alloy.Collections.categoryCategory = Alloy.createCollection('categoryCategory');

//Storage paths for Resources
Alloy.Globals.categoryImageDir = 'file:///storage/extSdCard/LS/category/';

//History of views
Alloy.Globals.history = [];

//set to true to turn on the printing of paths, etc
Alloy.Globals.debugOn = false;


//helpers to be included
Alloy.Globals.htmlEntity = function(string){
	Ti.include('/helpers/htmlentities.js');
	
	var result;
	result = entityToHtml(string);
	//result = result.replace(/<br\s*[\/]?>/gi, '\n');
	//result = result.replace(/(<([^>]+)>)/ig,"");
	return result;
};
