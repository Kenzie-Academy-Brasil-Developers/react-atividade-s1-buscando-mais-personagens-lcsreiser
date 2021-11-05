import "./App.css";
import { useState, useEffect } from "react";
import Characters from "./components/Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [next, setNext] = useState(2);
  const [count, setCount] = useState(1);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${count}`)
      .then((response) => response.json())
      .then((response) => {
        setCharacterList([...characterList, ...response.results]);
        setNext(response.info.pages);

        if (count < next) {
          setCount(count + 1);
        }
      })
      .catch((err) => console.log(err));
  }, [count]);

  return (
    <div>
      <Characters characterList={characterList} />
    </div>
  );
}

export default App;
