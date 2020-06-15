import React, {useState} from 'react';
import './App.css';
import data, {categories, uniqueCategories, categoriesWithCounts, } from './data'
import { ProductList } from './ProductList';
import Button from './Button'


function App() {
  const [currentCategory, setCategory ] = useState('All')
  function getCategory(newValue) {
    setCategory(newValue)
  }

  function resetState() {
    setCategory('All')
  }
  const categories = uniqueCategories.map((category, index) => {
    const count = categoriesWithCounts
    return (
      <Button 
          category={category}
          id={category}
          key={index}
          count={count[category]}
          onClick = {() => getCategory[category]}
      />
    )
  })

  const total = uniqueCategories.reduce(
    (account, category) => {return account + categoriesWithCounts[category]}, 0)
  
  return(
    <div className="App">
      <div className="Navbar">
        <button id="All" className="Category" value="All" onClick={resetState}>
          <span className="Center">All Categories</span>
          <div className="Badge">
            <span className="Center">{total}</span>
          </div>
        </button>
        {categories}
      </div>
      <div className="ProductList">
        <ProductList currentCategory={currentCategory} />
      </div>
    </div>
  )

}

export default App;
