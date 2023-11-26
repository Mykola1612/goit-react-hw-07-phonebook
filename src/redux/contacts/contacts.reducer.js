import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://655d3a599f1e1093c5992178.mockapi.io/contacts`
      );
      return data;
    } catch (err) {
      return rejectWithValue(err.data);
    }
  }
);

const contactsSlice = createSlice({
  name: 'contacts',

  initialState: { items: [], isLoading: false, error: null },
  reducers: {
    addContacts(state, action) {
      return [...state, action.payload];
    },
    deleteContacts(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
  extraReducers: builder =>
    builder.addCase(fetchContacts.fulfilled, (state, { payload }) => {
      state.contact = payload;
      console.log(state.contact);
    }),
});

export const { addContacts, deleteContacts } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
