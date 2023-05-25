import { useEffect, useState } from "react";
import GlobalStyle from './components/style/GlobalStyle'
import Footer from './components/common/Footer'
import LoginSignPage from "./pages/LoginSignPage";
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
      <GlobalStyle/>
      <LoginSignPage/>
      <Footer/>
    </div>
  );
}
export default App;
