import { useHistory } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage () {
   const history = useHistory();

    function addMeetupHandler(meetupData) {
      fetch('https://react-meetup-app-70e5a-default-rtdb.firebaseio.com/meetups.json',
       {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers:{
            'content-Type': 'application/json'
        }
       }
      ).then(() => {
       history.replace('/');
      });
    }
    return( <section>
        <div>Add New Meetup</div>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    );
}

export default NewMeetupPage;