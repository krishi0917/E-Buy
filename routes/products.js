exports.index = function(req, res){
  res.render('second', { title: 'Shopping Cart' });
};
/* GET Userlist page. */

exports.pro= function(req, res) {

        res.render('products');


};

exports.len= function(req, res) {
    var db = req.db;
    var id = req.params.id;
    console.log(id);
    var collection = db.get('laptop17');
    var dateNow = new Date();
    console.log("Date is  " + dateNow);
    var available = 0;
    collection.update({id1:id},{$set:{'currentDate':dateNow }});
    
    collection.find({id1 : id},function(e,docs)
    {
    			if (typeof docs[0]["endDate"] == 'undefined')
    			{ 
    				available = 1; 
    				console.log("available " + available); 
    			} 
    			res.render('lenovo', {"userlist" : docs , "available" : available});
    });
};

exports.mobi= function(req, res) {
    var db = req.db;
    var id = req.params.id;
    console.log(id);
    var collection = db.get('mobile2');
    var dateNow = new Date();
    console.log("Date is  " + dateNow);
    var available = 0;
    collection.update({id2:id},{$set:{'currentDate':dateNow }});
    collection.find({id2 : id},function(e,docs){
    
    	if (typeof docs[0]["endDate"] == 'undefined')
		{ 
			available = 1; 
			console.log("available " + available); 
		} 
    	res.render('lg', {"userlist" : docs , "available" : available});
    });

};
exports.ca= function(req, res) {
    var db = req.db;
    var id = req.params.id;
    console.log(id);
    var collection = db.get('car5');
    var dateNow = new Date();
    console.log("Date is  " + dateNow);
    var available = 0;
    collection.update({id3:id},{$set:{'currentDate':dateNow }});
    collection.find({id3 : id},function(e,docs)
    {
    	if (typeof docs[0]["endDate"] == 'undefined')
		{ 
			available = 1; 
			console.log("available " + available); 
		} 
    	res.render('bmw', {"userlist" : docs , "available" : available});
    });

};

exports.len2= function(req, res) {
    var db = req.db;
    var id = req.params.id;
    console.log(id);
    var collection = db.get('laptop17');
    collection.find({},{},function(e,docs){
        res.render('laptop', {"userlist" : docs});
    });

};

exports.ca2= function(req, res) {
    var db = req.db;
    var id = req.params.id;
    console.log(id);
    var collection = db.get('car5');
    collection.find({},{},function(e,docs){
        res.render('car', {"userlist" : docs});
    });

};


exports.mobi2= function(req, res) {
    var db = req.db;
    var id = req.params.id;
    console.log(id);
    var collection = db.get('mobile2');
    collection.find({},{},function(e,docs){
        res.render('mobile', {"userlist" : docs});
    });

};





