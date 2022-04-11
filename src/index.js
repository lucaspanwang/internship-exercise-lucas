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

categorizeItems();
sortItemsInEachCategory();
