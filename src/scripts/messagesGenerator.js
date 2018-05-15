// Factory functions required for MESSAGES GENERATOR
const componentFactory = require("./componentFactory")
const appendFactory = require("./appendFactory")

// HTML Anchor where all elements will be attached
const contentHook = document.querySelector("#messages")

// This could change depending on what the group decides - in other words - we may not use fragments
const fragment = document.createDocumentFragment()

// Function to loop through database to pull MESSAGES and create DOM elements
const messageDisplay = () => {
    // yOUR CODE GOES HERE
}


// Call appendFactory to append all the created MESSAGES elements above to the DOM
// appendFactory(parent, child)



module.exports = messageDisplay
