// REQUIRE all GENERATOR MODULES
const newsInput = require("./newsInput")
const newsFeed = require("./news")
const eventDisplay = require("./eventsGenerator")
const friendDisplay = require("./friendsGenerator")
const messageDisplay = require("./messagesGenerator")
const chatDisplay = require("./chat")
const tasks = require("./tasks")
const APIManager = require("./APIManager")


// CALLS all GENERATOR functions
// newsDisplay()
// newsInput()
newsFeed()
// eventDisplay()
// friendDisplay()
// taskDisplay()
// messageDisplay()
//chatDisplay()

chatDisplay()
