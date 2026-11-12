import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import type { MenuType } from "../../types";
import MenuItem from "./MenuItem";

function Menu() {
  const menu: MenuType[] = useLoaderData();

  return (
    <ul>{menu.map(pizza => <MenuItem key={pizza.id} pizza={pizza} />)}</ul>
  );
}

export const menuLoader = async () => {
  const menu = await getMenu();
  return menu;
}

export default Menu;
