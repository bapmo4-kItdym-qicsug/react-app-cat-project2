import React, { useState, useEffect, useMemo } from 'react';
import { fetchBreeds } from './api/catApi';
import BreedList from './components/BreedList';
import BreedDetails from './components/BreedDetails';
import SearchPanel from './components/SearchPanel';
import Pagination from './components/Pagination';

const itemsPerPage = 9;

//useState
function App() { 
  const [allBreeds, setAllBreeds] = useState([]);
  const [filteredBreeds, setFilteredBreeds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    fetchBreeds().then(data => {
      setAllBreeds(data);
      setFilteredBreeds(data);
    });
  }, []);

  const checkCategoryMatch = (breed, category) => {
    if (!category) return true;
    switch (category) {
      case 'hairless': return breed.hairless === 1;
      case 'hypoallergenic': return breed.hypoallergenic === 1;
      case 'usa': return breed.origin === 'United States';
      case 'active': return breed.temperament?.toLowerCase().includes('active');
      case 'family': return breed.temperament?.toLowerCase().includes('affectionate') || breed.temperament?.toLowerCase().includes('gentle');
      default: return true;
    }
  };

  const handleSearch = () => {
    const filtered = allBreeds.filter(breed => {
      const matchesName = breed.name.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = checkCategoryMatch(breed, category);
      return matchesName && matchesCategory;
    });
    setFilteredBreeds(filtered);
    setCurrentPage(1);
    setSelectedBreed(null);
  };

  const handleRandom = () => {
    if (allBreeds.length === 0) return;
    const randomBreed = allBreeds[Math.floor(Math.random() * allBreeds.length)];
    setSelectedBreed(randomBreed);
  };

  const breedsToShow = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredBreeds.slice(start, start + itemsPerPage);
  }, [filteredBreeds, currentPage]);

  return (
    <div className="App">
      <h2>Cat Breeds</h2>
      <SearchPanel
        query={query}
        setQuery={setQuery}
        category={category}
        setCategory={setCategory}
        onSearch={handleSearch}
        onRandom={handleRandom}
      />
      {selectedBreed ? (
        <BreedDetails breed={selectedBreed} onBack={() => setSelectedBreed(null)} />
      ) : (
        <>
          <BreedList breeds={breedsToShow} onSelect={setSelectedBreed} />
          <Pagination
            totalItems={filteredBreeds.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
}

export default App;