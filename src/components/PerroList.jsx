import React, { useEffect, useState } from 'react';
import axios from '../AxiosConfig';

const PerroList = () => {
  const [perros, setPerros] = useState([]);

  useEffect(() => {
    axios.get('')
      .then(response => setPerros(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>List of Perros</h1>
      <ul>
        {perros.map(perro => (
          <li key={perro.perroId}>
            {perro.dogName} - {perro.dogBreed} - {perro.dogAge} - {perro.dogGender} - {perro.ownerName} - {perro.ownerEmail} - {perro.ownerPhone} - {perro.ownerIdentification} -
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PerroList;
