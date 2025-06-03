function PaginationLabel({ totalPages,previousPage, currentPage, nextPage, handlePageChange, handlePreviousPage, handleNextPage }) {
  return (
     <div className="pagination-container">
        <button disabled={currentPage === 0} onClick={handlePreviousPage}>
          previous
        </button>
        {[previousPage, currentPage, nextPage]
          .filter((p) => p !== null)
          .map((p, id) => (
            <>
              <button
                key={id}
                className={
                  "number-container" + (currentPage === p ? " active" : "")
                }
                onClick={() => handlePageChange(p)}
              >
                {p + 1}
              </button>
            </>
          ))}
        <button
          disabled={currentPage === totalPages - 1}
          onClick={handleNextPage}
        >
          Next page
        </button>
      </div>
  );
}

export default PaginationLabel;