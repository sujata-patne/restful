/**
 * Created by sujatah on 1/29/2015.
 */
module.exports = function(app){
    require('../routes/todo.route')(app);

    app.use("api/*", function(req,res,next){
        res.json({'error':'No such service present.'},404);
    });

    app.use("*", function(req,res,next){
        res.send("<html><body><h3>404 Page not found.</h3></body></html>");
    });
}