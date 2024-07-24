import React from 'react'

export default function Post({nome, imagemPerfil, imagemPost, descricao, imagemPerfilCurtido,nomeCurtido, quantidadeDeCurtidas}) {

  const [curtido, setCurtido] = React.useState(false)
  const [classNome, setClassCurtido] = React.useState("heart-outline")
  const [likes, setLikes] = React.useState(quantidadeDeCurtidas)


  function curtir() {
    setCurtido(!curtido)
    
    if(curtido === false) {
      setClassCurtido('heart')
      setLikes(likes + 1)
    } else {
      setClassCurtido('heart-outline')
      setLikes(likes - 1)
    }
  }

  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={imagemPerfil} alt={nome}/>
          {nome}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img src={imagemPost} alt={descricao}/>
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon name={classNome} onClick={() => curtir()} style={{ color: curtido ? 'red' : '' }}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={imagemPerfilCurtido} alt={nomeCurtido}/>
          <div className="texto">
            Curtido por <strong>{nomeCurtido}</strong> e <strong>outras {likes.toLocaleString()} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  )
}