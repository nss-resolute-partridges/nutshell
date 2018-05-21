$("#clickSubTwo").click(function() { // click on <button class="clickSub"> to init function
let userName= $("#userNameLog").val() // make value of id="userName" into a variable
console.log(userName) // console.log for varification
let userEmail= $("#userEmailLog").val() // same as above but for email
console.log(userEmail) // console.log for varification
$.ajax("http://localhost:8088/users").then(function (allUsers){
  allUsers.forEach(users=> {
        if (users.username===userName) {

          sessionStorage.setItem("userID", JSON.stringify(users.id))
    }
  });
})

})