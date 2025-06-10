// add component BreedList.jsx
import React from 'react';

const BreedList = ({ breeds, onSelect }) => {
  return (
    <div className="grid">
      {breeds.map(breed => (
        <div key={breed.id} className="card" onClick={() => onSelect(breed)}>
          <img
            className="cat-image"
            src={breed.image?.url || 'https://via.placeholder.com/150'}
            alt={breed.name}
          />
          <div className="cat-name">{breed.name}</div>
        </div>
      ))}
    </div>
  );
};

export default BreedList;