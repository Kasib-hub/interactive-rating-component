// goal is to hide the thank you div
// start with having the div hidden by default in the html tag

// grab both main divs with queryselector  with classes
const mainContainer = document.querySelector('.container')
const thanksContainer = document.querySelector('.thank-you')

// nad buttons (submit & rate again) by id
const submitButton = document.getElementById('submit')
const rateAgain = document.getElementById('rate-again')
const rating = document.getElementById('rating')

// getting all the buttons in the rating
const rates = document.querySelectorAll('.btn')

// we need to listen for a click event, higher order function, remove the hidden class from next div and make original one hidden
submitButton.addEventListener('click', () => {
    thanksContainer.classList.remove('hidden')
    mainContainer.style.display = 'none'
})


// making the original box reappear
rateAgain.addEventListener('click', () => {
    thanksContainer.classList.add('hidden')
    mainContainer.style.display = 'block'
})


// iterate through all ratings and add a click listener for the innerHTML
rates.forEach(rate => {
    rate.addEventListener('click', () => {
        rating.innerHTML = rate.innerHTML
    })
})
