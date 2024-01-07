import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function ViewAuthor(props) {
  const res = useParams()
  const [userData, setUserData] = useState()

  let getdatas = async () => {
    try{
      let empolee = await axios.get(`http://localhost:5000/user/${res.id}`); 
    setUserData(empolee.data)
    } catch (error) {
      alert("something went worng")
    }
  };

  useEffect(() => {
    getdatas(); 
  }, []);

  return (
    <div className='lists'>
      {
        userData ?
        <div class="cardsss">
        <div class="card-bodys">
          <h4 class="card-title">AuthorName : <p>{userData?.authorname}</p></h4>          
          <h4 class="card-title">BirthDate : <p>{userData?.birthdate}</p></h4>          
          <h4 class="card-title">Biography : <p>{userData?.biography}</p></h4>          
        </div>
      </div>
           :
          <div className="spinner-border m-5" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
      }
      <div className='col-lg-8 mt-6 mt-2 mb-3'>
        <button type='button' className='btn btn-success btn-sm' ><Link className="nav-link" to="/authors">Back Home</Link></button>
      </div>
    </div>
  );
}

export default ViewAuthor;    