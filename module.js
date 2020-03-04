exports.dateFunction = function() {
return Date();

};
function Product(name,price){
this.name = name;
this.price = price;

}

var fs = require('fs');




exports.loadProducts=function() {

    var product1 = new Product("oi",20);
    var product2 = new Product("asd",25);
    var product3 = new Product("moas",30);
    
    console.log("hello");
    var products = [product1,product2,product3];
    var json = JSON.stringify(products);
    fs.appendFile('objects.json',json, function(err, result) {
        if(err) console.log('error', err);
      });
}

function saveProducts(){

}