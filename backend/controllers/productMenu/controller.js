import { getAllProducts as getProductsByProductMenuName, getAllProductMenus } from "./repositories.js";



export const getProductMenus = async (req, res) => {
    const productMenus = await getAllProductMenus();
    res.json(productMenus);
}

export const getProductsFromProductMenu = async (req, res) => {
    const {name} = req.body;
     const products = await getProductsByProductMenuName(name);
    res.json(products);
}