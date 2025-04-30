const Pagination = ({ itemsPerPage, totalItems, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      
      pageNumbers.push(1);
      
      
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);
      
      
      if (currentPage <= 3) {
        endPage = Math.min(totalPages - 1, 4);
      }
      
      
      if (currentPage >= totalPages - 2) {
        startPage = Math.max(2, totalPages - 3);
      }
      
      
      if (startPage > 2) {
        pageNumbers.push('...');
      }
      
      
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      
      
      if (endPage < totalPages - 1) {
        pageNumbers.push('...');
      }
      
      
      pageNumbers.push(totalPages);
    }
    
    return pageNumbers;
  };

  return (
    <nav className="my-4">
      <ul className="flex justify-center items-center gap-2">
        <li>
          <button 
            onClick={() => setCurrentPage(currentPage - 1)} 
            disabled={currentPage === 1} 
            className="bg-slate-400 text-white rounded px-3 py-1 cursor-pointer hover:bg-slate-800 disabled:opacity-50 disabled:hover:bg-slate-400"
          >
            Previous
          </button>
        </li>
        
        {getPageNumbers().map((number, index) => (
          <li key={index}>
            {number === '...' ? (
              <span className="px-2 ">...</span>
            ) : (
              <button 
                onClick={() => setCurrentPage(number)} 
                className={`w-8 h-8 rounded-full ${currentPage === number ? 
                  'bg-slate-800 text-white' : 'bg-slate-200 text-slate-800 cursor-pointer'} hover:bg-slate-600 hover:text-white cursor-pointer`}
              >
                {number}
              </button>
            )}
          </li>
        ))}
        
        <li>
          <button 
            onClick={() => setCurrentPage(currentPage + 1)} 
            disabled={currentPage === totalPages} 
            className="bg-slate-400 text-white rounded px-3 py-1 cursor-pointer hover:bg-slate-800 disabled:opacity-50 disabled:hover:bg-slate-400"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination