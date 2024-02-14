let eyeD = document.getElementById("eyeD");
let fName = document.getElementById("fName");
let lName = document.getElementById("lName");
let email = document.getElementById("email");
let age = document.getElementById("age");
let height = document.getElementById("height");
let eyeDBtn = document.getElementById("eyeDBtn");
let fNameBtn = document.getElementById("fNameBtn");
let lNameBtn = document.getElementById("lNameBtn");
let ageBtn = document.getElementById("ageBtn");
let heightBtn = document.getElementById("heightBtn");
let tenBtn = document.getElementById("tenBtn");
let twentyBtn = document.getElementById("twentyBtn");
let thirtyBtn = document.getElementById("thirtyBtn");
let fourtyBtn = document.getElementById("fourtyBtn");
let fiftyBtn = document.getElementById("fiftyBtn");
let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("prevBtn");

// import data from '../data/data.json';

const getData = async () => {
    const promise = await fetch('../data/data.json');
    const data = await promise.text();
    console.log(data);
    return data.People
}

getData();