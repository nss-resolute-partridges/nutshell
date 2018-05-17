// REQUIRE all GENERATOR MODULES
const newsDisplay = require("./newsGenerator")
const eventDisplay = require("./eventsGenerator")
const friendDisplay = require("./friendsGenerator")
const taskDisplay = require("./tasksGenerator")
const messageDisplay = require("./messagesGenerator")
const tasks = require("./tasks")
const APIManager = require("./APIManager")


// CALLS all GENERATOR functions
newsDisplay()
eventDisplay()
friendDisplay()
taskDisplay()
messageDisplay()

