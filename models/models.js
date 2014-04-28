Test1.splashscreen = SC.Record.extend({
childRecordNamespace:Test1,
headers:SC.Record.toOne('Test1.headers'),
hotelsplash:SC.Record.toOne('Test1.meta'),
hotelsplash:SC.Record.toMany('Test1.hotel_choice',{nested:true}),
});

Test1.headers=SC.Record.extend({
message:SC.Record.attr(String),
message_id:SC.Record.attr(Number),
status:SC.Record.attr(String)
});

Test1.meta=SC.Record.extend({
list_endpoint:SC.Record.attr(String),
total_count:SC.Record.attr(Number),
version:SC.Record.attr(Number)
});

Test1.hotel_choice=SC.Record.extend({
hotel:SC.Record.attr(Number),
id:SC.Record.attr(Number),
image:SC.Record.attr(String),
image_name:SC.Record.attr(String),
latest_version:SC.Record.attr(Number),
resource_uri:SC.Record.attr(String),
sequence:SC.Record.attr(Number)
})
