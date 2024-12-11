const express = require("express");
const app = express();
const path = require("path");
const exphbs = require("express-handlebars");

// Cấu hình Handlebars
app.engine("hbs", exphbs.engine({ extname: "hbs" }));
app.set("view engine", "hbs");

// Cấu hình thư mục chứa tệp JSON
const products = require("./json/products.json");

// API để trả về dữ liệu sản phẩm
app.get("/api/products", (req, res) => {
  res.json(products); // Trả về dữ liệu từ products.json
});

// Cấu hình Express để phục vụ các tệp tĩnh (CSS, JS, hình ảnh, v.v.)
app.use(express.static(path.join(__dirname, "public")));

// Đường dẫn đến tệp HBS
app.get("/", (req, res) => {
  res.render("index", { products: products }); // Truyền dữ liệu vào template
});

// Đường dẫn tới các trang
app.get("/home", (req, res) => {
  res.render("home", { products: products }); // Render trang home và truyền dữ liệu sản phẩm vào
});

app.get("/about", (req, res) => {
  res.render("about"); // Render trang about
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
