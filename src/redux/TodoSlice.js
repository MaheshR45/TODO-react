const { createSlice } = require('@reduxjs/toolkit');

const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    Create(state, action) {
      state.push(action.payload);
    },
    Update(state, action) {
        console.log('Received action in Update reducer:', action);
        const { index, updatedTask } = action.payload;
        return state.map((item, i) => (i === index ? updatedTask : item));
    },
    Delete(state, action) {
      state.splice(action.payload, 1);
    },
  },
});

export const { Create, Update, Delete } = todoSlice.actions;
export default todoSlice.reducer;
