//<!-- This file is not in use-->
exports.len= function(req, res) {
    var db = req.db;
    
    console.log("database" + db);
    var collection = db.get('laptop15');
    collection.find({},{},function(e,docs){
        res.render('lenovo', {"userlist" : docs});
    });

};