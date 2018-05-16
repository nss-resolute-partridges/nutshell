// REQUIRE all GENERATOR MODULES
// const newsDisplay = require("./newsGenerator")
const newsFactory = require("./news")
const eventDisplay = require("./eventsGenerator")
const friendDisplay = require("./friendsGenerator")
const taskDisplay = require("./tasksGenerator")
const messageDisplay = require("./messagesGenerator")


// CALLS all GENERATOR functions
// newsDisplay()
newsFactory()
eventDisplay()
friendDisplay()
taskDisplay()
messageDisplay()

