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

    const deleteNote = () => {
        listNotes.splice(openedNoteId, 1);
        console.log(listNotes);
        changeListNotes(listNotes);
        changeOpenedNoteId(-1);
    }

    const changeNote = (newNote) => {
        console.log('here')
        listNotes.splice(openedNoteId, 1);
        changeListNotes([...listNotes, newNote]);
        changeOpenedNoteId(listNotes.length);
    }
    return (
        <div className='App'>
            <div className='container'>
                {console.log("listnotes before before", listNotes)}
                <ListOfNotes listNotes={listNotes} onChangeId={id => changeOpenedNoteId(id)} />
                {console.log("listnotes before", listNotes)}
                <Note note={listNotes[openedNoteId]} onChangeNote={changeNote} onDeleteNote={deleteNote} />
            </div>
        </div>
    );
}

export default App;
