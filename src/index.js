import "./styles.css";
import menu from "./menu";

const menuItems = menu.items;
const startersItems = [];
const pastaItems = [];
const pizzaItems = [];

/**
 *  Loop over menuItems and categorize them into sections based on each items assigned type.
 */
const categorizeItems = () => {
  for (let item of menuItems) {
    if (item.type === "starters") {
      startersItems.push(item);
    } else if (item.type === "pasta") {
      pastaItems.push(item);
    } else if (item.type === "pizza") {
      pizzaItems.push(item);
    }
  }
};

/**
 * Sort the items in each category by their menuOrder.
 */
const sortItemsInEachCategory = () => {
  startersItems.sort((a, b) => a.menuOrder - b.menuOrder);
  pastaItems.sort((a, b) => a.menuOrder - b.menuOrder);
  pizzaItems.sort((a, b) => a.menuOrder - b.menuOrder);
};

/**
 * Render the sorted results into the appropriate container with required formats.
 * @param {string} the id of the menu ul
 * @param {items}  the menu items to be rendered
 */
const renderMenuItems = (menuId, items) => {
  const menu = document.querySelector(menuId);
  items.forEach((item) => {
    const formatedPrice = document.createElement("span");
    formatedPrice.innerText = "$" + item.price.toFixed(2);
    const itemDescription = document.createElement("p");
    itemDescription.innerText = item.description;
    const itemName = document.createElement("li");
    itemName.innerText = item.name;
    itemName.appendChild(formatedPrice);
    itemName.appendChild(itemDescription);
    if (item.spicy) {
      itemName.classList.add("spicy");
    }
    menu.appendChild(itemName);
  });
};

categorizeItems();
sortItemsInEachCategory();
renderMenuItems("#startersMenu", startersItems);
renderMenuItems("#pastaMenu", pastaItems);
renderMenuItems("#pizzaMenu", pizzaItems);
