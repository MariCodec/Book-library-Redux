import React from "react";
import "./Filter.css";
import { useDispatch, useSelector } from "react-redux";
import {
  resetFilters,
  selectTitleFilter,
  setTitleFilter,
} from "../../redux/slices/filterSlice";
export const Filter = () => {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitleFilter);
  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };
  const handleResetFilter = () => {
    dispatch(resetFilters());
  };
  return (
    <div className="app-block filter">
      <div className="filter-group">
        <input
          type="text"
          value={titleFilter}
          placeholder="filter by title"
          onChange={handleTitleFilterChange}
        />
      </div>
      <button onClick={handleResetFilter}>reset all filters</button>
    </div>
  );
};
