
var currentWin = Ti.UI.currentWindow;
var views = [];
var categoryCategories = Alloy.Collections.categoryCategory;
var categories = Alloy.Collections.category;

	categories.fetch({
		query: 'SELECT * FROM Category LEFT JOIN CategoryCategory ON Category._id=CategoryCategory.childId WHERE CategoryCategory.parentId="2" AND status>0 ORDER BY rank'
	});
	
	//Create Views for ScrollableView  
	for(var i=0;i<categories.length;i++)
	{
		var view = Ti.UI.createView({
	        top:0,
	        bottom:0,
	        left:0,
	        right:0,
	        backgroundColor: '#123'
	    });
	    //check if ExternalStorage is present
	 	if(Titanium.Filesystem.isExternalStoragePresent())
	 	{
	 		var mkdfs = require('dk.mikkendigital.mkdfs');
	 		if(Alloy.Globals.debugOn)
			{	 
		 		var label1 = Ti.UI.createLabel();
				var label2 = Ti.UI.createLabel();
				label1.text = Titanium.Filesystem.getExternalStorageDirectory();//mkdfs.externalStorageDirectory+Alloy.Globals.categoryImageDir+categories.at(i).get("image");//mkdfs.getExternalStorageDirectory();
				label2.text = mkdfs.getExternalFilesDir();
			
				
				Ti.API.info("module externalStorageDirectory is => " + mkdfs.externalStorageDirectory);
				Ti.API.info("module externalFilesDir is => " + mkdfs.externalFilesDir);
			}
		 
	// Category Image.
		    var image = Ti.UI.createImageView({
		    	id: categories.at(i).get("_id"),
		    	backgroundColor:"#fff",
		        top : 0,
	  			borderColor: '#eee',
	  			borderWidth: 1,
	  			width:Titanium.UI.FILL,
		        image : Titanium.Filesystem.getFile(Alloy.Globals.categoryImageDir, categories.at(i).get("image"))
			    });
			    //Add Click Event Listener to open new window with subCats/Products
				image.addEventListener('click', function(e)
				{
					var history = Ti.UI.createPickerRow({list_id:2, title:'Lifting Equipment Shop'});
					Alloy.Globals.history.push(history);
					if(Alloy.Globals.history.length>9)
					{
						Alloy.Globals.history.shift();
					}
					var obj = e.source;
					var subCategory = Alloy.createController('subCategory', {
								parentId : obj.id,
								previous : 2
							}).getView();		
					
				});
				view.add(image); 
			   
	   	}
		else 
		{	
			if(Alloy.Globals.debugOn)
			{
				label1.text = "No external storage found";
				label2.text = "No external storage found";
			}
		}
		if(Alloy.Globals.debugOn)
		{     
		    view.add(label1);
		    view.add(label2);
		}
		    
	//Category Title
		var scrollViewTitle = Ti.UI.createScrollView({
		  	showVerticalScrollIndicator: true,
	    	top:'50%',
	    	height:'10%',
		  	scrollType: "vertical"
		});
	    var labelTitle = Titanium.UI.createLabel({
	    	textAlign: "left",
	        color:'#fff',
	        text:Alloy.Globals.htmlEntity(categories.at(i).get("title")),
	        font:{fontSize:20,fontFamily:'Helvetica Neue'},
	    });
	    scrollViewTitle.add(labelTitle);
	   	view.add(scrollViewTitle);
	 
	//Category Description 
		var scrollViewDesc = Ti.UI.createScrollView({
		  	showVerticalScrollIndicator: true,
	    	top:'60%',
		  	scrollType: "vertical"
		});
		var scrollViewChildLabel = Ti.UI.createLabel({
			html:Alloy.Globals.htmlEntity(categories.at(i).get("description"))
		});
		scrollViewDesc.add(scrollViewChildLabel);
		view.add(scrollViewDesc);
		//add generated view to views[]  
	    views.push( view );
	}
	
	//ScrollableView
	var sv = Ti.UI.createScrollableView({
	    id:'scroller',
	    showPagingControl:true,
	    top:0,
	    bottom:0,
	    left:0,
	    right:0,
	    cacheSize:4,
	    backgroundColor:"#ff0000",
	    views: views   
	});
	$.leWindow.add(sv);