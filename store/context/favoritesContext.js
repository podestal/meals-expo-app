import { createContext, useState } from "react"

const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
})

const FavoritesContextProvider = ({ children }) => {

    const [favoriteMealIds, setFavoriteMealIds] =useState([])

    const addFavorite = (id) => {
        setFavoriteMealIds( currentIds => [ ...currentIds, id])
    }

    const removeFavorite = (id) => {
        setFavoriteMealIds( currentIds => currentIds.filter( currentId => currentId !== id))
    }

    const value ={
        ids: favoriteMealIds,
        addFavorite,
        removeFavorite,
    }

    return (
        <FavoritesContext.Provider value={ value }>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContextProvider