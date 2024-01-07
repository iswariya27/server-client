import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Books(prpos) {
    const [books, setbooks] = useState([]);
    async function getdata() {
        try {
            const Books = await axios.get("http://localhost:5000/book")
            setbooks([...Books.data]);
        } catch (error) {
            console.log(error);
        }
    } 
    useEffect(() => {
        getdata(); 
    }, []); 
        const handleDelete = async(id)=>{
            // console.log(id);
           try {
            await axios.delete(`http://localhost:5000/book/${id}`);
            alert("Are You Sure Deleted");
            getdata();
           } catch (error) {
            console.error(error);
            alert("Something went worng")
           }
        } 
    return (
        <div className='container'>
            <div className="mdle">
                <h1 className="h4">Books Data</h1>
                <Link to="/addbooks" className="btn btn-primary">Create Books</Link>
            </div>
            <div className="card">
                <div className="card-header">
                    <h6 className="h6">Books Details</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Author</th>
                                    <th>ISBN</th>
                                    <th>PublicationDate</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    books.map((books)=>{
                                        return <tr>
                                        <td>{books.title}</td>
                                        <td>{books.author}</td>
                                        <td>{books.isbn}</td>
                                        <td>{books.publicationDate}</td>
                                        <td> <Link to={`/editbooks/${books.id}`} className='edit btn btn-warning  btn-sm '>Edits</Link>
                                            <Link to={`/viewbooks/${books.id}`} className='view btn btn-info  btn-sm '>Views</Link>
                                            <button className='del btn btn-danger btn-sm ' onClick = {()=> handleDelete (books.id)} >Delete</button></td>
                                    </tr>
                                    })
                                }                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Books;

