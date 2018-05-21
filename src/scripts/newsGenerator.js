// Factory functions required for NEWS GENERATOR

const appendFactory = require("./appendFactory")

// HTML Anchor where all elements will be attached
const contentHook = document.querySelector("#news")

// This could change depending on what the group decides - in other words - we may not use fragments
const fragment = document.createDocumentFragment()

// Function to loop through database to pull NEWS and create DOM elements
const newsFactory = (classList) => {
    const newsSection = document.createElement("section")
    newsSection.setAttribute("class", "newsSectionEl")

    const newsButton = document.createElement("button")
    newsButton.setAttribute("class", "newsButtonEl")
    newsButton.textContent = "Add A News Article"
    newsButton.addEventListener("click", eventListener)
    return newsButton
}

// Call appendFactory to append all the created NEWS elements above to the DOM
// appendFactory(parent, child)



// module.exports = newsDisplay
