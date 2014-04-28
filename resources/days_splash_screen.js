Test1.days_advertiser = SC.Page.design({
splashScreen: SC.MainPane.design({
    childViews: 'list1 myList'.w(),

	list1:SC.LabelView.design({
	layout:{width:300,height:200},
	backgroundColor:'red',
	render:function(context){context.push("<div id='images'>gg</div>");},
 	}),

	myList: SC.ScrollView.design({
        layout:{width:200,height:200,centerY:100},
        contentView: SC.ListView.design({
	backgroundColor:'yellow',
	//value: alert(SC.Record.fetch(Test1.Objects)), SC:409
	contentBinding: 'Test1.myListController.arrangedObjects',
        selectionBinding: 'Test1.myListController.selection',
	
      })
    }),
	

  })
});


script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'http://sghotel.atlife.my/api/myhotel/hotelsplash/?format=json&dev_id=web&app=myhotel';
