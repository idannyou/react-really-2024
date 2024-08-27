import { useSearchParams } from "react-router-dom";

import { useFoods } from "./queries/useFoods";

function useSearch() {
  const [params, setParams] = useSearchParams();

  return [
    params.get("search")?.toString() ?? "",
    (search: string) => {
      setParams({ search });
    },
  ] as const;
  // as const makes this return value a readonly tuple
}

function App() {
  const foodsQuery = useFoods();
  const [search, setSearch] = useSearch();

  // derived state
  const filteredFoods =
    foodsQuery.data?.filter((food) =>
      food.name.toLowerCase().includes(search.toLowerCase())
    ) ?? [];

  const numFoods = filteredFoods.length;

  function renderFoods() {
    return (
      <ul>
        {filteredFoods.map((food) => {
          return <li key={food.id}>{food.name}</li>;
        })}
      </ul>
    );
  }

  return (
    <>
      <h1>Menu</h1>
      <input
        type="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {numFoods === 0 && !foodsQuery.isLoading && <p>No foods found</p>}
      {foodsQuery.isLoading ? <p>Loading</p> : renderFoods()}
    </>
  );
}

export default App;
