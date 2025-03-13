import './../css/Note.css'
import { useEffect, useState } from 'react';

export default function AddNote(props) {
    const [noteCurrent, changeNote] = useState({ name: '', content: '' });
    return (
        <div className='note'>
            <div>
                <button>сохр</button>
                <button >отмена</button>
                <textarea className='name-field' type='text' name='name' value={noteCurrent.name} onChange={e => changeNote({ ...noteCurrent, name: e.target.value })} />
                <textarea className='content-field' type='text' name='content' value={noteCurrent.content} onChange={e => changeNote({ ...noteCurrent, content: e.target.value })} />
            </div>
        </div>
    );
}
