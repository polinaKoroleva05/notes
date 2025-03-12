import './../css/Note.css'

export default function Note(props) {
    return (
        <div className='note'>
            {props.note === undefined ? <p> Не выбрано </p> :
                <div>
                    <b> {props.note.name} </b>
                    <p> {props.note.content} </p>
                </div>}
        </div>
    );
}
