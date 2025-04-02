const renderNewProductPage = (productData) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Shop - Newest product</title>
        <style>
          body {
            margin: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f5f5f5;
            font-family: Arial, sans-serif;
          }
          .container {
            background: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
            min-width: 350px;
            max-width: 600px;
          }
          h1 {
            margin-bottom: 20px;
          }
          .product {
            margin: 20px 0;
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
          }
          nav a {
            display: block;
            margin: 10px 0;
            color: #007bff;
            text-decoration: none;
          }
          nav a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>${productData ? "Newest product" : "No products available"}</h1>
          ${
            productData
              ? `<div class="product">New product data:<br>${productData}</div>`
              : ""
          }
          <nav>
            <a href="/">Home</a>
            <a href="/product/add">Add product</a>
            <a href="/logout">Logout</a>
          </nav>
        </div>
      </body>
    </html>
  `;
};

module.exports = renderNewProductPage;
