const IdGenerator = (function(){ // creates IdGenerator function
    var i=0; // sets index to 0
    return function() {
        return i++
    }
})();

module.exports = IdGenerator