Test1.main = function main() {

  
//Test1.getPath('mainPage.mainPane').append() ;

SC.routes.add(':pageName/:paneName',Test1.routes,'gotoRoute');
SC.routes.add(':',Test1.routes,'gotoRoute');

var hotelchoices =  Test1.store.find(SC.Query.local('Test1.hotel_choice')); 
Test1.myListController.set('content', 'hotelchoices');

};


function main() { Test1.main(); }
