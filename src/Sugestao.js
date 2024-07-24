export default function Sugestao({nome, imagemSugestao, seguidor}) {
  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={imagemSugestao} alt={nome}/>
        <div className="texto">
          <div className="nome">{nome}</div>
          <div className="razao">{seguidor}</div>
        </div>
      </div>

      <div className="seguir">Seguir</div>
    </div>
  )
}