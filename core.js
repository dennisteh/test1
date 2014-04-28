Test1 = SC.Application.create({
 NAMESPACE: 'Test1',
  VERSION: '0.1.0',

  //store: SC.Store.create().from(SC.Record.fixtures),
store: SC.Store.create().from('Test1.DataSource')
//Test1.splashscreen
});
