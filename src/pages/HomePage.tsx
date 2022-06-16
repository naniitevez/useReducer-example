import React, { useEffect } from "react";
import CatsContainer from "../components/home/cats/CatsContainer";
import { loadCats, setLoading } from "../data/cats/cat.action";
import { useAppcontext } from "../hooks/useAppcontext";

const HomePage: React.FC = () => {
  const { state, dispatch } = useAppcontext();

  useEffect(() => {
    dispatch(loadCats);
  }, []);

  const handleOnClick = () => {
    dispatch(setLoading(!state.cat.isLoading));
  };

  return (
    <div className="home-page" style={{display: 'flex', flexDirection: 'column'}}>
      <h1>Cats App</h1>
      {/* {state.cat.isLoading && <h3>Cargando...</h3>}
      <button onClick={handleOnClick}>Load</button> */}

      {state.cat.cats.length ? (
        <CatsContainer/>
      ) : (
        <h3>No se cargaron los gatos</h3>
      )}
    </div>
  );
};

export default HomePage;
