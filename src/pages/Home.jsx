import React, {useContext, useEffect} from "react";
import Form from "../components/Form";
import Notes from "../components/Notes";
import {FirebaseContext} from '../context/firebase/firebaseContext';
import {Loader} from '../components/Loader';

const Home = () => {
    const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext);
    
    useEffect(() => {
        fetchNotes();
    }, []);
    
    return (
        <div>
            <Form />
            <hr/>
            {loading
                ? <Loader />
                : <Notes notes={notes} onRemove={removeNote}/>
            }
        </div>
    );
}

export default Home;
