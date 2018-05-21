const $ = require("jquery")
const newsInput = require("./newsInput")
const contentHook = document.querySelector("#news")

//Function for static news feed
const newsFeed = () => {
    const newsFeedSection = document.createElement("section")
    newsFeedSection.setAttribute("id", "newsFeedSectionEl")
    //Button to add article with event listener
    const newsArticleAddButton = document.createElement("button")
    newsArticleAddButton.setAttribute("id", "newsArticleAddButtonEl")
    newsArticleAddButton.textContent = "Add Article"
    //Append button to newsFeedSection
    newsFeedSection.appendChild(newsArticleAddButton)

    //Event listener to add article button
    newsArticleAddButton.addEventListener("click", function () {
        $(".newsArticleAddButtonEl").hide()
        newsInput()
    })

    //Append section and button to html element
    contentHook.appendChild(newsFeedSection)
}
module.exports = newsFeed