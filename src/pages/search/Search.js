import { useParams, useLocation } from 'react-router-dom';

import RecipeList from '../../components/RecipeList';
import useRecipe from '../../hooks/useRecipe'

// styles
import './Search.css';
import { useEffect, useState } from 'react';

export default function Search() {
  const { error, data, isPending } = useRecipe()
  const { id } = useParams();
  let location = useLocation();
  const [searchData, setSearchData] = useState('')

  useEffect(() => {
    handleSearchData()
  }, [location])
  
console.log('location.search.slice(3).toLowerCase()', location.search.slice(3).toLowerCase())
  const handleSearchData = async () => {
    const searchValue = location.search.slice(3).toLowerCase()
    
    let newValue;
    if(searchValue.includes('%20')) {
      console.log("it has asepcial character")
      newValue =  searchValue.replace(/%20/g, " ")
    }
    console.log('newValue', newValue)
    const results = data?.filter((list, i) => {
      console.log('list', list)
      // console.log('i', i)
    return list.title.toLowerCase().includes(newValue || searchValue)
    })
    console.log('results', results)
    setSearchData(results)
  }

  return (
    <div>
      <h2 className="page-title">Recipes including {id}</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {searchData && <RecipeList recipes={searchData} />}
    </div>
  );
}
