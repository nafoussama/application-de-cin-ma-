const Filter = ({
  titleFilter,
  setTitleFilter,
  ratingFilter,
  setRatingFilter,
}) => {
  return (
    <div className="filter">
      <input
        placeholder="Search by title"
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
      />

      <input
        type="number"
        placeholder="Min rating"
        value={ratingFilter}
        onChange={(e) => setRatingFilter(e.target.value)}
        min="0"
        max="5"
      />
    </div>
  );
};

export default Filter;