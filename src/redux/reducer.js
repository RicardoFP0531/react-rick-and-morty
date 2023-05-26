import { ADD_FAV, REMOVE_FAV } from "./actions"

const initialState = {
    myFavorites: [],
}

const reducer = (state=initialState, {type, payload}) => {
    switch (type) {

        case ADD_FAV:
            const agregarAFav = [...state.myFavorites, payload]
            return {
              ...state,
              myFavorites: agregarAFav
            }

        case REMOVE_FAV:
            const removePersonaje = state.myFavorites.filter(p => p.id !== Number(payload))
            return {
                ...state,
                myFavorites: removePersonaje
            } 

        default: {
            return {
                ...state
            }
        }
    }

}

export default reducer;