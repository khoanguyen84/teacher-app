import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TeacherService from './../../services/teacherService';
import DepartmentService from './../../services/departmentService';

function TeacherList() {
    const [state, setState] = useState({
        teachers: [],
        departments: []
    })

    useEffect(() => {
        try {
            async function getData() {
                let teacherRes = await TeacherService.getTeachers();
                let departmentRes = await DepartmentService.getDepartments();
                setState({
                    ...state,
                    teachers: teacherRes.data,
                    departments: departmentRes.data
                })
            }
            getData();
        } catch (error) {

        }
    }, [])

    const { teachers, departments } = state;

    const getDepartmentById = (id) => {
        console.log(id);
        let department = state.departments.find((depart) => depart.id == id);
        console.log(department);
        return department;
    }
    return (
        <>
            <section className="create-teacher mt-2">
                <div className="container d-flex align-items-start justify-content-between">
                    <div className="d-flex flex-column align-items-start">
                        <h4 className="fw-bolder">Teachers</h4>
                        <p>Tempor fugiat nisi quis veniam sunt dolor dolore sit pariatur.</p>
                    </div>
                    <input type="search" className="w-25 search" placeholder="Search here ..." />
                    <Link to={""} className="btn btn-primary create-teacher-btn">
                        <i className="fa-solid fa-user-plus me-3"></i>
                        New Teacher
                    </Link>

                </div>
            </section>
            <section className="show-teacher my-2">
                <div className="container">
                    <div className="row">
                        {
                            teachers.map((teacher) => (
                                <div key={teacher.id} className="col-md-3 mb-3">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row align-items-center">
                                                <div className="col-md-5">
                                                    <img className="avatar-sm" src={teacher.avatar} alt="" />
                                                </div>
                                                <div className="col-md-7 d-flex flex-column align-items-start">
                                                    <h5 className="fw-bolder">{teacher.name}</h5>
                                                    <p className="text-muted">{getDepartmentById(teacher.departmentId).name}</p>
                                                    <Link to={""} className="stretched-link">View Profile</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default TeacherList;