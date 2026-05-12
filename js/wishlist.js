function toggleWishlist(carName) {
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

  if (wishlist.includes(carName)) {
    wishlist = wishlist.filter(item => item !== carName);
    alert(carName + ' removed from wishlist');
  } else {
    wishlist.push(carName);
    alert(carName + ' added to wishlist');
  }

  localStorage.setItem('wishlist', JSON.stringify(wishlist));
}
