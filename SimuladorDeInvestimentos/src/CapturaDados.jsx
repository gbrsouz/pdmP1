import { useState } from "react"

const CapturaDados = props => {
    const [valorInicial, setValorInicial] = useState(0)
    const [taxa, setTaxa] = useState(0)
    const [aporteMensal, setAporteMensal] = useState(0)
    const [periodo, setPeriodo] = useState(0)

    const calcular = () => {
        let montante = valorInicial
        let totalInvestido = valorInicial

        for (let i = 1; i <= periodo; i++) {
            montante = montante * (1 + taxa / 100) + aporteMensal
            totalInvestido += aporteMensal
        }

        let juros = montante - totalInvestido
        let rentabilidade = juros / totalInvestido * 100

        props.setValorFinal(montante.toFixed(2))
        props.setTotal(totalInvestido.toFixed(2))
        props.setAporte(periodo)
        props.setJuros(juros.toFixed(2))
        props.setRentabilidade(rentabilidade.toFixed(2))
    }

    const limpar = () => {
        props.setValorFinal(0)
        props.setTotal(0)
        props.setAporte(0)
        props.setJuros(0)
        props.setRentabilidade(0)
    }

    return(
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h6 class="mt-2">Valor Inicial (R$)</h6>
                    <input type="number" class="w-100"  name="" id="valorInicial" style={{
                        fontSize: 20,
                        borderRadius: 7
                    }} onChange={(e) => setValorInicial(Number(e.target.value))}/>
                    <h6 class="mt-2">Taxa de Juros (% ao mês)</h6>
                    <input type="number" class="w-100" name="" id="" style={{
                        fontSize: 20,
                        borderRadius: 7
                    }} onChange={(e) => setTaxa(Number(e.target.value))}/>
                </div>
                <div class="col-md-6">
                    <h6 class="mt-2">Aporte Mensal (R$)</h6>
                    <input type="number" class="w-100" name="" id="" style={{
                        fontSize: 20,
                        borderRadius: 7
                    }} onChange={(e) => setAporteMensal(Number(e.target.value))}/>
                    <h6 class="mt-2">Período (Em meses)</h6>
                    <input type="number" class="w-100" name="" id="" style={{
                        fontSize: 20,
                        borderRadius: 7
                    }} onChange={(e) => setPeriodo(Number(e.target.value))}/>
                </div>
            </div>
            <div class="row">
                <div class="col-md-9">
                    <button class="mt-4 w-100" style={{
                        fontSize: 20,
                        borderRadius: 7
                    }} onClick={calcular} >Calcular</button>
                </div>
                <div class="col-md-3">
                    <button class="mt-4 w-100" style={{
                        fontSize: 20,
                        borderRadius: 7
                    }} onClick={limpar} >Limpar</button>
                </div>
            </div>
        </div>
    )
}

export default CapturaDados