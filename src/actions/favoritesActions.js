export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES"
export const ADD_FAVORITES = "ADD_FAVORITES"
export const REMOVE_FAVORITE = "REMOVE_FAVORITE"

export const toggleFavorites = (favorite) => {
    return({type: TOGGLE_FAVORITES, payload:favorite});
}
export const addFavorites = (favorite) => {
    return({type: ADD_FAVORITES, payload:favorite});
}
export const removeFavorite = (id) => {
    return({type: REMOVE_FAVORITE, payload:id});
}