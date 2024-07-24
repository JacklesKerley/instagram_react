import Sugestoes from './Sugestoes'

export default function Sidebar() {
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

      <Sugestoes />

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