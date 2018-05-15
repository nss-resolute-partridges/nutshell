// Factory functions required for NEWS GENERATOR
const componentFactory = require("./componentFactory")
const appendFactory = require("./appendFactory")

// HTML Anchor where all elements will be attached
const contentHook = document.querySelector("#news")

// This could change depending on what the group decides - in other words - we may not use fragments
const fragment = document.createDocumentFragment()

// Function to loop through database to pull NEWS and create DOM elements
const newsDisplay = () => {
    // yOUR CODE GOES HERE
}


// Call appendFactory to append all the created NEWS elements above to the DOM
// appendFactory(parent, child)



module.exports = newsDisplay
