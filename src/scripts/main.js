// REQUIRE all GENERATOR MODULES
// const newsDisplay = require("./newsGenerator")
// const newsInput = require("./newsInput")
const newsFeed = require("./news")
const eventDisplay = require("./eventsGenerator")
const friendDisplay = require("./friendsGenerator")
const taskDisplay = require("./tasksGenerator")
const messageDisplay = require("./messagesGenerator")

// CALLS all GENERATOR functions
// newsDisplay()
// newsInput()
newsFeed()
// const eventDisplay = require("./eventsGenerator")
// const friendDisplay = require("./friendsGenerator")
// const taskDisplay = require("./tasksGenerator")
// const messageDisplay = require("./messagesGenerator")
const chatDisplay = require("./chat")
// CALLS all GENERATOR functions
// newsDisplay()
// eventDisplay()
// friendDisplay()
// taskDisplay()
// messageDisplay()

chatDisplay()