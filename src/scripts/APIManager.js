// Author: Raf
// Many thanks to Steve's code from Skull Potter and Kimmey's suggestion to talk with the Lean Anteaters group

const $ = require("jquery")

const APIManager = Object.create(null, {

    // Function to get all objects from the entire database regardless if it's User, News, Events, etc
    // obj is same as key
    getAllObjects: {
        value: function (obj) {
            return $.ajax(`http://localhost:8088/${obj}`)
        }
    },
    // Function to get any SINGLE object from database.  For example, if you want to target a single news ID
    getSingleObject: {
        value: function (obj, id) {
            return $.ajax(`http://localhost:8088/${obj}/${id}`)
        }
    },
    // Function to CREATE objects in database.
    // Added Steve's suggested changes
    createObject: {
        value: function (obj, objectToCreate) {
            return $.ajax({
                url: (`http://localhost:8088/${obj}`),
                method: "POST",
                data: objectToCreate,
            })
        }
    },
    // Function to DELETE objects in database
    deleteObject: {
        value: function (obj, id) {
            return $.ajax({
                url: `http://localhost:8088/${obj}/${id}`,
                method: "DELETE"
            })
        }
    },
    // Function to UPDATE objects in database
    updateObject: {
        value: function (obj) {
            return $.ajax({
                url: `http://localhost:8088/${obj}/${obj.id}`,
                method: "PUT",
                data: `${obj}`
            })
        }
    }
})
module.exports = APIManager