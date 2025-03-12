import './../App.css';

export default function ListOfNotes(props) {
    console.log(props)
    return (
        <div className='list'>
            {props.listNotes.map((note, id) =>
                <div className='note-item' onClick={() => props.onChangeId(id)}>
                    <b>{note.name}</b>
                    <p>{note.content}</p>
                </div>)}
        </div>
    );
}
