import './App.css';
import Cards from './components/Cards/Cards';
//import DigitalClock from './components/DigitalClock/DigitalClock';
//import Counter from './components/Counter/Counter';
//import Forms from './components/Forms/Forms';
//import Calculator from './components/Calculator/Calculator';
//import DateAndTime from './components/DateAndTime/DateAndTime';
//import Greeting from './components/Greeting/Greeting';

function App() {

  const card1 = {
    img: "https://glints.com/id/lowongan/wp-content/uploads/2020/10/logo-reactjs.jpg",
    title: "React JS",
    desc: "Framework of JS",
  }
  const card2 = {
    img: "https://th.bing.com/th/id/OIP.6ahbWjp_g9hqhaTDSJOL1QHaEK?pid=ImgDet&rs=1",
    title: "Javascript",
    desc: "JS",
  }
  const card3 = {
    img: "https://th.bing.com/th/id/R.cea146585c3e07462d1a2a9b50f69ea1?rik=MsgWQxTdZI%2fMSQ&riu=http%3a%2f%2fwww.angularjstraininginchennai.in%2fwp-content%2fuploads%2f2016%2f04%2fangular_bg1-3.png&ehk=yNqko8k%2fWC7sSy2QrYokVY7Oxpw8Ij9K%2fdz3eDBjcZA%3d&risl=&pid=ImgRaw&r=0",
    title: "Angular",
    desc: "Framework of JS",
  }
  const card4 = {
    img: "https://th.bing.com/th/id/R.e05fdd7d2fdaad0df0a880e838478dc2?rik=pYFgDlZmAy%2f51A&riu=http%3a%2f%2fmichaelsoriano.com%2fwp-content%2fuploads%2f2020%2f07%2fnextjs.png&ehk=60MYVjBQiovWavP66fAFCNq%2fB03RtkqdUZJ7u3cOEdo%3d&risl=&pid=ImgRaw&r=0",
    title: "Next JS",
    desc: "Framework of JS",
  }
  const card5 = {
    img: "https://i.pinimg.com/originals/d4/df/22/d4df220d581fd5bfb4eba9cb23ded3ff.png",
    title: "Vue JS",
    desc: "Framework of JS",
  }


  return (
    <div className="App">
      {/* <DateAndTime/> */}
      {/* <Greeting/> */}
      {/* <Calculator/> */}
      {/* <Forms/> */}
      {/* <Counter/> */}
      {/* <DigitalClock/> */}
      <Cards 
        card1 = {card1} 
        card2 = {card2} 
        card3 = {card3}
        card4 = {card4}
        card5 = {card5} 
      />
    </div>
  );
}

export default App;
