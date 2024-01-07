import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Authors(prpos) {
    const [users, setUsers] = useState([]);
    async function getdata() {
            try {
                const Authors = await axios.get("http://localhost:5000/user")
                setUsers([...Authors.data]);
            } catch (error) {
                console.log(error);
            }
        }
        useEffect(() => {
        getdata();
    }, []);
    
    let handleDelete = async (id) => {
       try {
        await axios.delete(`http://localhost:5000/user/${id}`); 
        alert("Are You Sure Delete");
        getdata();
       } catch (error) {
        console.error(error);
        alert("somthing went worng");
       }
    }
    return (
        <div className='container col-12'>
            <div className="mdle">
                <h1 className="h4">Author Data</h1>
                <Link to="/addauthor" className="btn btn-primary"> Create Author</Link>
            </div>
            <div className="row">
                {
                    users.map((users) => {
                        return <div className="cards">
                            <div className="card-body">
                                <h6 className='headss'>AUTHOR DETAILS</h6>
                                <p className="card-text"><span className='textclr'>Author Name:</span> {users.authorname}</p>
                                <p className="card-text"><span className='textclr'>Born:</span> {users.birthdate}</p>
                                <p className="card-text"><span className='textclr'>Biography:</span> {users.biography}</p>
                                <Link to={`/editauthor/${users.id}`} className='edit btn btn-warning  btn-sm '>Edits</Link>
                                <Link to={`/viewauthor/${users.id}`} className='view btn btn-info  btn-sm '>Views</Link>
                                <button className='del btn btn-danger btn-sm ' onClick={() => handleDelete(users.id)} >Delete</button>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default Authors;

{/* <div className="card">
 <div className="card-header">
 <h6 className="h6">Users Details</h6>
</div>
<div className="card-body">
 <div className="table-responsive">
     <table className="table table-bordered" id="dataTable">
         <thead>
             <tr>
                 <th>Author Name</th>
                 <th>Birth Date</th>
                 <th>Biography</th>
                 <th>Action</th>
             </tr>
         </thead>
         <tbody>
             {
                 users.map((users) => {
                     return <tr>
                         <td>{users.authorname}</td>
                         <td>{users.birthdate}</td>
                         <td>{users.biography}</td>
                         <td> <Link to={`/editauthor/${users.id}`} className='edit btn btn-warning  btn-sm '>Edits</Link>
                             <Link to={`/viewauthor/${users.id}`} className='view btn btn-info  btn-sm '>Views</Link>
                             <button className='del btn btn-danger btn-sm ' onClick={() => handleDelete(users.id)} >Delete</button></td>
                     </tr>
                 })
             }
         </tbody>
     </table>
 </div>
</div>
</div> */}
