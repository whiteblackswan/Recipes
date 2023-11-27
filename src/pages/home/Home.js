import RecipeList from '../../components/RecipeList'

// styles
import './Home.css'
import useRecipe from '../../hooks/useRecipe'

export default function Home() {
  const {error , data, isPending} = useRecipe()
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  )
}