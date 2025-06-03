import "./recordsdropdown.css";

function RecordsDropdown({ setNoRecords }) {
  return (
    <div className="select-wrapper">
        <label htmlFor="records-select" className="select-label">
            Records per page: 
        </label>
      <select 
        className="select" 
        onChange={(e) => setNoRecords(Number(e.target.value))}
        aria-label="Select number of records to display"
      >
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="25">25</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="45">45</option>
        <option value="50">50</option>
      </select>
    </div>
  );
}

export default RecordsDropdown;