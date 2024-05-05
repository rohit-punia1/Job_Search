/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactSelect from "react-select";
import { updateFilters } from "../../reducer";

const FilterDropdown = ({ filterName, options, placeholder }) => {
  const selectedFilters = useSelector((state) => state.filters);

  const dispatch = useDispatch();
  const customSelectStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      fontWeight: "500",
      fontSize: "12px",
      minHeight: "38px",
      maxWidth: "100%",

      borderWidth: "1px",

      borderRadius: "0.3rem",
      // paddingTop: "7px",
      // paddingBottom: "7px",
      //borderRadius: template === templates.recruiter ? "0.3rem" : "0.75rem",
      

      // This line disable the blue border
      boxShadow: "none",
    }),
    option: (provided, { data, isDisabled, isFocused, isSelected }) => ({
      ...provided,
      color: "#2D2D2D",
      background: "white",
      ":hover": {
        background: "#7070701C",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      fontSize: "12px",
      fontWeight: "500",
      color: "#7070708C",
    }),
   
    multiValueRemove: (base) => ({
      ...base,
    }),
    multiValueLabel: (data) => ({
      ...data,
      height: "25px",
      padding: "2px 3px",
      fontSize: "12px",
      marginTop: "1.5px",
    }),
    multiValue: (data) => ({
      ...data,
      height: "25px",
      padding: "0px 6px",

      fontSize: "12px",
    }),
    input: (data) => ({
      ...data,

      "input:focus": {
        boxShadow: "none",
      },
      boxShadow: "0 !important",
      "&:hover": {
        border: "0 !important",
      },
    }),
    container: (base) => ({
      ...base,
      flex: 1,
    }),
  };
  return (
    <div>
      <ReactSelect
        value={selectedFilters[filterName]}
        onChange={(e) =>
          dispatch(updateFilters({ data: e, filterName: filterName }))
        }
        options={options}
        styles={customSelectStyles}
        isMulti={true}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FilterDropdown;
