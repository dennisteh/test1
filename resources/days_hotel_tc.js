Test1.daysHotel = SC.Page.design({
 
tc: SC.MainPane.design({
classNames:['hotels-background-view'],
childViews:'container'.w(),   



	container:SC.ScrollView.extend({
hasVerticalScroller: YES,
canScrollVertical:true,
hasHorizontalScroller: NO,
verticalOverlay:true,
classNames:['scroll-background-view'],
//maximumVerticalScrollOffset:3200,
//isVerticalScrollerVisible:YES,
	//selectOnMouseDown: YES, 

	contentView: SC.View.design({
layout: {width:330,height:2900},

childViews:'header privacyLabel container2 agreeBtnView'.w(),

		header:SC.View.design({
		classNames:['daysHotel-header-view'],
		}),


		privacyLabel:SC.View.design({
		classNames:['privacy-label-view'],
		childViews:['tc_label'],

			tc_label:SC.LabelView.design({
			classNames:['tc-label-view'],escapeHTML:NO,
			value:'Our Privacy Terms &amp Conditions',
			})
		
		}),

		container2:SC.View.design({
		classNames:['hotels-container-view'],
		childViews:['content'],


    

			content:SC.LabelView.design({
			classNames:['hotels-container-tc-view'],
			//escapeHTML:NO,

			nextLine: '\n',
			render: function (context) {
			var nextLine = this.get('nextLine');
context.begin("<div>");
			context.push('<p>1. GENERAL</p><p>1.1. By installing the Application (as defined below), you agree to be bound by these terms of use (“appterms”). Please review them carefully before installation and/or acceptance.</p>');
			context.push(nextLine,"<p>2. DEFINITIONS</p><p>The “Application” shall mean the software provided by Goview Pte Ltd on behalf of Days Hotel Singapore At Zhongshan Park to offer services related to Days Hotel Singapore At Zhongshan Park, Days Hotel Singapore At Zhongshan Park's services and its partners’ services, to be used on Apple iOS and Android OS devices and any upgrades from time to time and any other software or documentation which enables the use of the Application.</p>");
			context.push(nextLine,"<p>3. DATA PROTECTION</p><p>Any personal information you supply to Goview Pte. Ltd. on behalf of Days Hotel Singapore At Zhongshan Park when using the Application will be used by Days Hotel Singapore At Zhongshan Park in accordance with its Privacy Policy.</p>");
			context.push(nextLine,"<p>4. Days Hotel Singapore At Zhongshan Park WEBSITE</p><p>The Application allows you to access certain functionality available on the Days Hotel Singapore At Zhongshan Park website. Such access will be governed by the Days Hotel Singapore At Zhongshan Park Website Terms of Use.</p>");
			context.push(nextLine,"<p>5. RESERVATIONS TERMS & CONDITIONS</p><p> The Days Hotel Singapore At Zhongshan Park Terms and Conditions for reservations and other booking services can be viewed here: Days Hotel Singapore At Zhongshan Park Terms and Conditions</p>");
			context.push(nextLine,"<p>6. PROPRIETARY RIGHTS AND LICENCE</p><p>6.1. All trade marks, copyright, database rights and other intellectual property rights of any nature in the Application together with the underlying software code are owned either directly by Days Hotel Singapore At Zhongshan Park or by Goview Pte Ltd.</p><p>6.2. Days Hotel Singapore At Zhongshan Park hereby grants you a worldwide, non-exclusive, royalty-free revocable licence to use the Application for your business and personal use in accordance with these appterms.</p>");
			context.push(nextLine,"<p>7. CONDITIONS OF USE</p><p>7.1. You will not, nor allow third parties on your behalf to (i) make and distribute copies of the Application (ii) attempt to copy, reproduce, alter, modify, reverse engineer, disassemble, decompile, transfer, exchange or translate the Application; or (iii) create derivative works of the Application of any kind whatsoever.</p><p>7.2. The Application is currently made available to you free of charge for your personal, non-commercial use. easyJet reserves the right to amend or withdraw the Application, or charge for the application or service provided to you in accordance with these appterms, at any time and for any reason.</p><p>7.3. You acknowledge that the terms of agreement with your respective mobile network provider (‘Mobile Provider’) will continue to apply when using the Application. As a result, you may be charged by the Mobile Provider for access to network connection services for the duration of the connection while accessing the Application or any such third party charges as may arise. You accept responsibility for any such charges that arise.</p><p>7.4. If you are not the bill payer for the mobile telephone or handheld device being used to access the Application, you will be assumed to have received permission from the bill payer for using the Application.</p>");
			context.push(nextLine,"<p>8. AVAILABILITY</p><p>8.1. This Application is available to handheld mobile devices running Apple iOS and Android OS Operating Systems. Goveiw Pte. Ltd. will use reasonable efforts to make the Application available at all times. However you acknowledge the Application is provided over the internet and mobile networks and so the quality and availability of the Application may be affected by factors outside Goveiw Pte. Ltd.’s reasonable control.</p><p>8.2. Days Hotel Singapore At Zhongshan Park, its group of companies and sub-contractors do not accept any responsibility whatsoever for unavailability of the Application, or any difficulty or inability to download or access content or any other communication system failure which may result in the Application being unavailable.</p><p>8.3. Days Hotel Singapore At Zhongshan Park will not be responsible for any support or maintenance for the Application.</p>")
			context.push(nextLine,"<p>9. SYSTEM REQUIREMENTS</p><p>9.1. In order to use the Application, you are required to have a compatible mobile telephone or handheld device, internet access, and the necessary minimum specifications ('Software Requirements').</p><p>9.2. The Software Requirements are as follows: Apple iOS devices running iOS 4 or iOS 5, and Android OS devices running Android OS 2.1 up to OS 2.3; Language: English, Italian, German, Spanish, French.</p><p>9.3. The version of the Application software may be upgraded from time to time to add support for new functions and services.</p>")
			context.push(nextLine,"<p>10. TERMINATION</p><p>10.1. Days Hotel Singapore At Zhongshan Park may terminate use of the Application at any time by giving notice of termination to you.</p><p>10.2. Upon any termination, (a) the rights and licenses granted to you herein shall terminate; (b) you must cease all use of the Software;</p>")
			context.push(nextLine,"<p>11. LIMITATION OF LIABILITY</p><p>11.1. In no event will easyJet be liable for any direct, indirect, special, punitive, exemplary or consequential losses or damages of whatsoever kind arising out of your use or access to the Application, including loss of profit or the like whether or not in the contemplation of the parties, whether based on breach of contract, tort (including negligence), product liability or otherwise.</p><p>11.2. Days Hotel Singapore At Zhongshan Park is not liable to you for any damage or alteration to your equipment including but not limited to computer equipment, handheld device or mobile telephones as a result of the installation or use of the Application.</p><p>11.3. Nothing in these Appterms shall exclude or limit Days Hotel Singapore At Zhongshan Park’s liability for death or personal injury caused by negligence or for fraud or fraudulent misrepresentation or any other liability which cannot be excluded or limited under applicable law.</p>")
			context.push(nextLine,"<p>12. DISCLAIMER OF WARRANTIES To the maximum extent permitted by law, and for the avoidance of doubt, save for section 2 of the Supply of Goods and Services Act 1982, Days Hotel Singapore At Zhongshan Park hereby disclaims all implied warranties with regard to the Application. The Application and software are provided 'as is' and 'as available' without warranty of any kind.</p>")
context.end("</div>");
			  }
			})

		}),
	agreeBtnView:SC.View.design({
	classNames:['agreeBtn-label-view-fixed'],
	childViews:['agreeBtn'],

		agreeBtn:SC.LabelView.extend(SC.Gesturable,{
		gestures:[SC.TapGesture,"myTapGesture"],
		myTapGesture:SC.TapGesture.extend({
			name:"tap"
		}),
		classNames:['agreeBtn-view'],
		value:'Agree & Submit',
		mouseDown: function() {

               		
			Test1.getPath('daysHotel.tc').remove();
			//Test1.getPath('days_advertiser.splashScreen').append();
			SC.routes.set('location','days_advertiser/splashScreen');
			SC.Timer.schedule({ target: 'Test1.days_splash_handler', action: 'daysSplashScreen', interval: 1000 });
			
			
            	},
		tap: function() {
			Test1.getPath('daysHotel.tc').remove();
			//Test1.getPath('days_advertiser.splashScreen').append();
			SC.routes.set('location','days_advertiser/splashScreen');
			SC.Timer.schedule({ target: 'Test1.days_splash_handler', action: 'daysSplashScreen', interval: 1000 });//,repeats: YES
		}
		})
	})


	})
})

	

})
});
