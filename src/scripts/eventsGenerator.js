// Factory functions required for EVENTS GENERATOR
const $ = require("jquery")
const APIManager = require("./APIManager")
// const componentFactory = require("./componentFactory")
// const appendFactory = require("./appendFactory")

// HTML Anchor where all elements will be attached
// const contentHook = document.querySelector("#events")

// This could change depending on what the group decides - in other words - we may not use fragments
// const fragment = document.createDocumentFragment()

// Function to loop through database to pull EVENTS and create DOM// Factory functions required for EVENTS GENERATOR

const eventDisplay = function () {
    // Get the events
    APIManager.getAllObjects("event")
        .then(allEvents => {
            // Iterate over event list
            allEvents.forEach(event => {
                // Build HTML representation for each one
                console.log(event)
                $("#events").append(
                    `
                    <div class="eventCard" id="${event.id}">
                        <section>
                            ${event.event}
                        </section>
                    </div>
                    `
                )
                // const section = componentFactory("section", "", "eventCard")
                // const name = componentFactory("h3", "", "eventCard")

                // appendFactory(fragment, name)
                // appendFactory(fragment, section)

                // appendFactory(contentHook, fragment)

            })
        })
}
// Call appendFactory to append all the created EVENTS elements above to the DOM
// You will have to put in the arguments
// appendFactory(parent, child)

module.exports = eventDisplay
