import { createSlice,current } from '@reduxjs/toolkit'


export const contactsSlice = createSlice({

  name: 'contacts',

  initialState:{
    value:[]
  },

  reducers: {

    initContact: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value = action.payload;
    },

    updateContact: (state, action) => {

        let contacts = current(state).value;

        /*let index = contacts.findIndex(contact => contact.id === action.payload.id);

        let contactsFinal = [...contacts];

        contactsFinal[index] = {...contactsFinal[index], name: action.payload.name, email: action.payload.email};*/

        let contactsFinal = contacts.map(contact => 

          contact.id === action.payload.id ? { ...contact,  name: action.payload.name, email: action.payload.email } : contact
        ) 

        return {...state, value:contactsFinal}

    },

    deleteContact: (state, action) => {

        let contacts = current(state).value;

        contacts = contacts.filter(contact =>{

            return contact.id !== action.payload;

        });

        return {...state, value:contacts}

    }
  }
})

// Action creators are generated for each case reducer function
export const { initContact ,updateContact, deleteContact} = contactsSlice.actions

export default contactsSlice.reducer