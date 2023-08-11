import './style.css'
import { Exemplo } from './exemplo'
import { Aiai } from './exemplo'
export default function App() {
  const listaNomes = [["Mara, ", "35 anos, ", "Mora em Nova andradina"],["Wesley, ", "25 anos, ", "Mora em Batayporã"],["Carla, ", "15 anos, ", "Mora em Aquidauana"]]
    return (
      <div>
        <h1>Hello Word!</h1>
        <Exemplo lista={listaNomes} />
        <Aiai name =" Betinha"/>
      </div>
    )
  }
