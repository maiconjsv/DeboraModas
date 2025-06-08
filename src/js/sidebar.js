
//variáveis responsaveis por pegar as classes e IDs e criar interatividade

const hamburgerMenuClass = document.querySelector('.hamburgerMenuClass')
const sideBars = document.querySelector('.sideBars')
const closeSideBar = document.querySelector('.closeSideBar')

hamburgerMenuClass.addEventListener('click', () => {
    sideBars.classList.toggle('sideBarsOn')
})

closeSideBar.addEventListener('click', () => {
    sideBars.classList.remove('sideBarsOn')
})


//pop-up do carrinho de compras
const shoppingCart = document.querySelector('.shoppingCart')
const cartBar = document.querySelector('.cartBar')
const closeCart = document.querySelector('.closeCart')

shoppingCart.addEventListener('click', () => {
    cartBar.classList.toggle('cartBarOn')
})
closeCart.addEventListener('click', () => {
    cartBar.classList.remove('cartBarOn')
})