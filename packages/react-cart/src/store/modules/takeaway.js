import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const baseUrl = 'http://localhost:3004'
const foodsStore = createSlice({
  name: 'foods',
  initialState: {
    foodsList: [],
    activeIndex: 0,
    cartList: []
  },
  reducers: {
    setFoodsList(store, action) {
      store.foodsList = action.payload
    },
    setActiveIndex(store, action) {
      store.activeIndex = action.payload
    },
    addCart(store, action) {
      const found = store.cartList.find((item) => item.id === action.payload.id)

      if (found) found.count++
      else store.cartList.push(action.payload)
    },
    removeCart(store, action) {
      const cartList = store.cartList.filter((item) => item.id !== action.payload)
      store.cartList = cartList
    },
    increaseCount(store, action) {
      const item = store.cartList.find((item) => item.id === action.payload)
      if (item) item.count++
    },
    decreaseCount(store, action) {
      const target = store.cartList.find((item) => item.id === action.payload)
      if (target) {
        if (target.count > 1) target.count--
        else {
          const cartList = store.cartList.filter((item) => item.id !== target.id)
          store.cartList = cartList
        }
      }
    },
    clearCart(store, action) {
      store.cartList = []
    }
  }
})

const {
  setFoodsList,
  setActiveIndex,
  addCart,
  removeCart,
  increaseCount,
  decreaseCount,
  clearCart
} = foodsStore.actions

const fetchFoodsList = function () {
  return async (dispatch) => {
    const response = await axios.get(baseUrl + '/takeaway')
    console.log(response.data)
    dispatch(setFoodsList(response.data))
  }
}
const reducer = foodsStore.reducer

export {
  fetchFoodsList,
  setActiveIndex,
  addCart,
  removeCart,
  increaseCount,
  decreaseCount,
  clearCart
}

export default reducer
