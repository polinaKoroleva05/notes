import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import Note from './components/Note';
import ListOfNotes from './components/ListOfNotes';
import AddNote from './components/AddNote';

export default function App() {
    const [listNotes, changeListNotes] = useState([])
    const [openedNoteId, changeOpenedNoteId] = useState(-1)
    const navigate = useNavigate();

    const getApiData = async () => {
        const response = await fetch("data/notes.json").then(res => res.json());
        changeListNotes(response);
    }

    useEffect(() => {
        getApiData()
    }, [])

    const deleteNote = () => {
        listNotes.splice(openedNoteId, 1);
        changeListNotes(listNotes);
        changeOpenedNoteId(-1);
    }

    const changeNote = (newNote) => {
        listNotes.splice(openedNoteId, 1);
        changeListNotes([...listNotes, newNote]);
        changeOpenedNoteId(listNotes.length);
    }

    const changeId = (id) => {
        changeOpenedNoteId(id); 
        navigate('/');
    }

    const addNote = () => {
        console.log('here')

        changeListNotes([...listNotes, { name: '', content: '' }]);
        changeOpenedNoteId(listNotes.length);
    }
    return (
        <div className='App'>
            <button onClick={()=>navigate('/addNote')}>доб</button>
            <div className='container'>
                <ListOfNotes listNotes={listNotes} onChangeId={changeId} />
                <Routes>
                    <Route path="/addNote" element={<AddNote />}></Route>
                    <Route path="/*" element={<Note note={listNotes[openedNoteId]} onChangeNote={changeNote} onDeleteNote={deleteNote} />}></Route>
                </Routes>
            </div>
        </div>
    );
}
