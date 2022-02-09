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