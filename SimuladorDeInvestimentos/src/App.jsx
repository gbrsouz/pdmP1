import { useState } from 'react'
import CapturaDados from './CapturaDados'

function App() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-8 mt-5" style={{
            fontSize: 30
          }}>
            <h1>Simulador de Investimentos</h1>
            <h4>Descubra quanto seu dinheiro pode render com juros compostos</h4>
          <CapturaDados></CapturaDados>
        </div>
      </div>
    </div>
  )
}

export default App
