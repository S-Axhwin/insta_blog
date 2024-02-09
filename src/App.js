import './App.css';
import { Route, Routes } from 'react-router-dom';
import Feeds from './components/feeds/Feeds';
import NewPost from './components/newpost/NewPost';
import Header from './components/Common/header/Header';
import Register from './components/register/Register';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route exact path='/feeds' element={<Feeds/>}/>
      <Route path='/newpost' element={<NewPost/>}/>
      <Route path='/reg' element={<Register/>} />
    </Routes>
    </>
  );
}

export default App;
