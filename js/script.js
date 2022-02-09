/*----------------------
 All h2 tag lightblue
 ----------------------*/
const h2Color = document.getElementsByTagName('h2');
for (const h2 of h2Color) {
    h2.style.color = 'lightblue'
}

/*----------------------
 id='backpack' section 
 background color tomato
 ----------------------*/
const backpackBgColor = document.getElementById('backpack');
backpackBgColor.style.backgroundColor = 'tomato'

/*----------------------
 class='card' border 
 radius 30px 
 ----------------------*/

const cards = document.querySelectorAll('.card');
for (const card of cards) {
    card.style.borderRadius = '30px'
}

/*----------------------
btn click handler to
console log
 ----------------------*/

const buyNowBtn = document.getElementsByClassName('panda-btn-buy-now');
for (const buyBtn of buyNowBtn) {
    buyBtn.addEventListener('click', function() {
        buyBtn.style.display = 'none'
            //buyBtn.parentNode.removeChild(buyBtn)
    })
}

/*----------------------
Submit button disable
 ----------------------*/

const submitBtn = document.getElementById('submit-btn')
const inputConfirm = document.getElementById('input-confirm')
inputConfirm.addEventListener('keyup', function() {
    if (inputConfirm.value == 'email') {
        submitBtn.removeAttribute('disabled')
    } else {
        submitBtn.setAttribute('disabled', true)
    }
})

/*--------------------------
change image on mouse enter
 --------------------------*/

const watchPic = document.getElementById('watch-Pic')
const text = document.getElementById('text');
watchPic.addEventListener('mouseenter', function() {
    watchPic.src = "images/categories/bag.png"
    text.innerHTML = "Bag"
})
watchPic.addEventListener('mouseleave', function() {
    watchPic.src = "images/categories/watch.png"
    text.innerHTML = "Watch"
})

/*--------------------------
double click on lets stay
in touch to change bg-color
 --------------------------*/

const contactSection = document.getElementById('contact-section');
contactSection.addEventListener('dblclick', function() {
    contactSection.style.backgroundColor = 'yellow'
})