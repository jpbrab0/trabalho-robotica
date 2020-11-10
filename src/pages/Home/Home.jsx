import React from 'react'
import Card from '../../components/Card';
import Cards from '../../components/Cards';
import Header from '../../components/Header';
import ParalaxTop from '../../components/Paralax';
import '../../reset.css'
function Home() {
  return (
    <>
      <Header/>
      <ParalaxTop/>
      <Cards>
        <Card href="/barcode" img_url="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSwczjvBCjQQ71PjETgalQtmBT1E9CHGPjfog&usqp=CAU" img_alt="Código de barras" title="Código de barras" description="Código de barras é uma representação gráfica de dados numéricos ou alfanuméricos."/>
        <Card href="/scanner" img_url="https://www.imgeletro.com.br/900x900/produto/marketplace_5aa2e33ebc06a9.12202959.jpg" img_alt="Scanner" title="Scanner" description="Um digitalizador é um periférico de entrada responsável por digitalizar imagens, fotos e textos impressos para o computador."/>
        <Card href="sonar" img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Sonar_Principle_pt-BR.svg/1200px-Sonar_Principle_pt-BR.svg.png" img_alt="Código de barras" title="Sonar" description="Sonar é um instrumento inicialmente usado em época de guerra para a localização de submarinos."/>
      </Cards>
    </>
  );
}

export default Home;
