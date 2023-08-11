
export function Exemplo({lista}){
    return(
        <div>
           {lista.map(aluno=>(
            <ul>
                <li>{aluno}</li>
            </ul>
           ))}

        </div>
    )
}

export function Aiai({name}){
    return(
        <div>

            <p>Desenvolvido por:{name}</p>

        </div>
    )
}
