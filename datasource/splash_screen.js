//*==================================================================================================================================
Test1.DataSource = SC.DataSource.extend({

/*
  fetch: function (store, query) {

    // you can add some check for the model, as this function is called for every possible record, 
    // and you probably don't want to use this url for every record type 
    //SC.Request.getUrl('http://sghotel.atlife.my/api/myhotel/hotelsplash/?format=json&dev_id=web&app=myhotel').json().notify(this, this._myCallbackMethod, store, query).send();

//if (query === Test1.OBJECTS_QUERY){

SC.Request.getUrl('http://sghotel.atlife.my/api/myhotel/hotelsplash/?format=json&dev_id=web&app=myhotel?callback=response').notify(this, this._myCallbackMethod, store, query).send();

//}
  },


  _myCallbackMethod: function (result, store, query) {


if (SC.ok(result)){
     // successfully retrieved, so now we need to tell the store
     // we do this by first loading the data
     var myData = result.get('body');
	
	alert("success");
     // we load the data and tell which record type / model this is
     store.loadRecords(Test1.Objects, myData.hotelsplash.objects);
     // now we can indicate to the store the query is ready
     store.dataSourceDidFetchQuery(query,response);
  }
  else {
    //error
    // you should also do here something like
	alert('unsuccessfully');

var recs = Test1.store.find(SC.Query.local(Test1.Objects));
alert("second: "+ recs);

 
 var myData = result.get('body');

 store.loadRecords(Test1.Objects, myData.hotelsplash.objects);
store.dataSourceDidFetchQuery(query);

    store.dataSourceDidErrorQuery(query,response);
    
  }
},

retrieveRecords: function(store, storeKey) {
  if (SC.kindOf(store.recordTypeFor(storeKey), Test1.Objects)) {

    var url = store.idFor(storeKey);
    SC.Request.getUrl(url).header({
                'Accept': 'application/json'
            }).json()
      .notify(this, 'didRetrieveTask', store, storeKey)
      .send();
    return YES;

  } else return NO;
},

didRetrieveTask: function(response, store, storeKey) {
  if (SC.ok(response)) {
    var dataHash = response.get('body').content;
    store.dataSourceDidComplete(storeKey, dataHash);

  } else store.dataSourceDidError(storeKey, response);
}, 
*/
});

//==========================================================================================================================*/
/*===============================================================================================================================
Test1.DataSource = SC.DataSource.extend({
fetch: function(store, query, params) {
    var self = this;
    console.log('in fetch');
    if (SC.buildMode === 'debug') {
      SC.Request.getUrl('http://sghotel.atlife.my/api/myhotel/hotelsplash/?format=json&dev_id=web&app=myhotel'+query.query).json()
        .notify(this, 'didFetchImages', store, query)
        .send();
    } else  {
	$.getJSON('http://sghotel.atlife.my/api/myhotel/hotelsplash/?format=json&dev_id=web&app=myhotel'+query.query+'&callback=?',
null,
        function(data, textStatus, xhr) {
          SC.run(function() {
            var response = SC.Response.create({ request: null, body:data, status: textStatus });
            self.didFetchImages(response, store, query);
          });
        });
    }

    return YES;
  },

  didFetchImages: function(response, store, query) {
    console.log('in didfetch');
    var data;
    if (SC.ok(response)) {
      console.log('response ok');
      data = response.get('body').hotelsplash.objects;
	
      var storeKeys = store.loadRecords(Test1.Objects,data);
      store.loadQueryResults(query, storeKeys);

      store.dataSourceDidFetchQuery(query);console.log('success');
    }
    else store.dataSourceDidErrorQuery(query, response);console.log('fail');
  }, 



});
//============================================================================================================================*/
/* no really<---
Test1.DataSource = SC.DataSource.extend({
fetch:function(){

$.ajax({
           type: 'GET',
           url: "http://sghotel.atlife.my/api/myhotel/hotelsplash/3/?format=json&dev_id=web&app=myhotel",
           processData: true,
           data: {},
           dataType: "json",
           success: function (data) {
               processData(data);
           }
});
 
function processData(data){
 //Do some stuff with the data
//$("#jsondata").text(JSON.stringify(data));
// console.log(data);
console.log(data(0).objects)
}
*/
/*
$.ajax({
    url: "http://query.yahooapis.com/v1/public/yql",

    // the name of the callback parameter, as specified by the YQL service
    jsonp: "callback",

    // tell jQuery we're expecting JSONP
    dataType: "jsonp",

    // tell YQL what we want and that we want JSON
    data: {
        q: "select objects from json where url=\'http://sghotel.atlife.my/api/myhotel/hotelsplash/3/?format=json&dev_id=web&app=myhotel\' and objects.id=3",
        format: "json"
    },

    // work with the response
    success: function( response ) {
	
        console.log(response.query.results.json ); // server response

    }
})
*/
//==>},



//==>});

//================================================================================================================================*/
/*============================respond (ok) but no data=========================================================================
Test1.DataSource = SC.DataSource.extend({
fetch:function(){
jQuery.getJSON('http://sghotel.atlife.my/api/myhotel/hotelsplash/3/?format=json&dev_id=web&app=myhotel', function(data) {
    console.log("Symbol: " + data);
});
}
});
==================================================================================================================================*/
/*
Test1.DataSource = SC.DataSource.extend({
fetch: function(store, query) {

    if (query === Test1.SPLASHSCREEN_QUERY) {

      //SC.Request.getUrl('/api/sghotel.atlife.my.json')
	//SC.Request.getUrl('/fixtures/test.js')
	
	//SC.Request.getUrl('http://sghotel.atlife.my/api/myhotel/hotelsplash/?format=json&dev_id=web&app=myhotel').json()
       // .set('isJSON', YES)

        .notify(this, this._didFetchAllContacts, { query: query, store: store })

        .send();

    }

    // other handlers..

 

    return YES; // Not required, but good form.

  },

 

  _didFetchAllContacts: function(response, params) {

    var store = params.store;

    var query = params.query; 

 

    if (SC.$ok(response)) {

      // load the contacts into the store...

      store.loadRecords(Test1.days_advertiser, response.get('body'));
	//store.loadRecords(Test1.days_advertiser, response.get('body').hotelsplash.objects);


      // notify store that we handled the fetch

      store.dataSourceDidFetchQuery(query);

 

    // handle error case

    } else store.dataSourceDidErrorQuery(query, response);

  }

 retrieveRecord: function(store, storeKey) {
  if (SC.kindOf(store.recordTypeFor(storeKey), Todos.Task)) {

    var url = store.idFor(storeKey);
    SC.Request.getUrl(url).header({
                'Accept': 'application/json'
            }).json()
      .notify(this, 'didRetrieveTask', store, storeKey)
      .send();
    return YES;

  } else return NO;
},

didRetrieveTask: function(response, store, storeKey) {
  if (SC.ok(response)) {
    var dataHash = response.get('body').content;
    store.dataSourceDidComplete(storeKey, dataHash);

  } else store.dataSourceDidError(storeKey, response);
}, 

  
  createRecord: function(store, storeKey) {
  if (SC.kindOf(store.recordTypeFor(storeKey), Todos.Task)) {

    SC.Request.postUrl('/tasks').header({
                'Accept': 'application/json'
            }).json()
      .notify(this, this.didCreateTask, store, storeKey)
      .send(store.readDataHash(storeKey));
    return YES;

  } else return NO;
},

  //.. other data source methods

});
*/
//var json = '{"result":true,"count":1}',
  //  obj = JSON.parse(json);

//alert(obj.count);
/*============================18 april 4.51pm============================================================
Test1.DataSource = SC.DataSource.extend({

fetchc: function () {
alert('yes');
  SC.Request.getUrl('http://sghotel.atlife.my/api/myhotel/hotelsplash/?format=json&dev_id=web&app=myhotel').json().notify(this,this._myCallbackMethod).send();  

},

_myCallbackMethod: function (result) {
  if (SC.ok(result)){ 
    // successfully retrieved
	
    var myData = result.get('body');
	alert(myData);

     Test1.myHotelController.set('content',myData.hotelsplash.objects[1]);
  }
  else {
    //error
	alert('unsuccessfully');
  }
}

});
*/

/*
Test1.DataSource = SC.DataSource.extend({
 fetch: function(store, query) {

                if (query=== Test1.OBJECTS_QUERY){
                        var url = "http://sghotel.atlife.my/api/myhotel/hotelsplash/?format=json&dev_id=web&app=myhotel";
                        SC.Request.getUrl(url).header({'Accept':'application/json'}).json().notify(this, 'didFetchEvent', store, query).send();
                        return YES ; // return YES if you handled the query
})
},

didFetchEvent: function(response, store, query) {
                if (SC.ok(response)) {
                        var eventRetrieved =response.get('body');    //event retrieved will be the JSON with the People id's inside.
			store.dataSourceDidFetchQuery(query);
			var listStoreKey =store.loadRecord(Test1.Objects, eventRetrieved);  
		}
}

});

*/

