// Factory functions required for NEWS GENERATOR
// const componentFactory = require("./componentFactory")
// const appendFactory = require("./appendFactory")

// HTML Anchor where all elements will be attached

// This could change depending on what the group decides - in other words - we may not use fragments

// Function to loop through database to pull NEWS and create DOM elements
// const newsFactory = () => {
    const contentHook = document.querySelector("#news")
    // const fragment = document.createDocumentFragment()

    const newsSection = document.createElement("section")
    newsSection.setAttribute("class", "newsSectionEl")

    const newsButton = document.createElement("button")
    newsButton.setAttribute("class", "newsButtonEl")
    newsButton.textContent = "Add A News Article"
    // newsButton.addEventListener("click", eventListener)
    newsSection.appendChild(newsButton)

    // fragment.appendChild(newsSection)
    contentHook.appendChild(newsSection)
// }
// newsFactory()

// Call appendFactory to append all the created NEWS elements above to the DOM
// appendFactory(contentHook, fragment)




module.exports = newsFactory
