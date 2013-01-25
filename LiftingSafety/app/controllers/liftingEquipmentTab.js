
var currentWin = Ti.UI.currentWindow;
var views = [];
var categories = Alloy.Collections.category;
categories.fetch();


//Scrollable View  
for(var i=1;i<categories.length;i++)
{
var view = Ti.UI.createView({
        top:0,
        bottom:0,
        left:0,
        right:0,
        backgroundColor: '#123'
    });
 	if(Titanium.Filesystem.isExternalStoragePresent()){
 		var sd_card_path = Titanium.Filesystem.externalStorageDirectory;
	    // Create an ImageView.
	    var image = Ti.UI.createImageView({
	        image : '/LS/category/'+categories.at(i).get("image"),
	        width : auto,
	        height : auto,
	        top : 80
		    });
		view.add(image);    
   }
    
    // Add to the parent view.
    parentView.add(image);
    
    var viewLabel = Titanium.UI.createLabel({
        color:'#999',
        text:categories.at(i).get("title"),
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
