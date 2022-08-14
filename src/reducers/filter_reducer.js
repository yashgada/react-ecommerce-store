import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      // Good to initialize things here

      // This is an imperative approach
      // const max_price = action.payload.reduce(
      //   (acc, cur) => (acc > cur.price ? acc : cur.price),
      //   0
      // );

      // Declarative approach:
      let maxPrice = Array.from(action.payload, (p) => p.price);
      maxPrice = Math.max(...maxPrice);
      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload],
        filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
      };
    case SET_GRIDVIEW:
      return { ...state, grid_view: true };
    case SET_LISTVIEW:
      return { ...state, grid_view: false };
    case UPDATE_SORT:
      return { ...state, sort: action.payload };
    case SORT_PRODUCTS:
      const { sort, filtered_products: products } = state;
      let tempProducts = [...products];
      if (sort === "price-highest") {
        tempProducts.sort((a, b) => b.price - a.price);
      }
      if (sort === "price-lowest") {
        tempProducts.sort((a, b) => a.price - b.price);
      }
      if (sort === "name-a") {
        tempProducts.sort((a, b) => a.name.localeCompare(b.name));
      }
      if (sort === "name-z") {
        tempProducts.sort((a, b) => b.name.localeCompare(a.name));
      }

      return { ...state, filtered_products: tempProducts };
    case UPDATE_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.name]: action.payload.value,
        },
      };
    case FILTER_PRODUCTS:
      // const { all_products } = state;
      console.log("filtering products");
      // const newFiltered = all_products.filter((product)=>)
      return { ...state };
    default:
      break;
  }
  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
