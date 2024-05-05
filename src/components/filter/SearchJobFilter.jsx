import { experienceOptions, minBasePaySalaryoptions, numberOfEmployeesOptions, remoteOptions, roleOptions } from "../../assets/constants/constants"
import FilterDropdown from "../dropdown/FilterDropdown"


const SearchJobFilter = () => {

   
  return (
    <div style={{display:"flex",gap:5,flexWrap:"wrap"}}>
        <FilterDropdown filterName={"jobRole"} placeholder={"Role"} options={roleOptions}/>
        <FilterDropdown filterName={"NumberOfEmployees"} placeholder={"Number Of Employees"} options={numberOfEmployeesOptions}/>
        <FilterDropdown filterName={"minExp"} placeholder={"Experience"} options={experienceOptions}/>
        <FilterDropdown filterName={"remote"} placeholder={"Remote"} options={remoteOptions}/>
        <FilterDropdown filterName={"minJdSalary"} placeholder={"Minimum Base Pay Salary"} options={minBasePaySalaryoptions}/>
    </div>
  )
}

export default SearchJobFilter