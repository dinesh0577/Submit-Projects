function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img
            className="card_img"
            src={props.imagsrc}
            alt=" image not found"
          />
          <div className="card_info">
            <span className="cards_category">{props.title}</span>
            <h3 className="card_tittle">{props.sname}</h3>
            <a href={props.link} target="_blank">
              <button> Watch Now </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
