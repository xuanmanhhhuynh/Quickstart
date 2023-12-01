import logo from './logo.svg';
import './App.css';
import MyApp from './pages/MyApp';
import AboutPage from './pages/AboutPage';
import Text from './pages/Text';
import Img from './pages/Img';
import Ketxuat from './pages/Ketxuat';
import Products from './pages/Products';
import MyButton from './pages/MyButton';
import Tic_Tac_toe from './pages/Tic_Tac_toe';

function App() {
  return (
    <>
      <MyApp/>
      <hr/>
            <AboutPage/> 
            <hr/>
      <Text/>
      <hr/>
      <Img/>
      <hr/>
      <Ketxuat/>
      <hr/>
      <Products/>
      <hr/>
      <MyButton/>
      <hr/>
      <Tic_Tac_toe/>
      
      
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

// function MyButton({ title, style} ) {
//   return (
//     // style nhan vao mot object
//     <button style={style}>  
//       {title}
//     </button>
//   );
// }
//  function MyApp() {
//   return (
//     <div>
//       <h1>Welcome to my app asfasfsa</h1>
//       <MyButton title="A" style={{color: 'red'}}/>
//       <MyButton title="B"/>
//     </div>
//   );
// }
