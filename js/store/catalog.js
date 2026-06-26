function productCard(p) {
  return `
<div class="col-md-4 mb-4">
<div class="product-card">
<div class="product-image">
<img src="${p.image}" class="img-fluid" alt="">
</div>
<div class="p-3">
<h5>${p.name}</h5>
<div class="mb-2">
<span class="price">${p.price.toLocaleString()} ₽</span>
<small class="text-decoration-line-through text-muted ms-2">${p.oldPrice.toLocaleString()} ₽</small>
</div>
<div class="d-flex justify-content-between">
<button class="btn btn-sm btn-outline-danger" onclick="Favorites.toggle('${p.id}')"><i class="bi bi-heart"></i></button>
<button class="btn btn-sm btn-pink" onclick="Cart.add('${p.id}')"><i class="bi bi-cart3"></i> В корзину</button>
</div>
</div>
</div>
</div>`;
}

function renderCheckout() {
  const root = document.getElementById("page-root");

  root.innerHTML = `

<div class="card">

<div class="card-body">

<h3>Оформление заказа</h3>

<div class="mb-3">
<label class="form-label">Имя</label>
<input class="form-control" id="name">
</div>

<div class="mb-3">
<label class="form-label">Телефон</label>
<input class="form-control" id="phone">
</div>

<div class="mb-3">
<label class="form-label">Адрес</label>
<textarea class="form-control" id="address"></textarea>
</div>

<button class="btn btn-pink" id="checkout-btn">

Подтвердить заказ

</button>

</div>

</div>

`;

  document.getElementById("checkout-btn").addEventListener("click", () => {
    if (confirm("Подтвердить оформление заказа?")) {
      Ecommerce.purchase(4990);

      localStorage.removeItem("cart");

      location.href = "success.html";
    }
  });
}

function renderSuccess() {
  const root = document.getElementById("page-root");

  root.innerHTML = `

<div class="text-center mt-5">

<h2>🎉 Спасибо!</h2>

<p>

Ваш заказ успешно оформлен.

</p>

<a
class="btn btn-pink"
href="index.html">

Вернуться на главную

</a>

</div>

`;
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("page-root");

  if (!root || !window.PRODUCTS) return;

  const page = location.pathname.split("/").pop() || "index.html";

  switch (page) {
    case "index.html":
      root.innerHTML = `
                <div class="hero">
                    <h2>Весенняя коллекция</h2>
                    <p>Скидки до 30%</p>
                </div>

                <div class="row">
                    ${PRODUCTS.slice(0, 6).map(productCard).join("")}
                </div>
            `;
      break;

    case "category.html": {
      const category =
        new URLSearchParams(location.search).get("category") || "dress";

      const items = PRODUCTS.filter((product) => product.category === category);

      root.innerHTML = `
                <div class="row">
                    ${items.map(productCard).join("")}
                </div>
            `;
      break;
    }

    case "cart.html": {
      const ids = Cart.get();

      const items = ids
        .map((id) => PRODUCTS.find((product) => product.id === id))
        .filter(Boolean);

      const total = items.reduce((sum, product) => sum + product.price, 0);

      root.innerHTML =
        items
          .map(
            (product, index) => `
                    <div class="card mb-3">
                        <div class="card-body d-flex justify-content-between align-items-center">

                            <div>
                                <strong>${product.name}</strong><br>
                                <span class="price">${product.price} ₽</span>
                            </div>

                            <button
                                class="btn btn-outline-danger btn-sm"
                                onclick="Cart.remove(${index})">

                                Удалить

                            </button>

                        </div>
                    </div>
                `,
          )
          .join("") +
        `
                <div class="text-end">

                    <h4>Итого: ${total} ₽</h4>

                    <a
                        href="checkout.html"
                        class="btn btn-pink">

                        Оформить заказ

                    </a>

                </div>
                `;
      break;
    }

    case "favorites.html": {
      const ids = Favorites.get();

      const items = ids
        .map((id) => PRODUCTS.find((product) => product.id === id))
        .filter(Boolean);

      root.innerHTML = `
                <div class="row">
                    ${items.map(productCard).join("")}
                </div>
            `;
      break;
    }

    case "checkout.html":
      renderCheckout();
      break;

    case "success.html":
      renderSuccess();
      break;

    // case "product.html":
    //   renderProduct();
    //   break;

    // case "analytics-lab.html":
    //   renderAnalyticsLab();
    //   break;

    default:
      root.innerHTML = `
                <div class="alert alert-warning">
                    Страница не найдена.
                </div>
            `;
  }
});
