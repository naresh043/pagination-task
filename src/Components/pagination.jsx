import axios from "axios";
import React, { useEffect, useState } from "react";
import "./pagination.css";
import ProductCard from "./product-card/ProductCard";
import { API_URL } from "./constValues";
import PaginationLabel from "./pagination-label/pagination-label";
import RecordsDropdown from "./records-dropdown/recordsdropdown";
function PaginationTask({ noRecords, setNoRecords, children }) {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const fetchData = async () => {
    const response = await axios.get(API_URL);
    const json = await response.data;
    setData(json);
    console.log(json);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handlePageChange = (p) => {
    setCurrentPage(p);
    console.log("Current Page:", p);
  };
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage > 0 ? prevPage - 1 : 0));
  };
  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage < Math.ceil(data.length / noRecords) - 1
        ? prevPage + 1
        : prevPage
    );
  };
  const totalProducts = data.length;
  const totalPages = Math.ceil(data.length / noRecords);
  console.log("Total Products:", totalPages, currentPage);
  const start = currentPage * noRecords;
  const end = start + noRecords;

  const previousPage = currentPage > 0 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages - 1 ? currentPage + 1 : null;
  return (
    <>
      <div className="pagination-header">
        <RecordsDropdown setNoRecords={setNoRecords} />
        <PaginationLabel
          totalPages={totalPages}
          previousPage={previousPage}
          currentPage={currentPage}
          nextPage={nextPage}
          handlePageChange={handlePageChange}
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
        />
        <div className="theme-container">{children}</div>
      </div>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.slice(start, end).map((item) => {
                return (
                  <ProductCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    body={item.body}
                  />
                );
              })
            ) : (
              <tr>
                <td colSpan="3" className="no-data-message">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default PaginationTask;
