import { useState } from "react";

export default function PostInsert() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSave = () => {
    setIsLoading(true);
    const post = {
      title,
      body
    };
    fetch('https://forum-gamificado-2f07b-default-rtdb.firebaseio.com/publicacao.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    })
      .then(response => response.json())
      .then(data => {
        setMessage("Salvo com sucesso!");
        setTitle('');
        setBody('');
      })
      .catch(error => setMessage(`Erro: ${error.message}`))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="outer-container">
      <div className="post-insert-container">
        <h1>Criar Novo Post</h1>
        <div className="form-group">
          <label htmlFor="title">Título:</label>
          <input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Digite o título do post"
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Assunto:</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={4}
            placeholder="Digite o conteúdo do post"
          />
        </div>
        <button className="btn-save" onClick={handleSave} disabled={isLoading}>
          {isLoading ? 'Salvando...' : 'Salvar'}
        </button>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}
