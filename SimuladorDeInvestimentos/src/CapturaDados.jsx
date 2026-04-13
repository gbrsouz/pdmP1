const CapturaDados = () => {
  return(
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h6 class="mt-2">Valor Inicial (R$)</h6>
                <input type="number" class="w-100"  name="" id="" style={{
                    fontSize: 20
                }}/>
                <h6 class="mt-2">Taxa de Juros (% ao mês)</h6>
                <input type="number" class="w-100" name="" id="" style={{
                    fontSize: 20
                }}/>
            </div>
            <div class="col-md-6">
                <h6 class="mt-2">Aporte Mensal (R$)</h6>
                <input type="number" class="w-100" name="" id="" style={{
                    fontSize: 20
                }}/>
                <h6 class="mt-2">Período (Em meses)</h6>
                <input type="number" class="w-100" name="" id="" style={{
                    fontSize: 20
                }}/>
            </div>
        </div>
        <div class="row">
            <div class="col-md-9">
                <button class="mt-4 w-100" style={{
                    fontSize: 20
                }}>Calcular</button>
            </div>
            <div class="col-md-3">
                <button class="mt-4 w-100" style={{
                    fontSize: 20
                }}>Limpar</button>
            </div>
        </div>
    </div>
  )
}

export default CapturaDados