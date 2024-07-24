import Sugestao from './Sugestao'

export default function Sugestoes() {
  const sugestaoParaSeguir = [
    {nome:'bad.vibes.memes', imagemSugestao:'assets/img/bad.vibes.memes.svg', seguidor:'Segue você'},
    {nome:'chibirdart', imagemSugestao:'assets/img/chibirdart.svg', seguidor:'Segue você'},
    {nome:'razoesparaacreditar', imagemSugestao:'assets/img/razoesparaacreditar.svg', seguidor:'Novo no Instagram'},
    {nome:'adorable_animals', imagemSugestao:'assets/img/adorable_animals.svg', seguidor:'Segue você'},
    {nome:'smallcutecats', imagemSugestao:'assets/img/smallcutecats.svg', seguidor:'Segue você'},
  ]

  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {sugestaoParaSeguir.map((sug, i) => <Sugestao nome={sug.nome} imagemSugestao={sug.imagemSugestao} seguidor={sug.seguidor} key={i}/>)}

    </div>
  )
}