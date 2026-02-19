function BoardTile({ value, onClick, highlight }) {
  return (
    <button
      className={`tile ${highlight ? "highlight" : ""}`}
      onClick={onClick}
    >
      {value || "-"}
    </button>
  );
}

export default BoardTile;
