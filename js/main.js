const cars = [
  {
    id: 1,
    name: 'Bugatti Chiron',
    price: '$3.2M',
    images: [
      'assets/bugatti-front.jpg',
      'assets/bugatti-side.jpg',
      'assets/bugatti-rear.jpg'
    ]
  },
  {
    id: 2,
    name: 'Ferrari SF90',
    price: '$625K',
    images: [
      'assets/ferrari-front.jpg',
      'assets/ferrari-side.jpg',
      'assets/ferrari-rear.jpg'
    ]
  },
  {
    id: 3,
    name: 'Lamborghini Revuelto',
    price: '$608K',
    images: [
      'assets/lamborghini-front.jpg',
      'assets/lamborghini-side.jpg',
      'assets/lamborghini-rear.jpg'
    ]
  }
];

function getData(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

function setData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function updateCartCount() {
  const count = getData('cart').length;
  document.querySelectorAll('#cart-count').forEach(el => el.textContent = count);
}

function addToCart(id) {
  const cart = getData('cart');
  const car = cars.find(c => c.id === id);
  cart.push(car);
  setData('cart', cart);
  updateCartCount();
  alert(car.name + ' added to cart!');
}

function addToWishlist(id) {
  const wishlist = getData('wishlist');
  const car = cars.find(c => c.id === id);
  wishlist.push(car);
  setData('wishlist', wishlist);
  alert(car.name + ' added to wishlist!');
}

function createCarCard(car) {
  return `
    <div class="car-card">
      <img src="${car.images[0]}" data-images='${JSON.stringify(car.images)}' alt="${car.name}">
      <h3>${car.name}</h3>
      <div class="price">${car.price}</div>
      <div class="actions">
        <button class="btn glow" onclick="addToCart(${car.id})">Add to Cart</button>
        <button class="btn wishlist-btn" onclick="addToWishlist(${car.id})">❤️ Wishlist</button>
      </div>
    </div>
  `;
}

function renderCars(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = cars.map(createCarCard).join('');

  // Simulated 360° rotation by cycling through images
  container.querySelectorAll('img[data-images]').forEach(img => {
    const images = JSON.parse(img.dataset.images);
    let index = 0;
    setInterval(() => {
      index = (index + 1) % images.length;
      img.src = images[index];
    }, 1500);
  });
}

function renderList(key, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const items = getData(key);

  if (!items.length) {
    container.innerHTML = '<p>No items found.</p>';
    return;
  }

  container.innerHTML = items
    .map(item => `
      <div class="list-item">
        <h3>${item.name}</h3>
        <p>${item.price}</p>
      </div>
    `)
    .join('');
}

renderCars('featured-cars');
renderCars('shop-cars');
renderList('cart', 'cart-items');
renderList('wishlist', 'wishlist-items');
updateCartCount();
