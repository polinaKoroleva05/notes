import './../css/Note.css'
import { useEffect, useState } from 'react';
import { MdEdit, MdDelete } from "react-icons/md";
import { ImCheckmark } from "react-icons/im";

export default function Note(props) {
    const [noteCurrent, changeNote] = useState(props.note);
    const [readOnlyMode, switchMode] = useState(true);
    console.log("get", props.note, noteCurrent);

    useEffect(() => {
        console.log("useEffect")
        changeNote(props.note)
    }, [props.note])

    const validate = () => { //убедиться что текст заметки не пустой 
        if (noteCurrent.content.replace(/\s/g, '') === '') {
            alert("empty")
        } else {
            switchMode(true);
            props.onChangeNote(noteCurrent);
        }
    }

    const validateNameInput = (e) => {
        if (e.target.value.indexOf('\n') === -1) { //если пользователь написал перенос строки - не реагируем
            changeNote({ ...noteCurrent, name: e.target.value });
        }
    }

    return (
        <div className='note'>
            {noteCurrent === undefined ?
                <p> Не выбрано </p> :
                <div>
                    <div className='bar'>
                        {readOnlyMode === true ?
                            <button className='edit-button' onClick={() => switchMode(false)}><MdEdit /></button> :
                            <button className='done-button' onClick={validate}><ImCheckmark /></button>}
                        <button className='delete-button' onClick={props.onDeleteNote}><MdDelete /></button>
                    </div>
                    <textarea className='name-field' type='text' placeholder="Заголовок" readOnly={readOnlyMode} name='name' value={noteCurrent.name} onChange={validateNameInput} />
                    <textarea className='content-field' type='text' readOnly={readOnlyMode} name='content' value={noteCurrent.content} onChange={e => changeNote({ ...noteCurrent, content: e.target.value })} />
                </div>}
        </div>
    );
}
