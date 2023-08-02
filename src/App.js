
import './App.css';
import Row from './Row';
import requests from './requests';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
// import Header from './components/Header/Header';
import Home from './pages/home/home';
import Navbar from './Navbar';
import Footer from './Footer/Footer';
function App() {
  return (
    
  <div className="App">
    <Navbar/>
    
   <Router>
    {/* <Header/> */}
    <Routes>
      <Route  index element={<Home/>}></Route>
      {/* <Route path="movie/:id" element={<h1>movie details</h1>}> </Route> */}
      {/* <Route path="movies/.type" element={<h1>movie list</h1>}> </Route> */}
      {/* <Route path="/" element={<h1>error page</h1>}> </Route> */}



     
    </Routes>
   </Router>
      

    
   
    
     <Row title="Netflix Original" fetchUrl={requests.fetchNetflixOriginals}/>
     <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
     <Row title="Romance Video" fetchUrl={requests.fetchRomanceMovies}/>
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Documentries" fetchUrl={requests.fetchDocumentaries}/>
     <Footer/>
    </div>
    
  );
}

export default App;
