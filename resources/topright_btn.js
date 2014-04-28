Test1.topright= SC.Page.design({
clickbtn: SC.MainPane.design({
childViews:'transparentMainView container'.w(),

	transparentMainView:SC.View.design({	
	childViews:'container hidden'.w(),

		container:SC.View.design({
		classNames:['topright-btn-container-background'],
		childViews:'hotel_profile _call reservation direction gallery promotion attractions'.w(),
	
		hotel_profile:SC.View.design({
		classNames:['topright-hotel-profile-outer','topright-outer-adjust'],
		childViews:['hotel_profile_inner'],

			hotel_profile_inner:SC.LabelView.design({
			classNames:['topright-inner-label-adjust'],
			value:'Hotel Profile'
			})
		}),

		_call:SC.View.design({
		classNames:['topright-call-outer','topright-outer-adjust'],
		childViews:['hotel_profile_inner'],

			hotel_profile_inner:SC.LabelView.design({
			classNames:['topright-inner-label-adjust'],
			value:'Call'
			})
		}),

		reservation:SC.View.design({
		classNames:['topright-reservation-outer','topright-outer-adjust'],
		childViews:['hotel_profile_inner'],

			hotel_profile_inner:SC.LabelView.design({
			classNames:['topright-inner-label-adjust'],
			value:'Reservation'
			})
		}),

		direction:SC.View.design({
		classNames:['topright-direction-outer','topright-outer-adjust'],
		childViews:['hotel_profile_inner'],

			hotel_profile_inner:SC.LabelView.design({
			classNames:['topright-inner-label-adjust'],
			value:'Direction'
			})
		}),

		gallery:SC.View.design({
		classNames:['topright-gallery-outer','topright-outer-adjust'],
		childViews:['hotel_profile_inner'],

			hotel_profile_inner:SC.LabelView.design({
			classNames:['topright-inner-label-adjust'],
			value:'Gallery'
			})
		}),
		
		promotion:SC.View.design({
		classNames:['topright-promotion-outer','topright-outer-adjust'],
		childViews:['hotel_profile_inner'],

			hotel_profile_inner:SC.LabelView.design({
			classNames:['topright-inner-label-adjust'],
			value:'promotion'
			})
		}),

		attractions:SC.View.design({
		classNames:['topright-attractions-outer','topright-outer-adjust'],
		childViews:['hotel_profile_inner'],

			hotel_profile_inner:SC.LabelView.design({
			classNames:['topright-inner-label-adjust'],
			value:'Attractions'
			})
		})

		

		}),

		hidden:SC.LabelView.design(SC.Gesturable,{
		gestures:[SC.TapGesture,'myTapGesture_toprightbtn'],
		myTapGesture_toprightbtn:SC.TapGesture.extend({
			name:"tap"
		}),
		classNames:['topright-btn-transparent-view'],
		
		mouseDown: function() 
		{  	Test1.home.daysHotel1.animate(
			//SC.Set.get('pgName').animate(
			{left:0},
				{duration:0.15,timing:'ease-in'}
			);	       
			Test1.getPath('topright.clickbtn').remove();
			
            	},

			
		tap: function() {				
			//SC.routes.set('location','category1/hungry_daysHotel');
		}
		})
	}),

})
});
