// Factory functions required for EVENTS GENERATOR
const componentFactory = require("./componentFactory")
const appendFactory = require("./appendFactory")

// HTML Anchor where all elements will be attached
const contentHook = document.querySelector("#events")

// This could change depending on what the group decides - in other words - we may not use fragments
const fragment = document.createDocumentFragment()

// Function to loop through database to pull EVENTS and create DOM elements
const eventDisplay = () => {
    // yOUR CODE GOES HERE
}


// Call appendFactory to append all the created EVENTS elements above to the DOM
// You will have to put in the arguments
// appendFactory(parent, child)



module.exports = eventDisplay
