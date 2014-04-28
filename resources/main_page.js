// ==========================================================================
// Project:   Test1 - mainPage
// Copyright: @2014 My Company, Inc.
// ==========================================================================
/*globals Test1 */

// This page describes the main user interface for your application.



Test1.mainPage = SC.Page.design({

  	mainPane: SC.MainPane.design({
	childViews: 'header container1 container2 container3'.w(),

		header:SC.View.design({
		classNames:['header-view'],
		}),

		container1:SC.View.design({
		classNames:['background-view'],
		childViews:['daysHotel'],

			daysHotel:SC.LabelView.extend(SC.Gesturable,{
			gestures:[SC.TapGesture,"myTapGesture1"],//gestures & tap ==>fixed (cannot be modified)
			myTapGesture1:SC.TapGesture.extend({
				name:"tap"
			}),
                        classNames:['days-hotel-view'],
			escapeHTML:NO,
			value:"\n&nbsp&nbsp DAYS HOTEL SINGAPORE AT \n&nbsp&nbsp ZHONGSHAN PARK",
			mouseDown: function() {
               		
			SC.routes.set('location','daysHotel/tc');
            		},
			tap: function() {
				
			SC.routes.set('location','daysHotel/tc');
			 }			
			})
		}),

		container2:SC.View.design({
		classNames:['background-view'],
		childViews:['regisHotel'],
			
			regisHotel:SC.LabelView.extend(SC.Gesturable,{
			gestures:[SC.TapGesture,"myTapGesture2"],
			myTapGesture2:SC.TapGesture.extend({
				name:"tap"
			}),
			classNames:['regis-hotel-view'],
			escapeHTML:NO,
			value:"\n&nbsp&nbsp PARK REGIS SINGAPORE",
			mouseDown: function() {
               		 SC.routes.set('location','regisHotel/tc');
            		},
			tap: function() {
				SC.routes.set('location','regisHotel/tc');
			 }
			})
		}),
	container3:SC.View.design({
		classNames:['background-view'],
		childViews:['royalHotel'],
		
			royalHotel:SC.LabelView.extend(SC.Gesturable,{
			gestures:[SC.TapGesture,"myTapGesture3"],
			myTapGesture3:SC.TapGesture.extend({
				name:"tap"
			}),
			classNames:['royal-hotel-view'],
			escapeHTML:NO,
			value:"\n&nbsp&nbsp PARKROYAL ON PICKERING",
			mouseDown: function() {
               		SC.routes.set('location','royalHotel/tc');
            		},
			tap: function() {
				SC.routes.set('location','royalHotel/tc');
			 }
			})
		}),



	})
});
