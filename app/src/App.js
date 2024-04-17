import './App.css';
import Ciccio from "./Ciccio";
import { useState , useEffect } from 'react';

export default function App() {

  useEffect(() => {
    caricaAlunni();
  }, []);

  const [alunni, setAlunni] = useState([]);
  const [loading, setLoading] = useState(true);

  function caricaAlunni(){
    const a = [
      { id: 1, nome: "claudio", cognome: "benve"},
      { id: 2, nome: "ivan", cognome: "bruno"},
      { id: 3, nome: "alek", cognome: "dgl"},
    ]
    /*
    altrimenti:
    aynsc function caricaAlunni(){
      const response = await fetch("https://localhost:8080/alunni", {method: "GET"});
      const nuovoArray = await response.json();
      setAlunni(nuovoArray);
      setLoading(false);
    }
    */
    setAlunni(a);
  }

  function caricaAlunniPromise(){
    fetch("https://localhost:8080/alunni", {method: "GET"})
    .then(response => response.json())
      .then(data => {
        setAlunni(data);
      }
    )
  }

  return (
    <div className="App">
      <button onClick={caricaAlunni}>Carica alunni</button>
      {
        loading ?
          <p>pagina in caricamento</p>
        :
          alunni.map(a => (
            <Alunno alunno={a} caricaAlunni={caricaAlunni}/>
          ))
      }
      <Ciccio nome="Benve"></Ciccio>
      <Ciccio nome="Nuti"></Ciccio>
    </div>
  );
}
