// Factory functions required for TASKS GENERATOR
const componentFactory = require("./componentFactory")
const appendFactory = require("./appendFactory.js")

// HTML Anchor where all elements will be attached
const contentHook = document.querySelector("#tasks")

// This could change depending on what the group decides - in other words - we may not use fragments
const fragment = document.createDocumentFragment()

// Function to loop through database to pull TASKS and create DOM elements
const taskDisplay = () => {
    // yOUR CODE GOES HERE
}


// Call appendFactory to append all the created TASKS elements above to the DOM
// appendFactory(parent, child)



module.exports = taskDisplay
