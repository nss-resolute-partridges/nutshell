const fragment = document.createDocumentFragment()
const taskSection = document.querySelector(".taskSection")
const taskInput = function () {
    const inputName = document.createElement("input")
    inputName.type = "text"
    name.placeholder = "Task Name Here"
    taskSection.appendChild(inputName)
}

$(".taskCreationButton").on("click", function () {
    $(".taskCreationButton").hide()
    $(".taskSection").append(taskInput())
})



