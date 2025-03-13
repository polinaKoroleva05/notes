import './../css/Note.css'
import { useEffect, useState } from 'react';

export default function AddNote(props) {
    const [noteCurrent, changeNote] = useState({ name: '', content: '' });
    const validate = () => {
        if(noteCurrent.content.replace(/\s/g,'') === ''){
            alert("empty")
        }else{
            props.onAddNote(noteCurrent)
        }
    }
    const validateNameInput = (e)=>{
        if(e.target.value.indexOf('\n') === -1){
            changeNote({ ...noteCurrent, name: e.target.value });
        }
    }
    return (
        <div className='note'>
            <div>
                <button onClick={validate}>сохр</button>
                <button >отмена</button>
                <textarea className='name-field' type='text' name='name' value={noteCurrent.name} onChange={validateNameInput} />
                <textarea className='content-field' type='text' name='content' value={noteCurrent.content} onChange={e => changeNote({ ...noteCurrent, content: e.target.value })} />
            </div>
        </div>
    );
}
