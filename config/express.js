/**
 * Created by sujatah on 1/29/2015.
 */
var express = require("express"),
    bodyParser = require("body-parser"),
    cookieParser = require("cookie-parser"),
    methodOverride = require("method-override"),
    logger = require("morgan"),
    path = require("path"),
    serveFavicon = require("serve-favicon");

module.exports = function(){
    var app = express();
    app.use(express(path.join(__dirname,"../public")));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(serveFavicon(path.join(__dirname, "../public/favicon.ico")));
    app.use(cookieParser());
    app.use(methodOverride('_method'));
    app.use(logger('dev'));

    return app;
}