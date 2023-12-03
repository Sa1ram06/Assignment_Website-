const menuBtns = document.querySelectorAll('.menu-btn');
const foodItems = document.querySelectorAll('.food-item');
let activeBtn = "chef-recommendation"; 

showFoodMenu(activeBtn);
  
menuBtns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    event.preventDefault()
    resetActiveBtn();
    showFoodMenu(btn.id);
    btn.classList.add('active-btn');
  });
});

function resetActiveBtn() {
  menuBtns.forEach((btn) => {
    btn.classList.remove('active-btn');
  });
}

function showFoodMenu(newMenuBtn) {
  activeBtn = newMenuBtn;
  foodItems.forEach((item) => {
    if (item.classList.contains(activeBtn)) {
      item.style.display = 'block'; 
    } else {
      item.style.display = 'none';
    }
  });
}
