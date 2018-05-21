// const IdGenerator = require("./idGenerator"); // require idGenerator.js
  $("#clickSub").click(function() { // click on <button class="clickSub"> to init function

let userName= $("#userName").val() // make value of id="userName" into a variable
console.log(userName) // console.log for varification
let userEmail= $("#userEmail").val() // same as above but for email
console.log(userEmail) // console.log for varification
// const IDstring=JSON.stringify(IdGenerator())
// console.log(IDstring) // console.log to verify value of IdGenerator
// sessionStorage.setItem("userID", IDstring)
sessionStorage.setItem("username", userName)
$.ajax({ // post to JSON DB
    url: "http://localhost:8088/users", // url where to submit the request
    method : "POST", // type of action POST
    data : { // object
        // "userID": JSON.stringify(IdGenerator()), // assign ID from required module
        "username": (JSON.stringify(userName)), // post userName
        "email": (JSON.stringify(userEmail)) // post email
   }

 }).then(userID=> sessionStorage.setItem("userID", JSON.stringify(userID.id)))

})


// .then(userObj => console.log(userObj))

// .then(userData => console.log(userData)) // console.log to test
// $(".userName").html("userName");
//   localStorage.content = $(".userName").html();
//   $(".userName").html(localStorage.content)
// })
