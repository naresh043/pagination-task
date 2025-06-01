import axios from "axios";
import React, { useEffect, useState } from "react";
import "./pagination.css"; // Assuming you have a CSS file for styling
import ProductCard from "./product-card/ProductCard";

const PAGE_SIZE = 10; // Number of items per page
function PaginationTask() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const fetchData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
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
    setCurrentPage((prevPage) =>prevPage > 0 ? prevPage - 1 : 0);
  }
  const handleNextPage=()=>{
    setCurrentPage((prevPage) =>prevPage < Math.ceil(data.length / PAGE_SIZE) - 1 ? prevPage + 1 : prevPage);
  }
  const totalProducts = data.length;
  const totalPages = Math.ceil(data.length / PAGE_SIZE);
  console.log("Total Products:", totalPages,currentPage);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  return (
    <>
      <h1>Pagination</h1>
      <div className="pagination-container">
        <button disabled={currentPage===0} onClick={handlePreviousPage}>previous</button>
        {[...Array(totalPages).keys()].map((p, id) => (
          <>
            <button
              key={id}
              className={"number-container" + (currentPage === p ? " active" : "")}
            //   disabled={currentPage === p}
              onClick={() => handlePageChange(p)}
            >
              {p}
            </button>
          </>
        ))}
        <button disabled={currentPage===totalPages-1} onClick={handleNextPage}>Next page</button>
      </div>
      <div className="main-div">
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
          <h1>data not Fround</h1>
        )}
      </div>
    </>
  );
}
export default PaginationTask;
