import React from 'react'
import CenterText from '../components/CenterText'

export default function BarsCode() {
    return (
        <CenterText>
            <h1>Código de barras</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwczjvBCjQQ71PjETgalQtmBT1E9CHGPjfog&usqp=CAU" alt="Código de barras" />
            <p>
                Código de barras (em inglês: barcode) é uma representação gráfica de dados numéricos ou alfanuméricos. A decodificação (leitura) dos dados é realizada por um tipo de scanner - o leitor de código de barras -, que emite um raio vermelho que percorre todas as barras. Onde a barra for escura, a luz é absorvida; onde a barra for clara (espaços), a luz é refletida novamente para o leitor. Os dados capturados nessa leitura óptica são compreendidos pelo computador, que por sua vez converte-os em letras ou números humano-legíveis. A utilização é muito comum em diversas áreas, desde a indústria é largamente utilizado no comércio e serviços. 
            </p>
        </CenterText>
    )
}