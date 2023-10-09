function SearchResult({ item }) {
  return (
    <div className='container search-result' key={item.id}>
      <div className='container' id='search-image'>
        <img src={item.img} alt={item.title} />
      </div>
      <div id='result-title'>{item.title}</div>
    </div>
  );
}
export default SearchResult;
