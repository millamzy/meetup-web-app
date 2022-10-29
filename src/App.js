import {Route, Switch} from 'react-router-dom';
import { createContext, useState } from "react";
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout'
//import { FavoritesContextProvider } from './store/favorites-context'


export const FavoritesContext = createContext({
  
});


 
function App() {


  const [userFavorites, setUserFavorites] = useState([]);
  
  const addFavoriteHandler = (favoriteMeetup) => {
   setUserFavorites((prevUserFavorites) => {
       return prevUserFavorites.concat(favoriteMeetup);
  });
 }
 
 
  function removeFavoriteHandler(meetupId) {
   setUserFavorites(prevUserFavorites => {
       return prevUserFavorites.filter(meetup =>meetup.id !== meetupId);
   });
  }
 
  function itemIsFavoriteHandler(meetupId) {
   return userFavorites.some(meetup=>meetup.id !== meetupId);
  }
 
  const context = {
     name: 'Millamzy776t678',
     favorites:userFavorites,
     setFavorites:setUserFavorites,
     totalFavorites:userFavorites.length,
     addFavorites: addFavoriteHandler,
     removeFavorite: removeFavoriteHandler,
     itemIsFavorite: itemIsFavoriteHandler
   };
 

  return (
<FavoritesContext.Provider value={context}>

  <Layout>
    
  <Switch>
    <Route path='/' exact>
    <AllMeetupsPage/>
    </Route>
    <Route path='/new-meetup'>
      <NewMeetupPage/>
    </Route>
    <Route path='/favorites'>
      <FavoritesPage/>
     </Route>
    </Switch> 

  </Layout>

  </FavoritesContext.Provider >
  );
}

export default App;
