import { useParams, useNavigate, useLocation } from 'react-router-dom';

import { useTheme } from '../../hooks/useTheme';
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

  const handleSearchData = async () => {
    const results = data?.filter((list) => list.title.toLowerCase().includes(location.search.slice(3).toLowerCase()))
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
