const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <h1>Login Page</h1>

    <form method="POST" action="/login">
      <div>
        <label>Email</label>
        <input name="email" aria-label="Email" />
      </div>

      <div>
        <label>Password</label>
        <input name="password" type="password" aria-label="Password" />
      </div>

      <button type="submit">Login</button>
    </form>
  `);
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.send(`
      <h1>Login Page</h1>
      <p style="color:red;">Email and password are required</p>
      <a href="/">Try Again</a>
    `);
  }

  if (email !== 'user@example.com' || password !== 'password') {
    return res.send(`
      <h1>Login Page</h1>
      <p style="color:red;">Invalid credentials</p>
      <a href="/">Try Again</a>
    `);
  }

  res.redirect('/dashboard');
});

app.get('/dashboard', (req, res) => {
  res.send(`<h1>Dashboard</h1>`);
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

