const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

//breakfast menu items -- map() method.

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => 
    `<p>Item ${index +1}: ${item}</p>`
).join(' '); 

document.getElementById("breakfastMenuItems").innerHTML = breakfastMenuItemsHTML;

//Main course menu items -- forEach loop

let mainCourseItem = '';
mainCourseMenu.forEach((item, index)=>{
    mainCourseItem += `<p>Item ${index +1}: ${item}</p>`;
});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

//Dessert menu items -- for loop

let dessertItems = '';

for(let i =0; i< dessertMenu.length; i++){
    dessertItems += `<p> Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItems;