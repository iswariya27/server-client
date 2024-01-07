import { useFormik } from 'formik';
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function AddAuthor(props) {
    const formik = useFormik({
        initialValues: {
            authorname: "",
            birthdate: "",
            biography: "",

        },

        validate: (values) => {
            let errors = {}
            if (values.authorname === '') {
                errors.authorname = "Please Enter Author Name"
            } 
            if (values.birthdate === '') {
                errors.birthdate = "Please Enter Birthdate";
            }
            if (values.biography === '') {
                errors.biography = "Please Enter Biography";
            }
            return errors
        },

        onSubmit: async (values) => {
            console.log(values);
            try {
                await axios.post("http://localhost:5000/user", values) 
                alert("Data Submit Success")
            } catch (error) {
                alert("Something Worng")
                console.log(error)
            }
        }
    });
    return (
        <div className="cent container">
            <form onSubmit={formik.handleSubmit}>
                <div className='row'>
                <div className='form-group'>
                        <label>Author Name:</label> <br />
                        <input type="text" className='form-contorl' size="20" name='authorname' value={formik.values.authorname} onChange={formik.handleChange} />
                        <span style={{ color: "red" }}>{formik.errors.authorname}</span>
                    </div>
                    <div className='form-group'>
                        <label>Date of Birth:</label> <br />
                        <input type="date" className='form-contorl' name='birthdate' value={formik.values.birthdate} onChange={formik.handleChange} />
                        <span style={{ color: "red" }}>{formik.errors.birthdate}</span>
                    </div>
                    <div className='form-group'>
                        <label>Short Biography:</label> <br />
                        <textarea type="text" className='form-contorl' name='biography' value={formik.values.biography} onChange={formik.handleChange} /><br />
                        <span style={{ color: "red" }}>{formik.errors.biography}</span>
                    </div>
                    <div className='button'>
                        <input type="submit" className='input btn btn-primary btn-sm' value={"Submit"} />
                        <button type='button' className='batn btn btn-success btn-sm' ><Link className="nav-link" to="/authors">Back Home</Link></button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddAuthor;