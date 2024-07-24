export default function Post({nome, imagemPerfil, imagemPost, descricao, imagemPerfilCurtido,nomeCurtido, quantidadeDeCurtidas}) {
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
            <ion-icon name="heart-outline"></ion-icon>
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
            Curtido por <strong>{nomeCurtido}</strong> e <strong>outras {quantidadeDeCurtidas} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  )
}