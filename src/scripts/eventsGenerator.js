/* Author: Raf  Used Jeremiah's code to create Add event button and push new event into the database. */

// Factory functions required for EVENTS GENERATOR
const fragment = document.createDocumentFragment()
const $ = require("jquery")
const eventSection = document.querySelector("#events")
const eventCreationField = document.querySelector(".eventfields")
const randomNumber = Math.floor(Math.random() * 100)
const APIManager = require("./APIManager")
const componentFactory = require("./componentFactory")
// const appendFactory = require("./appendFactory")

//event listener attached to add event button and calls upon eventDisplay function to populate form to create new EVENT
$(".eventCreationButton").on("click", function () {
    $(".eventCreationButton").hide()
    $("#events").append(eventDisplay())
})
//function to create input fields to create a new EVENT
const eventDisplay = function () {
    const eventDiv = document.createElement("div")
    eventDiv.classList = "eventField"
    eventSection.appendChild(eventDiv)

    /* Create input field for user to enter the event name */
    // const eventName = document.createElement("input")
    // eventName.type = "text"
    // eventName.placeholder = "Event Name Here"
    // eventName.classList = "eventNameField"

    /* Refactored the above to use componentFactory
    Create input field for user to enter the EVENT name */
    const eventName = componentFactory("input", "", "Event Name", "eventNameField")
    eventDiv.appendChild(eventName)


    const eventLocation = componentFactory("input", "", "Event Location", "eventLocationField")
    eventDiv.appendChild(eventLocation)


    // Would like to refactor this using componentFactory
    const eventDate = document.createElement("input")
    eventDate.type = "date"
    eventDate.placeholder = "Event Date"
    eventDate.classList = "event_date"
    eventDiv.appendChild(eventDate)

    /* Trying to refactor using componentFactory */
    // const eventDate = componentFactory("input", "date", "Event Date", "event_date")

    // const submitButton = document.createElement("button")
    // submitButton.textContent = "Submit"
    // submitButton.classList = "submitButton"

    /* Refactored the above to use componentFactory
    Create submit button for user to create EVENT in database */
    const submitButton = componentFactory("button", "Submit", "", "submitButton")
    eventDiv.appendChild(submitButton)

    //event listener attached to submit button and when submit button is pressed clears form and shows add EVENT button
    $(".submitButton").on("click", function () {
        // input capture for object creation
        let input = $(".eventNameField").val()
        let inputLocation = $(".eventLocationField").val()
        let inputDate = $(".event_date").val()
        //object that is created from captured inputs
        const eventObject = {
            Id: (randomNumber),
            eventName: (input),
            eventLocation: (inputLocation),
            eventDate: (inputDate),
            status: "false",
            userID: sessionStorage.getItem("userID"),
        }

        //invoke post from api manager to push task object into database
        APIManager.createObject("events", eventObject).then(
            //event listeners that clear input fields and show the add EVENT button
            $(".eventField").empty(),
            $(".eventCreationButton").show()
        )
    })
}

module.exports = eventDisplay
