import Sugestao from './Sugestao'

export default function Sidebar() {
  const sugestaoParaSeguir = [
    {nome:'bad.vibes.memes', imagemSugestao:'assets/img/bad.vibes.memes.svg', seguidor:'Segue você'},
    {nome:'chibirdart', imagemSugestao:'assets/img/chibirdart.svg', seguidor:'Segue você'},
    {nome:'razoesparaacreditar', imagemSugestao:'assets/img/razoesparaacreditar.svg', seguidor:'Novo no Instagram'},
    {nome:'adorable_animals', imagemSugestao:'assets/img/adorable_animals.svg', seguidor:'Segue você'},
    {nome:'smallcutecats', imagemSugestao:'assets/img/smallcutecats.svg', seguidor:'Segue você'},
  ]


  return (
    <div className="sidebar">

      <div className="usuario">
        <img src="assets/img/catanacomics.svg" alt="imagem de perfil"/>
        <div className="texto">
          <span>
            <strong>catanacomics</strong>
            <ion-icon name="pencil"></ion-icon>
          </span>
        </div>
      </div>

      <div className="sugestoes">
        <div className="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        {sugestaoParaSeguir.map((sug, i) => <Sugestao nome={sug.nome} imagemSugestao={sug.imagemSugestao} seguidor={sug.seguidor} />)}

      </div>

      <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
        Hashtags • Idioma
      </div>

      <div className="copyright">
        © 2021 INSTAGRAM DO FACEBOOK
      </div>

    </div>
  )
}