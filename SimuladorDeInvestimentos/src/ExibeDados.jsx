const ExibeDados = props => {
  return(
    <div class="container" style={{
        backgroundColor: "#EAFAD7",
        marginTop: 25,
        fontSize: 30,
        borderRadius: 10
    }}>
        <div class="row">
            <div class="col-md-12">
                <h6 class="mt-2">Valor Final Acumulado</h6>
                <h5 style={{
                    color: "#3B6409"
                }}>R$ {props.valorFinal}</h5>
            </div>
            <hr></hr>
        </div>
        <div class="row">
            <div class="col-md-6">
                <h6>Total Investido</h6>
                <h5>R$ {props.total}</h5>
                <h6>Nº de aportes</h6>
                <h5>{props.aporte}</h5>
            </div>
            <div class="col-md-6">
                <h6>Juros acumulado</h6>
                <h5>R$ {props.juros}</h5>
                <h6>Rentabilidade</h6>
                <h5 style={{
                    color: "#3B6409"
                }}>+{props.rentabilidade}%</h5>
            </div>
            </div>
    </div>
  )
}

export default ExibeDados