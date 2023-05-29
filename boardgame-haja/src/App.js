import GlobalStyle from './components/style/GlobalStyle'
import Footer from './components/common/Footer'
import Router from './routes/Router'
function App() {
  return (
    <>
      <GlobalStyle/>
      <div className="wrapper">
        <Router/>
      </div>
      <Footer/>
    </>
  );
}
export default App;