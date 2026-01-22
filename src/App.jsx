import { useState } from 'react'



function App() {

  const [articles, setArticles] = useState([
    { id: 1, title: "React è da pazzi" },
    { id: 2, title: "Forza Roma" },
    { id: 3, title: "divina commedia" }
  ]);

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
    </div>

  );
}

export default App



