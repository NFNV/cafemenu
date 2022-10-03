import './App.css';
import Card from './components/Card.js';

function App() {
  return (
    <div className="wrapper">
      <Card
      img="https://images.unsplash.com/photo-1558416165-5fb04b79b0e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvZmZlZSUyMGVzcHJlc3NvJTIwbWFjaGluZXxlbnwwfHwwfHw%3D&w=1000&q=80" 
      title="Espresso"
      description="Fuerte y con cuerpo"
      />
      <Card
      img="https://media.istockphoto.com/photos/pour-over-coffee-brewing-in-living-room-picture-id1297038120?k=20&m=1297038120&s=170667a&w=0&h=CkZVYjihx-3iKAP-Cvd8vPE_wuskrB1VK4fEYkuwQaE=" 
      title="Filtrado!"
      description="Suave y abundante"
      />
      <Card
      img="https://static.onecms.io/wp-content/uploads/sites/43/2020/07/14/French-Press-Coffee-OnzegGetty-Images-2000.jpg"
      title="Prensa francesa"
      description="Suave y con mucha cafeína"
      />
       <Card
      img="https://i.hurimg.com/i/hdn/75/650x400/5de8e9fd0f254416946d0537.jpg" 
      title="Turco"
      description="Marcado gusto a especias!"
      />
    </div>
  );
}


export default App;