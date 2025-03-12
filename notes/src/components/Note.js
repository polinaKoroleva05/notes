import './../css/Note.css'

export default function Note(props) {
    return (
        <div className='note'>
            {props.note === undefined ? 
            <p> Не выбрано </p> :
                <div>
                    <button>ред</button>
                    <button onClick={props.onDeleteNote}>удал</button>
                    <h2> {props.note.name} </h2>
                    <p> {props.note.content} </p>
                </div>}
        </div>
    );
}
