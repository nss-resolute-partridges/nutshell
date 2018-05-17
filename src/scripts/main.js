// REQUIRE all GENERATOR MODULES
const newsDisplay = require("./newsGenerator")
const eventDisplay = require("./eventsGenerator")
const friendDisplay = require("./friendsGenerator")
const taskDisplay = require("./tasksGenerator")
const messageDisplay = require("./messagesGenerator")
const tasks = require("./tasks")
const APIManager = require("./APIManager")
const chatDisplay = require("./chat")
// CALLS all GENERATOR functions
// newsDisplay()
// eventDisplay()
// friendDisplay()
// taskDisplay()
// messageDisplay()

chatDisplay()