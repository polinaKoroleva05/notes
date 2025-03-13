import './../css/Note.css'
import { useEffect, useState } from 'react';

export default function Note(props) {
    const [noteCurrent, changeNote] = useState(props.note);
    const [readOnlyMode, switchMode] = useState(true);
    console.log("get", props.note, noteCurrent);

    useEffect(() => {
        console.log("useEffect")
        changeNote(props.note)
    }, [props.note])

    return (
        <div className='note'>
            {noteCurrent === undefined ?
                <p> Не выбрано </p> :
                <div>
                    {readOnlyMode === true ?
                        <button onClick={() => switchMode(false)}>ред</button> :
                        <button onClick={() => {
                            switchMode(true);
                            props.onChangeNote(noteCurrent);
                        }}>гот</button>}
                    <button onClick={props.onDeleteNote}>удал</button>
                    <textarea className='name-field' type='text' readOnly={readOnlyMode} name='name' value={noteCurrent.name} onChange={e => changeNote({ ...noteCurrent, name: e.target.value })} />
                    <textarea className='content-field' type='text' readOnly={readOnlyMode} name='content' value={noteCurrent.content} onChange={e => changeNote({ ...noteCurrent, content: e.target.value })} />
                </div>}
        </div>
    );
}
