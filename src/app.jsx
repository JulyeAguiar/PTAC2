import './style.css'
import { Exemplo } from './exemplo'
import { Aiai } from './exemplo'
export default function App() {
  const listaNomes = [
    {nome: "Mara", idade: "35", cidade: "Nova andradina"},
    {nome: "Wesley", idade: "25", cidade: "Batayporã"},
    {nome: "Carla", idade: "15", cidade: "Aquidauana"}
  ]
    return (
      <div>
        <h1>Hello Word!</h1>
        <Exemplo lista={listaNomes} />
        <Aiai name =" Julye"/>
      </div>
    )
  }
