import { useFormik } from 'formik';
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function AddBooks(props) {
    const formik = useFormik({
        initialValues: {
            title: "",
            author: "",
            isbn: "",
            publicationDate: "",

        },

        validate: (values) => {
            let errors = {}
            if (values.title === '') {
                errors.title = "Please Enter Title"
            } 
            if (values.author === '') {
                errors.author = "Please Enter Author";
            }
            if (values.isbn === '') {
                errors.isbn = "Please Enter ISBN";
            }
            if (values.publicationDate === '') {
                errors.publicationDate = "Please Enter Publication Date";
            }
            return errors
        },

        onSubmit: async (values) => {
            // console.log(values);
            try {
                await axios.post("http://localhost:5000/book", values)
                alert("Data Submit Success")
            } catch (error) {
                alert("Something Worng")
                console.error(error)
            } 
        }
    });
    return (
        <div className="cent container">
            <form onSubmit={formik.handleSubmit}>
                <div className='row'>
                <div className=' form-group'>
                        <label> Title</label> <br />
                        <input type="text"  className='form-contorl' size="60" name='title' value={formik.values.title} onChange={formik.handleChange} />
                        <span style={{ color: "red" }}>{formik.errors.title}</span>
                    </div>
                    <div className=' form-group'>
                        <label> Author</label> <br />
                        <input type="text"  className='form-contorl' size="60" name='author' value={formik.values.author} onChange={formik.handleChange} />
                        <span style={{ color: "red" }}>{formik.errors.author}</span>
                    </div>
                    <div className=' form-group'>
                        <label> ISBN Number</label> <br />
                        <input type="???"  className='form-contorl' size="60" name='isbn' value={formik.values.isbn} onChange={formik.handleChange} />
                        <span style={{ color: "red" }}>{formik.errors.isbn}</span>
                    </div>
                    <div className=' form-group'>
                        <label for=""> Publication Date</label> <br />
                        <input type="date" className='form-contorl' size="60" name='publicationDate' value={formik.values.publicationDate} onChange={formik.handleChange} /><br />
                        <span style={{ color: "red" }}>{formik.errors.publicationDate}</span>
                    </div>
                    <div className='button'>
                        <input type="submit" className='input btn btn-primary btn-sm' value={"Submit"} />
                        <button type='button' className='batn btn btn-success btn-sm' ><Link className="nav-link" to="/books">Back Home</Link></button>
                    </div>
                </div>
            </form>

        </div>
    );
}

export default AddBooks;