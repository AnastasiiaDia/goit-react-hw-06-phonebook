const initialState = { contacts: [], filter: ``, name: ``, number: `` };

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case `name/add`: {
      return {
        ...state,
        name: action.payload,
      };
    }
    case `number/add`: {
      return {
        ...state,
        number: action.payload,
      };
    }
    case `contact/add`: {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    }
    case `contact/delete`: {
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    }
    case `filter/set`: {
      return {
        ...state,
        filter: action.payload,
      };
    }
    default:
      return state;
  }
};
