// Factory functions required for FRIENDS GENERATOR
const componentFactory = require("./componentFactory")
const appendFactory = require("./appendFactory")

// HTML Anchor where all elements will be attached
const contentHook = document.querySelector("#friends")

// This could change depending on what the group decides - in other words - we may not use fragments
const fragment = document.createDocumentFragment()

// Function to loop through database to pull FRIENDS and create DOM elements
const friendDisplay = () => {
    // yOUR CODE GOES HERE
}


// Call appendFactory to append all the created FRIENDS elements above to the DOM
// appendFactory(parent, child)



module.exports = friendDisplay
