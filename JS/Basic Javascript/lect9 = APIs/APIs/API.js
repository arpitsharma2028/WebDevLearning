/*
Free  APIs list:

catfact.ninja/fact
boredapi.com/api/activity
dog.ceo/api/breeds/image/random
*/

/*
JSON
Accessing Data from JSON - generally JSON give data in string type , we have to convert it into js objects

JSON.parse( data ) Method
To parse a string data into a JS object

JSON.stringify( json ) Method
To parse a JS object data into JSON
*/

/*
For API testing we can use one tool out of these
    Hoppsocth
    Postman
*/
/*
Ajax : Asynchronous javascript and XML
we perform some work , work is performing asynchronously , web page is not reloading.

AJAX (Asynchronous JavaScript and XML) is a web development technique used to update 
parts of a web page without reloading the entire page. It allows websites to send and 
receive data from a server asynchronously in the background, creating a faster, smoother,
and more interactive user experience.
*/

/*

Status code
200 - OK
404 - Not Found //API didn't exist
400 - Bad Request
500 - Internal Server Error 
*/

/*
Queries strings
https://www.google.com/search?q=harry+porter

Key

Value
https://www.google.com/search?q=harry+porter
here q is key , harry+porter is value

?name=shradha&marks=95 // 2 key val pairs
*/

let url = "https://catfact.ninja/fact";

fetch(url)
 .then((res) => {
    console.log(res);
 })
 .catch((err) => {
    console.log("ERROR - ", err);
 });
/*
    The fetch() function is a built-in JavaScript method used to make network requests to 
    servers and retrieve data. It is the modern standard for handling HTTP requests in web 
    applications,replacing the older XMLHttpRequest object.
*/