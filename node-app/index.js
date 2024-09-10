const express = require('express');
const mysql = require('mysql');
const app = express();

const port = 3000;
const db = mysql.createConnection({
  host: 'mysql', 
  user: 'usuario',
  password: 'teste',
  database: 'desafionode2'
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('Conectado ao MySQL');
});

app.get('/', (req, res) => {
  const name = 'Nathan Lisandro'; 
  const query = 'INSERT INTO people (name) VALUES (?)';

  db.query(query, [name], (err) => {
    if (err) {
      console.error('Erro ao inserir no banco de dados:', err);
      return res.status(500).send('Erro ao acessar o banco de dados.');
    }

    db.query('SELECT name FROM people', (err, results) => {
      if (err) {
        console.error('Erro ao recuperar dados do banco de dados:', err);
        return res.status(500).send('Erro ao acessar o banco de dados.');
      }
      let html = '<h1>Full Cycle Rocks!</h1><ul>';
      results.forEach(row => {
        html += `<li>${row.name}</li>`;
      });
      html += '</ul>';
      res.send(html);
    });
  });
});

app.listen(port, () => {
  console.log(`Aplicação rodando na porta ${port}`);
});
