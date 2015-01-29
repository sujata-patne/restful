/**
 * Created by sujatah on 1/29/2015.
 */
var app = require('./config/express')();
require('./config/routes')(app);

app.listen('8888');
console.log("Listening on port 8888");