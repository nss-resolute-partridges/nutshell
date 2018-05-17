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
<<<<<<< HEAD
=======
    // Function to CREATE objects in database.
    // Added Steve's suggested changes
>>>>>>> bc06d6c819574a44c5157f9b8a2d4e9a5efe6e12
    createObject: {
        value: function (obj, objectToCreate) {
            return $.ajax({
                url: (`http://localhost:8088/${obj}`),
                method: "POST",
                data: objectToCreate,
            })
        }
    },
<<<<<<< HEAD
    //Function to DELETE objects in database
=======
    // Function to DELETE objects in database
>>>>>>> bc06d6c819574a44c5157f9b8a2d4e9a5efe6e12
    deleteObject: {
        value: function (obj, id) {
            return $.ajax({
                url: `http://localhost:8088/${obj}/${id}`,
                method: "DELETE"
            })
        }
    },
<<<<<<< HEAD

=======
>>>>>>> bc06d6c819574a44c5157f9b8a2d4e9a5efe6e12
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
<<<<<<< HEAD
=======

>>>>>>> bc06d6c819574a44c5157f9b8a2d4e9a5efe6e12
module.exports = APIManager