import React from 'react';

const BreedDetails = ({ breed, onBack }) => {
  return (
    <div className="full-details">
      <h3>{breed.name}</h3>
      <img src={breed.image?.url || 'https://via.placeholder.com/300'} alt={breed.name} />
      <p><strong>Происхождение:</strong> {breed.origin}</p>
      <p><strong>Тип шерсти:</strong> {breed.hairless ? 'Лысая' : 'Обычная'}</p>
      <p><strong>Гипоаллергенная:</strong> {breed.hypoallergenic ? 'Да' : 'Нет'}</p>
      <p><strong>Темперамент:</strong> {breed.temperament}</p>
      <button onClick={onBack}>Назад</button>
    </div>
  );
};

export default BreedDetails;