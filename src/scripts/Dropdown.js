export default (buttonSelector) => {
  const dropdownButton = document.querySelector(buttonSelector)

  dropdownButton.addEventListener('change', (e) => {
    e.preventDefault()
    console.log(dropdownButton.value)
  })

}