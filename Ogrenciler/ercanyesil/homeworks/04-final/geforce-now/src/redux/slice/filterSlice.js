import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    filteredProducts: []
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    FİLTER_BY_SEARCH(state, action){
        const { products, search } = action.payload;
        const tempProducts = products.filter(
            (product) =>
                product.name.toLowerCase().includes(search.toLowerCase()) ||
                product.category.toLowerCase().includes(search.toLowerCase())
        );
        
        state.filteredProducts = tempProducts;
    },
    SORT_PRODUCTS(state, action){
        const { products, sort } = action.payload;
        let tempProducts = [];

        if (sort === "a-z"){
            tempProducts = products.slice().sort((a, b) => {
                return a.name.localCompare(b.name);
            });
        }
        if (sort === "z-a"){
            tempProducts = products.slice().sort((a, b) => {
                return b.name.localCompare(a.name);
            });
        }

        state.filteredProducts = tempProducts;
    },
    FILTER_BY_CATEGORY(state, action){
        const { product, category } = action.payload;
        let tempProducts = [];
        if (category === "All"){
            tempProducts = product;
        }
        else 
        {
            tempProducts = product.filter((product) => product.category === category);
        }
        state.filteredProducts = tempProducts; 
    },
  }
});

export const {FİLTER_BY_SEARCH, SORT_PRODUCTS, FILTER_BY_CATEGORY} = filterSlice.actions

export const selectFilteredProducts = (state) => state.filter.filteredProducts

export default filterSlice.reducer