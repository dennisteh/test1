Test1.home= SC.Page.design({
 
daysHotel1: SC.MainPane.design({
childViews: 'header_scene container_scene footer_scene'.w(),
//classNames:['hotels-shared-background-view'],	

	header_scene:SC.View.design({
	classNames:['hotels-shared-background-view'],
        childViews:['header'],

		header:SC.View.design({
		classNames:['daysHotel-header-view'],
		childViews:['menubtn'],

			menubtn:SC.LabelView.design(SC.Gesturable,{
			gestures:[SC.TapGesture,'myTapGesture_toprightbtn'],
			myTapGesture_toprightbtn:SC.TapGesture.extend({
				name:"tap"
			}),
			classNames:['menubtn1'],
			mouseDown: function() 
			{	Test1.home.daysHotel1.animate(
				{ top: 0, left:-275}, 
				{ duration: 0.35, timing: 'ease-in', delay: 0 }
				);
				Test1.getPath('topright.clickbtn').append();
				//var pgName = SC.Set.create(["Test1.home.daysHotel1"]) ;
			},
			tap: function() {				
				Test1.home.daysHotel1.animate(
				{ top: 0, left:-275}, 
				{ duration: 0.35, timing: 'ease-in', delay: 0 }
				);
				Test1.getPath('topright.clickbtn').append();
			}
			})

		})
	}),

	container_scene:SC.View.design({
	
	childViews:'hungry_image shopping_image entertainment_image fun_image latest_image thirsty_image  kid_image  action_image  explore_image  privilege_image'.w(),

		hungry_image:SC.LabelView.extend(SC.Gesturable,{
			gestures:[SC.TapGesture,'myTapGesture1'],
			myTapGesture1:SC.TapGesture.extend({
				name:"tap"
			}),	
			classNames:['left-category-hungry-view','category-view-adjust'],
			//scale: SC.BEST_FILL,
			value:"I'm Hungry",
			mouseDown: function() {               		
				SC.routes.set('location','category1/hungry_daysHotel');
            		},
			tap: function() {				
				SC.routes.set('location','category1/hungry_daysHotel');
			}
		}),

		thirsty_image:SC.LabelView.extend(SC.Gesturable,{
			gestures:[SC.TapGesture,'myTapGesture1'],
			myTapGesture1:SC.TapGesture.extend({
				name:"tap"
			}),
			classNames:['right-category-thirsty-view','category-view-adjust'],
			value:"I'm Thirsty",
			mouseDown: function() {               		
				SC.routes.set('location','category2/thirsty_daysHotel');
                                
            		},
			tap: function() {				
				SC.routes.set('location','category2/thirsty_daysHotel');
			}
		}),

		shopping_image:SC.LabelView.extend(SC.Gesturable,{
			gestures:[SC.TapGesture,'myTapGesture1'],
			myTapGesture1:SC.TapGesture.extend({
				name:"tap"
			}),
			classNames:['left-category-shopping-view','category-view-adjust'],
			value:"Let's Go Shopping",
			mouseDown: function() {               		
				SC.routes.set('location','category3/shopping_daysHotel');
            		},
			tap: function() {				
				SC.routes.set('location','category3/shopping_daysHotel');
			}
		}),

		kid_image:SC.LabelView.design(SC.Gesturable,{
			gestures:[SC.TapGesture,'myTapGesture1'],
			myTapGesture1:SC.TapGesture.extend({
				name:"tap"
			}),
			classNames:['right-category-kid-view','category-view-adjust'],
			value:"Kid's Stuff",
			mouseDown: function() {               		
				SC.routes.set('location','category4/kid_daysHotel');
            		},
			tap: function() {				
				SC.routes.set('location','category4/kid_daysHotel');
			}
		}),

		entertainment_image:SC.LabelView.design(SC.Gesturable,{
			gestures:[SC.TapGesture,'myTapGesture1'],
			myTapGesture1:SC.TapGesture.extend({
				name:"tap"
			}),
			classNames:['left-category-entertainment-view','category-view-adjust'],
			value:"Entertain Me",
			mouseDown: function() {               		
				SC.routes.set('location','category5/entertainment_daysHotel');
            		},
			tap: function() {				
				SC.routes.set('location','category5/entertainment_daysHotel');
			}
		}),

		action_image:SC.LabelView.design(SC.Gesturable,{
			gestures:[SC.TapGesture,'myTapGesture1'],
			myTapGesture1:SC.TapGesture.extend({
				name:"tap"
			}),
			classNames:['right-category-action-view','category-view-adjust'],
			value:"Give Me Action",
			mouseDown: function() {               		
				SC.routes.set('location','category6/action_daysHotel');
            		},
			tap: function() {				
				SC.routes.set('location','category6/action_daysHotel');
			}
		}),

		fun_image:SC.LabelView.design(SC.Gesturable,{
			gestures:[SC.TapGesture,'myTapGesture1'],
			myTapGesture1:SC.TapGesture.extend({
				name:"tap"
			}),
			classNames:['left-category-fun-view','category-view-adjust'],
			value:"Fun After Dark",
			mouseDown: function() {               		
				SC.routes.set('location','category7/fun_daysHotel');
            		},
			tap: function() {				
				SC.routes.set('location','category7/fun_daysHotel');
			}
		}),

		explore_image:SC.ImageView.design(SC.Gesturable,{
			gestures:[SC.TapGesture,'myTapGesture1'],
			myTapGesture1:SC.TapGesture.extend({
				name:"tap"
			}),
			classNames:['right-category-explore-view','category-view-adjust'],
			value:static_url('images/Categories_images/lets_explore.png'),
			mouseDown: function() {               		
				SC.routes.set('location','category8/explore_daysHotel');
            		},
			tap: function() {				
				SC.routes.set('location','category8/explore_daysHotel');
			}
			
		}),

		latest_image:SC.LabelView.extend(SC.Gesturable,{
			gestures:[SC.TapGesture,'myTapGesture1'],
			myTapGesture1:SC.TapGesture.extend({
				name:"tap"
			}),
			classNames:['left-category-latest-view','category-view-adjust'],
			value:"Latest Happenings",
			mouseDown: function() {               		
				SC.routes.set('location','category/latest_daysHotel');
            		},
			tap: function() {				
				SC.routes.set('location','category/latest_daysHotel');
			}
		}),

		privilege_image:SC.LabelView.extend(SC.Gesturable,{
			gestures:[SC.TapGesture,'myTapGesture1'],
			myTapGesture1:SC.TapGesture.extend({
				name:"tap"
			}),
			classNames:['right-category-privilege-view','category-view-adjust'],
			mouseDown: function() {               		
				SC.routes.set('location','category/privilege_daysHotel');
            		},
			tap: function() {				
				SC.routes.set('location','category/privilege_daysHotel');
			}			
		})

	}),	

	footer_scene:SC.View.design({
	classNames:['days-hotel-footer-view'],
	childViews:'home getting_around information bookmark'.w(),


	home:SC.View.design(SC.Gesturable,{
	gestures:[SC.TapGesture,"myTapGesture11"],
	myTapGesture11:SC.TapGesture.extend({
		name:"tap"
	}),
	classNames:['logo-background','home-logo-background'],
	mouseDown: function() {
               	SC.routes.set('location','home/daysHotel1');
        },
	tap: function() {
		SC.routes.set('location','home/daysHotel1');
	},
	childViews:'home_logo home_logo_label'.w(),

		home_logo:SC.LabelView.design({
		classNames:['home-logo-highlight','logo-adjust'],

		}),

		home_logo_label:SC.LabelView.design({
		classNames:['label-highlight','label-adjust'],
		escapeHTML:NO,
		value:"Home",
		
		})

	}),
	getting_around:SC.View.design(SC.Gesturable,{
	gestures:[SC.TapGesture,"myTapGesture12"],
	myTapGesture12:SC.TapGesture.extend({
		name:"tap"
	}),
	classNames:['logo-background','getting-around-background'],
	mouseDown: function() {
               	SC.routes.set('location','getting_around/daysHotel2');
        },
	tap: function() {
		SC.routes.set('location','getting_around/daysHotel2');
	},
	childViews:'getting_around getting_around_label'.w(),

		getting_around:SC.LabelView.design({
		classNames:['getting-around-logo-unhighlight','logo-adjust'],
		}),

		getting_around_label:SC.LabelView.design({
		classNames:['label-unhighlight','label-adjust'],
		value:'Getting Around',
		
		})
	
	}),

	information:SC.View.design(SC.Gesturable,{
	gestures:[SC.TapGesture,"myTapGesture13"],
	myTapGesture13:SC.TapGesture.extend({
		name:"tap"
	}),
	classNames:['logo-background','information-logo-background'],
	mouseDown: function() {
               	SC.routes.set('location','infopage/daysHotel3');
        },
	tap: function() {
		SC.routes.set('location','infopage/daysHotel3');
	},
	childViews:'information_logo information_logo_label'.w(),
		information_logo:SC.LabelView.design({
		classNames:['information-logo-unhighlight','logo-adjust'],
		}),

		information_logo_label:SC.LabelView.design({
		classNames:['label-unhighlight','label-adjust'],
		value:'Information',
		
		})
	}),

	bookmark:SC.View.design(SC.Gesturable,{
	gestures:[SC.TapGesture,"myTapGesture14"],
	myTapGesture14:SC.TapGesture.extend({
		name:"tap"
	}),
	classNames:['logo-background','bookmark-logo-background'],
	mouseDown: function() {
               	SC.routes.set('location','bookmarkpage/daysHotel4');
	},
	tap: function() {
		SC.routes.set('location','bookmarkpage/daysHotel4');
	},
	childViews:'bookmark_logo bookmark_logo_label'.w(),
		bookmark_logo:SC.LabelView.design({
		classNames:['bookmark-logo-unhighlight','logo-adjust'],
		}),

		bookmark_logo_label:SC.LabelView.design(SC.Cookie,{
		classNames:['label-unhighlight','label-adjust'],
		value:'Bookmark',
		

		})
	}),





	})
	
})
})
/*
var sessionCookie = SC.Cookie.find('category');
var sessionId = sessionCookie ?
    sessionCookie.get('value') :
    null ;
"*/
