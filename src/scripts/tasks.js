const fragment = document.createDocumentFragment()
const taskSection = document.querySelector(".taskSection")
const taskCreationField = document.querySelector(".taskfields")
const randomNumber = Math.floor(Math.random() * 100)
const APIManager = require("./APIManager")
console.log(APIManager.createObject)


//event listener attached to add task button and calls upon taskInput variable to populate form to create new task
$(".taskCreationButton").on("click", function () {
    $(".taskCreationButton").hide()
    $(".taskSection").append(taskInput())
})
//function to create input fields to create a new task
const taskInput = function () {
    const taskDiv = document.createElement("div")
    taskDiv.classList = "taskfield"
    taskSection.appendChild(taskDiv)
    const inputName = document.createElement("input")
    inputName.type = "text"
    inputName.placeholder = "Task Name Here"
    inputName.classList = "inputNameField"
    taskDiv.appendChild(inputName)
    const completionDate = document.createElement("input")
    completionDate.type = "date"
    completionDate.placeholder = "Date to Complete"
    completionDate.classList = "dateComplete"
    taskDiv.appendChild(completionDate)
    const submitButton = document.createElement("button")
    submitButton.textContent = "Submit"
    submitButton.classList = "submitButton"
    taskDiv.appendChild(submitButton)
    //event listener attached to submit button and when submit button is pressed clears form and shows add task button
    $(".submitButton").on("click", function () {
        // input capture for object creation
        let input = $(".inputNameField").val()
        let inputDate = $(".dateComplete").val()
        //object that is created from captured inputs
        const taskObject = {
            Id: (randomNumber),
            taskName: (input),
            completionDate: (inputDate),
            status: "false",
            userID: "",
        }

//invoke post from api manager to push task object into database
        APIManager.createObject("tasks", taskObject).then(
           //event listeners that clear input fields and show the add task button
            $(".taskfield").empty(),
            $(".taskCreationButton").show()
        )
    })
}