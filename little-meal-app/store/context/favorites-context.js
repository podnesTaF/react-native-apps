import {createContext, useState} from 'react';

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
})

const FavoritesProvider = ({children}) => {
    const [favoriteMealIds, setFavoriteMealIds] = useState([])

    const addFavorite = (id) => {
        setFavoriteMealIds(prev => [...prev, id])
    }

    const removeFavorite = (id) => {
        setFavoriteMealIds(prev => prev.filter(mealId => mealId !== id))
    }

    const contextValue = {
        ids: favoriteMealIds,
        addFavorite,
        removeFavorite
    }

    return <FavoritesContext.Provider value={contextValue}>
        {children}
    </FavoritesContext.Provider>
}

export default  FavoritesProvider;