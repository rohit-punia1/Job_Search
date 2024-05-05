import { useDispatch, useSelector } from "react-redux";
import { experienceOptions, minBasePaySalaryoptions, numberOfEmployeesOptions, remoteOptions, roleOptions } from "../../assets/constants/constants"
import FilterDropdown from "../dropdown/FilterDropdown"
import TextField from '@mui/material/TextField';
import { updateFilters } from "../../reducer";


const SearchJobFilter = () => {
  const selectedFilters = useSelector((state) => state.filters);

  const dispatch = useDispatch();
   
  return (
    <div style={{display:"flex",gap:5,flexWrap:"wrap"}}>
        <FilterDropdown filterName={"jobRole"} placeholder={"Role"} options={roleOptions}/>
        <FilterDropdown filterName={"NumberOfEmployees"} placeholder={"Number Of Employees"} options={numberOfEmployeesOptions}/>
        <FilterDropdown filterName={"minExp"} placeholder={"Experience"} options={experienceOptions}/>
        <FilterDropdown filterName={"remote"} placeholder={"Remote"} options={remoteOptions}/>
        <FilterDropdown filterName={"minJdSalary"} placeholder={"Minimum Base Pay Salary"} options={minBasePaySalaryoptions}/>
        <TextField id="outlined-basic" placeholder="Search Company Namne"  variant="outlined" sx={{"& .MuiOutlinedInput-root": {height: "38px"}}} value={selectedFilters["companyName"]?selectedFilters["companyName"][0]?.label:""} onChange={(e)=>{
          dispatch(updateFilters({ data:e.target.value, filterName: "companyName" }))
        }} />
    </div>
  )
}

export default SearchJobFilter