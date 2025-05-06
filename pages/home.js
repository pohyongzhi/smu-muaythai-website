// Exports a function that returns the homepage HTML as a string
// so it can be called in the start.js
module.exports = function () {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Home - SMU Muay Thai</title>
        <style>
          body { font-family: Arial; margin: 0; }
          header { background: #333; color: white; padding: 1rem; }
          nav a { color: white; margin-right: 1rem; text-decoration: none; }
          main { padding: 2rem; }
        </style>
      </head>
      <body>
        <header>
          <nav>
            <a href="/">Home</a>
            <a href="/about">About Us</a>
          </nav>
        </header>
        <main>
          <h1>Get to know SMU Muay Thai better!</h1>
          <p>Training Days</p>
          <p>Mon: 7.30 - 9pm</p>
          <p>Wed: 7.30 - 9pm</p>
        </main>
      </body>
      </html>
    `;
  };
  