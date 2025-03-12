

export default function Note(props) {
    return (
      <>{props.note === undefined ? <p> Не выбрано </p> : <p>{props.note.name}</p>}</>
    );
  }
  