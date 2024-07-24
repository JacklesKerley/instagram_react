import React from 'react'

export default function User() {
  const [nome, setNome] = React.useState('catanacomics')
  const [imagemPerfil, setImagemPerfil] = React.useState('assets/img/catanacomics.svg')

  function alterarNome() {
    const nomeAlterado = prompt('Digite seu nome')

    if (nomeAlterado) {
      setNome(nomeAlterado)
    }
  }

  function alterarImagemPerfil() {
    const imagemAlterada = prompt('Digite o endereço da imagem')

    if (imagemAlterada) {
      setImagemPerfil(imagemAlterada)
    }
  }

  return (
    <div className="usuario">
      <img src={imagemPerfil} alt="imagem de perfil" onClick={() => alterarImagemPerfil()}/>
      <div className="texto">
        <span>
          <strong>{nome}</strong>
          <ion-icon name="pencil" onClick={() => alterarNome()}></ion-icon>
        </span>
      </div>
    </div>
  )
}
