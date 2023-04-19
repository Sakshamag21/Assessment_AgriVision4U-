// import React from "react";


// export default function StarAttraction() {
//     return(
//     <div>
//     <div className="home">
//         <h1>StarAttraction</h1>

//     </div>
//     </div>
//     );
// }

import React, { useState, useEffect, useContext } from 'react'
import { EyeOutlined } from '@ant-design/icons';
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
// import CreateIcon from '@mui/icons-material/Create';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import EyeOutlined
import { NavLink } from 'react-router-dom';
// import { adddata, deldata } from './context/ContextProvider';
// import { updatedata } from './context/ContextProvider'




export default function StarAttraction () {
    
    const [getuserdata, setUserdata] = useState([]);
    // console.log(getuserdata);
    

    // const { udata, setUdata } = useContext(adddata);

    // const {updata, setUPdata} = useContext(updatedata);

    // const {dltdata, setDLTdata} = useContext(deldata);
    const[udata,setUdata]=useState({});
    const[updata,setUPdata]=useState({});
    const[dltdata,setDLTdata]=useState({});
    const getdata = async () => {

        const res = await fetch("http://localhost:8003/getdata", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data,"48");

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setUserdata(data)
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
    }, [])

    const deleteuser = async (id) => {

        const res2 = await fetch(`http://localhost:8003/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();
        console.log(deletedata);

        if (res2.status === 422 || !deletedata) {
            console.log("error");
        } else {
            console.log("user deleted");
            setDLTdata(deletedata)
            getdata();
        }

    }


    return (

        <div>
            {
                udata ?
                    <div>
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>{udata.name}</strong>  added succesfully!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </div> : ""
            }
            {
                updata ?
                    <div>
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>{updata.name}</strong>  updated succesfully!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </div> : ""
            }

            {
                dltdata ?
                    <div>
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>{dltdata.name}</strong>  deleted succesfully!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </div> : ""
            }


            <div className="mt-5">
                <div className="container">
                    <div className="add_btn mt-2 mb-2">
                        <NavLink to="/register" className="btn btn-primary">Add data</NavLink>
                    </div>

                    <table class="table">
                        <thead>
                            <tr className="table-dark">
                                <th scope="col">id</th>
                                <th scope="col">Username</th>
                                <th scope="col">Age</th>
                                <th scope="col">Email</th>
                                <th scope="col">Job</th>
                                <th scope="col">Number</th>
                                
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                getuserdata.map((element, id) => {
                                    
                                    // eleName=eleName.toLowerCase();
                                    // eleWork=eleWork.toLowerCase();
                                    
                                        // console.log("yes")
                                        return (
                                            <div>
                                                <tr>
                                                    <th scope="row">{id + 1}</th>
                                                    <td>{element.name}</td>
                                                    <td>{element.age}</td>
                                                    <td>{element.email}</td>
                                                    <td>{element.work}</td>
                                                    <td>{element.mobile}</td>
                                                    <td className="d-flex justify-content-between">
                                                        <NavLink to={`view/${element._id}`}> <button className="btn btn-success"><EyeOutlined /></button></NavLink>
                                                        <NavLink to={`edit/${element._id}`}>  <button className="btn btn-primary"><EyeOutlined /></button></NavLink>
                                                        <button className="btn btn-danger" onClick={() => deleteuser(element._id)}><EyeOutlined /></button>
                                                    </td>
                                                </tr>
                                            </div>
                                        )
                                    }
                                    

                                )
                            }
                        </tbody>
                    </table>


                </div>
            </div>
        </div>
    )
}



















