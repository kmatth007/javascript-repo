/**
 * Created by KMatthews on 4/3/14.
 */
function PrintStuff(myDocuments) {
    this.documents = myDocuments;
}

PrintStuff.prototype.print = function () {
    console.log(this.documents);
};

var newObj = new PrintStuff("I am new object and I can print.");
newObj.print();

function Account() {
    console.log("Hello world");
}
var userAccount = new Account();
var myObject = new Object();
console.log(myObject.constructor);
console.log(userAccount.constructor);

function Plant() {
    this.country = "Mexico";
    this.isOrganic = true;
}

Plant.prototype.showNameAndColor =  function() {
    console.log("I am a " + this.name + " and my color is " + this.color);
};

Plant.prototype.amIOrganic = function() {
    if(this.isOrganic)
        console.log("I am organic, Baby!");
}

function Fruit(fruitName, fruitColor) {
    this.name = fruitName;
    this.color = fruitColor;
}

Fruit.prototype = new Plant();
var aBanana = new Fruit("Banana", "Yellow")
console.log(aBanana.name);
console.log(aBanana.showNameAndColor());
