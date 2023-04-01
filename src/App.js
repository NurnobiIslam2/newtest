
import './App.css';
import Header from './Componnents/Header';
import Main from './Componnents/Main/Main';


function App() {
  const bookmarkbtn = ({readTime}) =>{
    console.log(readTime)
}
  return (
    <div className="App">
      <Header></Header>
      <Main bookmarkbtn={bookmarkbtn}></Main>

      
    </div>
  );
}

export default App;
