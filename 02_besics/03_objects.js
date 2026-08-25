// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Soma",
    "full name": "Soma Das",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "soma@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//console.log(JsUser.email) // This is not the right way to call the value
//console.log(JsUser["email"]) // If you want to call the object value always wright the code in this way
//console.log(JsUser["full name"])
// console.log(JsUser[mySym])// Call the symbol in this way

// JsUser.email = "soma@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "soma@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    return "Hello JS user";
}
JsUser.greetingTwo = function(){
    return `Hello JS user, ${this.name}`;
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());