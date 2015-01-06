
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};


/* GET Userlist page. */
/*
 
 exports.xyz= function(req, res)
{
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs)
    {
        res.render('userlist', {"userlist" : docs});
    });
};
*/