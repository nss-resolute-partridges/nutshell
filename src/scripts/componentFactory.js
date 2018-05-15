// Factory function to create elements
// type = what kind of element you want to create e.g. H1 or Section
// contents = what the text content will be for the created element
// classes = give this elment a class that can be referenced for styling or targeting
const componentFactory = (type, contents, classes) => {
	const component = document.createElement(type)
	component.textContent = contents
	component.classList = classes
	return component
}

// Exports module so it can be required on other releant JS files
module.exports = componentFactory