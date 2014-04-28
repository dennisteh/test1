// ==========================================================================
// Project:   LoginLogoutSample - Tutorial Application to login/logout
// Copyright: ©2010 Vibul Imtarnasan (Veebs).
// License:   Licensed under MIT license (see license.js)
// ==========================================================================


/** @class
  This is our own routing class that will figure out which page to show next.

 Valid URLs are:
 http://localhost:4020/route_sample - default to page #1
 http://localhost:4020/route_sample#onePage/onePane - show page #1
 http://localhost:4020/route_sample#twoPage/twoPane - show page #2

 */
Test1.routes = SC.Object.create({

  /**
   Property to store the main pane of the page that is currently shown to the user
   */
  currentPagePane: null,

  /**
   Navigate to the specified route

   @param {Object} routeParams route parameters are set as properties of this
   object. The parameters are specified when registering the route using
   SC.routes.add() in main.js.
   */
  gotoRoute: function(routeParams) {
    // Default to page 1 
    var pageName = routeParams.pageName;
    var paneName = routeParams.paneName;
    if ((pageName == undefined || pageName == '') && (paneName == undefined || paneName == ''))
    {
      pageName = 'mainPage';
      paneName = 'mainPane';
      SC.routes.set('location', 'Hotel_Selection'); 
    }
    
   

/*
var pageName = routeParams.pageName;
    if (pageName == undefined || pageName == '') {
      pageName = 'mainPage';
    }
    var paneName = routeParams.paneName;
    if (paneName == undefined || paneName == '') {
      paneName = 'mainPane';SC.routes.set('location', 'h'); //combine two variable
    }

 
*/



    // If there is a current pane, remove it from the screen
    if (this.currentPagePane != null) {
      this.currentPagePane.remove();
    }

    // Show the specified pane
    var pagePanePath = pageName + '.' + paneName;
    var pagePane = Test1.getPath(pagePanePath);
    pagePane.append();

    // Save the current pane so we can remove it when process the next route
    this.currentPagePane = pagePane;

  }

});

