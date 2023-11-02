import "./Home.css";
import { useFetch } from '../../hooks/useFetch';





export default function Home() {
  const { data, isPending, error } = useFetch("http://localhost:3000/recipes")


  return (
    <div className="home">
      {error && <p className="error ">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && data.map(recipes => (
        <h2 key={recipes.id}>{recipes.title}</h2>
      ))}
    </div>
  )
}

