import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const base_url = 'http://localhost:8888'
const billStore = createSlice({
  name: 'bill',
  initialState: {
    billList: []
  },
  reducers: {
    setBillList: (state, action) => {
      state.billList = action.payload
    }
  }
})

const billReducer = billStore.reducer
const { setBillList } = billStore.actions
const getBillList = () => {
  return async (dispatch) => {
    const res = await axios.get(`${base_url}/takeaway`)

    dispatch(setBillList(res.data))
  }
}

export { setBillList, getBillList }
export default billReducer
