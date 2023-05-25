import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/game');
        if(!response.ok) {
            throw new Error("failed to retrieve boardgame.json");
        }
        const json = await response.json();
        setData(json)
      } catch(error) {
          console.error(error);
      }
    }
    fetchData();
  }, []);
  console.log(data);
  return (
    <div>
      hello world
    </div>
  );
}
export default App;
