import { useState } from 'react'

const originalArticles = [
  { id: 1, title: "React è da pazzi" },
  { id: 2, title: "Forza Roma" },
  { id: 3, title: "divina commedia" }
]

function App() {

  const [articles, setArticles] = useState(originalArticles);
  const [newTitle, setNewTitle] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault() // refresh della pagina

    if (newTitle === "") return

    const newArticle = {
      id: articles.length + 1, //Serve per creare un id nuovo.
      title: newTitle
    }

    setArticles([...articles, newArticle])  // aggiorna lista
    setNewTitle("") // svuota l'input

  }

  return (
    <div>
      <h1>ARTICOLI</h1>

      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            {article.title}
          </li>
        ))}
      </ul>



      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTitle} // “Il valore nell’input è sempre quello che c’è nello state newTitle
          onChange={(e) => setNewTitle(e.target.value)} //Salva quello che l’utente ha scritto nello state
          placeholder="Nuovo articolo"
        />

        <button type="submit">Aggiungi</button>
      </form>
    </div>
  )
}


export default App



