function createDelegate(func, target) {
	return function() {
		return func.apply(target, arguments);
	};
}

var myObject = {name: "Target"};
function myMethod() {
	return this.name;
}

var delegate = createDelegate(myMethod, myObject);
console.log(delegate());
console.log("Hello World");

