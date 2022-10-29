import { useState,  useEffect} from 'react';
import MeetupList from '../components/meetups/MeetupList';


 function AllMeetups () {
  const [isLoading,setIsLoading] = useState(true );
   const [loadedMeetups, setLoadedMeetups] = useState([]);
 
   useEffect(() =>{
     setIsLoading(true);
    fetch (
      'https://react-meetup-app-70e5a-default-rtdb.firebaseio.com/meetups.json',
   )
   .then(response => {
    return response.json();
   })
   .then(data=>{

    const meetups = [];

      for (const key in data) {
       const meetup = {
        id:key,
        ...data[key]
       };
        meetups.push(meetup);
      }

      setIsLoading(false);
      setLoadedMeetups(meetups);
   });

   },[]);
   

    if (isLoading) {
    return (
      <section>
        <p>loading...</p>
      </section>
      );
   
   }

    
    return(
        <div>
        <h1>All Meetup</h1>
        { <MeetupList meetups={loadedMeetups}/> }
       
        </div>
    );
}

export default AllMeetups;