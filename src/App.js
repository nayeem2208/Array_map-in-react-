import logo from './logo.svg';
import './App.css';


let People=[
  {
    name:'Leanne Graham',
    email:'leannegraham@gmail.com'
  },
  {
    name:'Ervin Howel',
    email:'ervinhowel@gmail.com'
  },
  {
    name:'Nayeem ce ',
    email:'nayeem@gmail.com'

  },
  {
    name:'leo messi',
    email:'messi@gmail.com'
  }
]
function App() {
  return (
    <div className="App">
      {People.map((person)=>(
        <div className='card'>
          <h1>{person.name}</h1>
          <p>{person.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
