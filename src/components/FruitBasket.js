import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({ fruit, filters, currentFilter, onUpdateFilter }) => {
  return (
    <div className="fruit-basket">
      <Filter handleChange={onUpdateFilter} />
      <FilteredFruitList
        fruit={fruit}
        filter={currentFilter}
        />
    </div>
  );
};

export default FruitBasket;

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: () => {},
};
