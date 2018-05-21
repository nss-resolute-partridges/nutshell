const $ = require("jquery")
const APIManager = require("./APIManager")
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
    newsTitleInput.setAttribute("class", "newsTitleInputEl")

    newsInputContainer.appendChild(newsTitleInput)

    const newsSynopsisInput = document.createElement("input")
    newsSynopsisInput.placeholder  = "Synopsis"
    newsSynopsisInput.setAttribute("class", "newsSynopsisInputEl")

    newsInputContainer.appendChild(newsSynopsisInput)

    const newsURLInput = document.createElement("input")
    newsURLInput.placeholder  = "URL"
    newsURLInput.setAttribute("class", "newsURLInputEl")

    newsInputContainer.appendChild(newsURLInput)
    //Add button to submit article info
    const newsSubmitButton = document.createElement("button")
    newsSubmitButton.setAttribute("class", "newsButtonEl")
    newsSubmitButton.textContent = "Submit"

    newsSectionInputForm.appendChild(newsSubmitButton)
    //Append entire form to html article tag
    contentHook2.appendChild(newsSectionInputForm)

        //event listener attached to submit button and when submit button is pressed clears form and shows add EVENT button
        $(".newsButtonEl").on("click", function () {
            // input capture for object creation
            let inputTitle = $(".newsTitleInputEl").val()
            let inputSynopsis = $(".newsSynopsisInputEl").val()
            let inputURL = $(".newsURLInputEl").val()

            //object that is created from captured inputs
            const newsObject = {
                Id: (randomNumber),
                newsTitle: (inputTitle),
                newsSynopsis: (inputSynopsis),
                newsURL: (inputURL),
                status: "false",
                userID: "",
            }

            //invoke post from api manager to push task object into database
            APIManager.createObject("news", newsObject).then(
                //event listeners that clear input fields and show the add EVENT button
                $(".newsInputContainer").empty(),
                $(".newsArticleAddButtonEl").show()
            )
        })
}
module.exports = newsInput