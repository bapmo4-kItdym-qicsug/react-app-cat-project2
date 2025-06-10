import React from 'react';

const SearchPanel = ({ query, setQuery, category, setCategory, onSearch, onRandom }) => {
  return (
    <div className="search-panel">
      <input
        type="text"
        placeholder="Поиск по породе..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="">Все</option>
        <option value="hairless">Лысые</option>
        <option value="hypoallergenic">Гипоаллергенные</option>
        <option value="usa">Из США</option>
        <option value="active">Активные</option>
        <option value="family">Семейные</option>
      </select>
      <button onClick={onSearch}>Поиск</button>
      <button onClick={onRandom}>Случайная</button>
    </div>
  );
};

export default SearchPanel;