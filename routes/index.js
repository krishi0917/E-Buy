
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('second', { title: 'Shopping Cart' });
};
/* GET Userlist page. */
exports.xyz= function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
        res.render('userlist', {"userlist" : docs});
    });

};
