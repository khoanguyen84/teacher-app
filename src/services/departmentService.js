import axios from "axios";
import { Department_API_URL } from "../ultility/common";

class DepartmentService{
    static getDepartments(){
        return axios.get(Department_API_URL);
    }
}

export default DepartmentService;