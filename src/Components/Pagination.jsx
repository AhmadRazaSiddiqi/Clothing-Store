const Pagination = ({ itemsPerPage, Data, currentPage, setCurrentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(Data / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers)
  return (
    <nav >
      <ul className="flex justify-evenly" >
        <li>
          <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} className="bg-slate-400 text-white rounded px-1 py-0.5 mb-4 cursor-pointer hover:bg-slate-800">
            Previous
          </button>
        </li>
        {pageNumbers.map(number => (
          <li key={number}>
            <button onClick={() => setCurrentPage(number)} className={currentPage === number ? 'active' : ''}>
              {number}
            </button>
          </li>
        ))}
        <li>
          <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage == 5} className="bg-slate-400 text-white rounded px-1 py-0.5 mb-4 cursor-pointer hover:bg-slate-800">
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default Pagination