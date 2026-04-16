import { useState } from 'react'
import CapturaDados from './CapturaDados'
import ExibeDados from './ExibeDados'

function App() {
  const[valorFinal, setValorFinal] = useState(0)
  const[total, setTotal] = useState(0)
  const[aporte, setAporte] = useState(0)
  const[juros, setJuros] = useState(0)
  const[rentabilidade, setRentabilidade] = useState(0)
  const[historico, setHistorico] = useState([])

  return (
    <div class="container">
      <div class="row justify-content-center">
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
            historico = {historico}
            setHistorico = {setHistorico}
          ></CapturaDados>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-8 mt-4" style={{
            fontSize: 30
          }}>
            <ExibeDados
              valorFinal = {valorFinal}
              total = {total}
              aporte = {aporte}
              juros = {juros}
              rentabilidade = {rentabilidade}
            ></ExibeDados>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="col-md-6 mt-5"><h4>Histórico de Simulações</h4></div>
          <div class="col-md-6"><h6>{historico.push()} Simulações</h6></div>
          <table className="table" style={{
            border: "2px solid gray",
            borderRadius: "10px",
            borderCollapse: "separate"
          }}>
              <thead>
                <tr style={{fontSize:20}}>
                  <th style={{ border: "none" }}>Data</th>
                  <th style={{ border: "none" }}>Valor (R$)</th>
                </tr>
              </thead>
              <tbody>
                {historico.map((registro, i) => (
                  <tr key={i} style={{fontSize:15}}>
                    <td style={{ border: "none" }}>
                      {new Date(registro.data).toLocaleString()}
                    </td>
                    <td style={{ border: "none" }}>
                      {registro.valor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export default App
