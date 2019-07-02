var sayNode = function () {
    console.log("Node");
};
var es = "ES";
const newObject = {
    sayJS() {
        // define function
        console.log("JS");
    },
    sayNode, // key=value
    [es + 6]: "Fantastic" // dynamic key
};
newObject.sayNode(); // Node
newObject.sayJS(); // JS
console.log(newObject.ES6);