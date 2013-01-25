var product = Alloy.createModel('Product'); 
var title = product.get('title');
var image = product.get('image');
// Label object in the view with id = 'label'
$.hs1.text = title+'\n'+image;