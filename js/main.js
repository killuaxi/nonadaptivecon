// const openOrder = document.querySelector("#order__btn");
// const orderMenu = document.querySelector(".order__top");

// sandwichmenu.addEventListener("click", function (e) {
//   e.preventDefault();
//   orderMenu.classList.add('active');

//   if(openOrder == 'active') {
//     openOrder.classList.remove('active')
//   }
// });

const openBtn = document.getElementById('order__btn');
const orderMenu = document.getElementById('order-top');

openBtn.addEventListener('click', function() {
    if(orderMenu.style.display === 'none'){
        orderMenu.style.display = 'block'
    }else {
        orderMenu.style.display = 'none'
    }
})

// function showOrder() {
//     document.getElementById('order-top').style.display = 'block';
// }

// function closeOrder() {
//     document.getElementById('order-top').style.display = 'none'
// }