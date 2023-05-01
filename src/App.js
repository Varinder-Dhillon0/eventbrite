import logo from './logo.svg';
import './App.css';
import Post from './post';

import Navbar from './navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="posts">
        <h1>Likes</h1>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </div>
    </div>
  );
}

export default App;
