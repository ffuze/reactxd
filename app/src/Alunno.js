import { useState } from "react";

export default function Alunno({alunno}){

    const [eliminazione, setEliminazione] = useState(false);

    async function eliminaAlunno(){
        setEliminazione(true);
        const response = await fetch(`http://localhost:8080/alunni/${alunno.id}`, {method: "DELETE"});
        setEliminazione(true);
        caricaAlunni();
    }

    function richiedeConferma(){
        setInConferma(true);
    }

    function annullaConferma(){
        setInConferma(false);
    }


    return(
        <div>Sono l'alunno {alunno.id} {alunno.nome} {alunno.cognome} 
        {eliminazione ?
            <span>eliminazione in corso...</span>
        :
        (inConferma ?
                <span> - sei sicuro?</span>
                <button>Si</button>
                <button onClick={annullaConferma}>No</button>
            :
                <button onClick={eliminaAlunno}>
                        Elimina
                </button>
        )
        }
        </div>
    )
}