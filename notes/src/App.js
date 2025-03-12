import './App.css';
import { useEffect, useState } from 'react';
import Note from './components/Note';
import ListOfNotes from './components/ListOfNotes';

function App() {
    const [listNotes, changeListNotes] = useState([])
    const [openedNoteId, changeOpenedNoteId] = useState(-1)
    const getApiData = async () => {
        const response = await fetch("data/notes.json").then(res => res.json());
        changeListNotes(response);
    }

    useEffect(() => {
        getApiData()
    }, [])
    return (
        <div className='App'>
            <div className='container'>
                <ListOfNotes listNotes={listNotes} onChangeId={id=>changeOpenedNoteId(id)}/>
                {console.log(listNotes[openedNoteId])}
                <Note note={listNotes[openedNoteId]} onChangeNote={(newNote)=>{changeListNotes([openedNoteId] = newNote)}}/>
            </div>
        </div>
    );
}

export default App;
