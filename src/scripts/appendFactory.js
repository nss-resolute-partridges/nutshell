// Factory function to append child elements to parent elements
// parent = name of the parent element
// child = name of the child element
const appendFactory = (parent, child) => {
	parent.appendChild(child)
}

// Exports this module to be REQUIRED in other relevent JS files
module.exports = appendFactory