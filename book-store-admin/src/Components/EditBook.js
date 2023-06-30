import React, { useState } from 'react';
import axios from 'axios';
import "../CSS/AddBook.css";
import { Alert } from 'react-bootstrap';
import MyNavbar from './MyNavBar';
import { useParams } from 'react-router-dom';

const EditBook = () => {
    const {id}=useParams();
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    price: 0,
    pages: 0,
    inventoryCount: 0
  });
  const [status,setStatus]=useState('');
  const [error,setError]=useState('');

  const handleChange = (e) => {
    setBookData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const token=localStorage.getItem("jwtToken");
      const response = await axios.put(`http://localhost:8082/book-store/update-book/${id}`, bookData,{
      headers: {
        'Authorization': 'Bearer ' + token
      }});
      console.log(response.data);
      setStatus('Book Edited');
      console.log('book Edited');
      setBookData({
        title: '',
        author: '',
        price: 0,
        pages: 0,
        inventoryCount: 0
      });
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div>
    <MyNavbar/>
    <div className="box">
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={bookData.title} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input type="text" id="author" name="author" value={bookData.author} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" value={bookData.price} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="pages">Pages:</label>
          <input type="number" id="pages" name="pages" value={bookData.pages} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="inventoryCount">Inventory Count:</label>
          <input
            type="number"
            id="inventoryCount"
            name="inventoryCount"
            value={bookData.inventoryCount}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Edit Book</button>
        {status && <Alert variant='success'>{status}</Alert>}
        {error && <Alert variant='danger'>{error}</Alert>}
      </form>
    </div>
    </div>
  );
};

export default EditBook;
