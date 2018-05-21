// Factory function to create elements
// type = what kind of element you want to create e.g. H1 or Section
// contents = what the text content will be for the created element
// placeholder = Placeholder text so the input fields aren't simply blank.  This will prompt the user what the field requires
// classes = give this elment a class that can be referenced for styling or targeting
const componentFactory = (type, contents, placeholder, classes) => {
	const component = document.createElement(type)
	component.textContent = contents
	component.placeholder = placeholder
	component.classList = classes
	return component
}

// Exports module so it can be required on other releant JS files
module.exports = componentFactory