import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik';



function EditsAuthor(props) {
    const prams = useParams();
    const [user, setUser] = useState();

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
                errors.birthdate = "Please Enter birthdate";
            }
            if (values.biography === '') {
                errors.biography = "Please Enter Biography";
            }
            return errors
        },

        onSubmit: async (values) => {
            // console.log(values);
            try {
                await axios.put(`http://localhost:5000/user/${prams.id}`, values); 
                alert("Data Update Success");
            } catch (error) {
                console.error("Error updating user:", error);
            }
        },
    });


    let getuserdata = async () => {
       try {
        let userdata = await axios.get(`http://localhost:5000/user/${prams.id}`);
        setUser(userdata.data);
        // console.log(userdata.data)
        formik.setValues(userdata.data);
       } catch (error) {
        alert("Something went worng")
       }
    };

    useEffect(() => {
        getuserdata();
    }, []);
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
                        <input type="submit" className='input btn btn-secondary  btn-sm' value={"Update"} />
                        <button type='button' className='batn btn btn-success  btn-sm' ><Link className="nav-link" to="/authors">Back Home</Link></button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default EditsAuthor;