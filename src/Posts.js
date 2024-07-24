import Post from './Post'

export default function Posts() {
  const arrayPost = [
    {nome:'meowed', imagemPerfil:'assets/img/meowed.svg', imagemPost:'assets/img/gato-telefone.svg', descricao:'gato-telefone', imagemPerfilCurtido:'assets/img/respondeai.svg', nomeCurtido:'respondeai', quantidadeDeCurtidas:139523},
    {nome:'barked', imagemPerfil:'assets/img/barked.svg', imagemPost:'assets/img/dog.svg', descricao:'dog', imagemPerfilCurtido:'assets/img/adorable_animals.svg', nomeCurtido:'adorable_animals', quantidadeDeCurtidas:99159},
    {nome:'filomoderna', imagemPerfil:'assets/img/filomoderna.svg', imagemPost:'assets/img/unicornio.jpg', descricao:'unicornio', imagemPerfilCurtido:'assets/img/9gag.svg', nomeCurtido:'9gag', quantidadeDeCurtidas:1980}
  ]
  
  
  return (
    <div className="posts">

      {arrayPost.map((postRender, i) => <Post nome={postRender.nome} imagemPerfil={postRender.imagemPerfil} imagemPost={postRender.imagemPost} descricao={postRender.descricao} imagemPerfilCurtido={postRender.imagemPerfilCurtido} nomeCurtido={postRender.nomeCurtido} quantidadeDeCurtidas={postRender.quantidadeDeCurtidas}/>)}

    </div>
  )
}