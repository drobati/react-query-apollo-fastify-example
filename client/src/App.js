import { useState } from "react";

import { QueryClient, QueryClientProvider } from "react-query";

import Banner from "./components/Banner";
import Menu from "./components/Menu";
import Desserts from "./components/Desserts";

const queryClient = new QueryClient();

function App() {
  const [selected, setSelected] = useState({});
  const handleCheckbox = (id) => {
    setSelected({ ...selected, [id]: !selected[id] });
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Banner />
      <Menu checked={selected} />
      <Desserts checked={{ selected, handleCheckbox }} />
    </QueryClientProvider>
  );
}

export default App;
