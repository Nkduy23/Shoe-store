// public/js/main.js
window.onload = function() {
    const productTemplateSource = document.getElementById("product-template").innerHTML;
    const productTemplate = Handlebars.compile(productTemplateSource);
  
    fetch('/api/products')
      .then(response => response.json())
      .then(products => {
        const html = productTemplate({ products: products });
        document.getElementById("product-list").innerHTML = html;
      })
      .catch(error => console.error('Error loading products:', error));
  };
  