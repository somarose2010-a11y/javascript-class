// const tinderUser = new Object() ----this is a nonsingleton object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Kaushik",
            lastname: "Raychaudhuri"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//*******object de structure***********//

const development = {
    product: "Website Development",
    price: "6000",
    wesitedeveloper: "soma"
}

// course.courseInstructor

const {wesitedeveloper: developer} = development //object destructure

// console.log(courseInstructor);
console.log(developer);

// {
//     product: "Website Development",
//     price: "6000",
//     wesitedeveloper: "soma"
// }

[
    {},
    {},
    {}
]