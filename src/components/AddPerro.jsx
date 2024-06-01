import React, { useState } from 'react';
import axios from '../AxiosConfig';

const AddPerro = () => {
  const [perro, setPerro] = useState({
    dogName: '',
    ownerName: '',
    dogAge: '',
    dogGender: '',
    dogBreed: '',
    ownerEmail: '',
    ownerPhone: '',
    ownerIdentification: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPerro({ ...perro, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/', perro)
      .then(response => console.log('Perro added:', response.data))
      .catch(error => console.error('Error adding perro:', error));
  };

  return (
    <div>
      <h1>Add Perro</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="dogName" placeholder="Dog Name" onChange={handleChange} />
        <input type="text" name="ownerName" placeholder="Owner Name" onChange={handleChange} />
        <input type="number" name="dogAge" placeholder="Dog Age" onChange={handleChange} />
        <input type="text" name="dogGender" placeholder="Dog Gender" onChange={handleChange} />
        <input type="text" name="dogBreed" placeholder="Dog Breed" onChange={handleChange} />
        <input type="email" name="ownerEmail" placeholder="Owner Email" onChange={handleChange} />
        <input type="text" name="ownerPhone" placeholder="Owner Phone" onChange={handleChange} />
        <input type="text" name="ownerIdentification" placeholder="Owner ID" onChange={handleChange} />
        <button type="submit">Add Perro</button>
      </form>
    </div>
  );
};

export default AddPerro;
