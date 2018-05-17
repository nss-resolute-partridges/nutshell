const $ = require("jquery")
const fragment = document.createDocumentFragment()
const contentHook2 = document.querySelector("#newsForm")
//Function to dynamically create section, inputs, and submit button
const newsInput = () => {
    const newsSectionInputForm = document.createElement("section")
    newsSectionInputForm.setAttribute("class", "newsSectionEl")

//create div to contain all input fields
    const newsInputContainer = document.createElement("div")
    newsInputContainer.setAttribute("class", "newsInputContainerEl")

    newsSectionInputForm.appendChild(newsInputContainer)

    const newsTitleInput = document.createElement("input")
    newsTitleInput.placeholder = "Article Title"

    newsInputContainer.appendChild(newsTitleInput)

    const newsSynopsisInput = document.createElement("input")
    newsSynopsisInput.placeholder  = "Synopsis"

    newsInputContainer.appendChild(newsSynopsisInput)

    const newsURLInput = document.createElement("input")
    newsURLInput.placeholder  = "URL"

    newsInputContainer.appendChild(newsURLInput)
    //Add button to submit article info
    const newsSubmitButton = document.createElement("button")
    newsSubmitButton.setAttribute("class", "newsButtonEl")
    newsSubmitButton.textContent = "Submit"

    newsSectionInputForm.appendChild(newsSubmitButton)
    //Append entire form to html article tag
    contentHook2.appendChild(newsSectionInputForm)
}


module.exports = newsInput