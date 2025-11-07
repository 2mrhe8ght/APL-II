function greet(name , callback) {
    console.log("Hello, " + name);
    callback();
}
function saybay() {
    console.log("Goodbye!");
}
greet("Ketan", saybay);