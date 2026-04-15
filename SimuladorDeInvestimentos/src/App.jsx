import { useState } from 'react'
import CapturaDados from './CapturaDados'
import ExibeDados from './ExibeDados'

function App() {
  const[valorFinal, setValorFinal] = useState(0)
  const[total, setTotal] = useState(0)
  const[aporte, setAporte] = useState(0)
  const[juros, setJuros] = useState(0)
  const[rentabilidade, setRentabilidade] = useState(0)

  return (
    <div class="container">
      <div class="row">
        <div class="col-md-8 mt-5" style={{
            fontSize: 30
          }}>
            <h1>Simulador de Investimentos</h1>
            <h4>Descubra quanto seu dinheiro pode render com juros compostos</h4>
          <CapturaDados
            setValorFinal = {setValorFinal}
            setTotal = {setTotal}
            setAporte = {setAporte}
            setJuros = {setJuros}
            setRentabilidade = {setRentabilidade}
          ></CapturaDados>
          <ExibeDados
            valorFinal = {valorFinal}
            total = {total}
            aporte = {aporte}
            juros = {juros}
            rentabilidade = {rentabilidade}
          ></ExibeDados>
        </div>
      </div>
    </div>
  )
}

export default App
