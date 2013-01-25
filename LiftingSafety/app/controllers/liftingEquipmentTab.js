
var currentWin = Ti.UI.currentWindow;
var views = [];
var products = Alloy.Collections.product;
products.fetch();
//Get Product list (for now TODO: top level categories)
//Install SQLite Database
//var db = Ti.Database.open('/database/products.sqlite', 'main');
//sql statement
//var rows = db.execute('SELECT * FROM products');
//var collection = Alloy.Collections.products;
//collection.fetch({query: "SELECT * FROM products WHERE status>0"});
//var products = collection;
// just to check, how many rows we got selected
//Ti.API.info('Row count: ' + rows.rowCount);


//iterate through resultSet
/*while (rows.isValidRow()) {
 
    var view = Ti.UI.createView({
        top:0,
        bottom:0,
        left:0,
        right:0,
        backgroundColor: '#123'
    });
    var viewLabel = Titanium.UI.createLabel({
        color:'#999',
        text:rows.fieldByName("title"),
        font:{fontSize:20,fontFamily:'Helvetica Neue'},
        textAlign:'center'
    });
    view.add( viewLabel );
  
    views.push( view );
     
    // get next row
    rows.next();
}
// always close rowset and db connection!
rows.close();
db.close();
*/
//Scrollable View  
for(var i=1;i<products.length;i++)
{
var view = Ti.UI.createView({
        top:0,
        bottom:0,
        left:0,
        right:0,
        backgroundColor: '#123'
    });
    var viewLabel = Titanium.UI.createLabel({
        color:'#999',
        text:"Product "+i,
        font:{fontSize:20,fontFamily:'Helvetica Neue'},
        textAlign:'center'
    });
    view.add( viewLabel );
  
    views.push( view );
}
var sv = Ti.UI.createScrollableView({
    id:'scroller',
    showPagingControl:false,
    top:0,
    bottom:0,
    left:0,
    right:0,
    cacheSize:4,
    backgroundColor:"#ff0000",
    views: views   
});
$.leWindow.add(sv);
