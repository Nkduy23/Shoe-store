fetch('/api/products')
  .then((response) => response.json())
  .then((products) => {
    const templateSource = document.getElementById("product-template").innerHTML;
    const template = Handlebars.compile(templateSource);
    const context = { products };
    const html = template(context);
    document.getElementById("product-list").innerHTML = html;
    console.log(products);
  })
  .catch((error) => console.error("Error loading products:", error));
