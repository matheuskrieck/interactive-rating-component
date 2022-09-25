const ratingButtons = document.querySelectorAll("button.rating-btn")        // select the rating buttons
const submitButton = document.querySelector("button.submit-btn")            // select the submit button
const ratingContainer = document.querySelector(".rating-container")         // select the main container
const thankYouContainer = document.querySelector(".thank-you-container")    // select the thank you message to display after submit

const ratingOutput = document.querySelector(".rating-output")               // select the rating value to display after submit

let userRating;                                                             // grab the rating user selected

ratingButtons.forEach(e => {
    // change the button color to orange on mouseover
    e.addEventListener("mouseover", () => {
        if (e.style.backgroundColor != "var(--light-grey)") {
            e.style.backgroundColor = "var(--orange)"
            e.style.color = "var(--pure-white)"
        }
    })
    // function to reset the button color when mouse leaves its area
    e.addEventListener("mouseout", () => {
        if (e.style.backgroundColor != "var(--light-grey)") {
            e.style.backgroundColor = "var(--dark-blue)"
            e.style.color = "var(--medium-grey)"
        }
    })
    // function to show the selected button after mouse click, and reset any other selection to default
    e.addEventListener("click", () => {
        ratingButtons.forEach(e => {
            e.style.backgroundColor = "var(--dark-blue)"
            e.style.color = "var(--medium-grey)"
        })
        userRating = e.innerText
        e.style.backgroundColor = "var(--light-grey)"
        e.style.color = "var(--pure-white)"
        console.log(userRating)
    }
    )
})

// function to change the display after submitting, to show the thank you page
submitButton.addEventListener("click", () => {
    if (userRating != undefined) {
        ratingContainer.style.display = "none"
        thankYouContainer.style.display = "flex"
        ratingOutput.innerText = ` ${userRating} `;
    }
})