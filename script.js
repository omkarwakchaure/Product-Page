function addToCart() {
    // Get selected variant data
    const selectedColor = document.getElementById('colorSelector').value;
    const selectedSize = document.getElementById('sizeSelector').value;
    const selectedQuantity = document.getElementById('quantitySelector').value;
  
    // Calculate % off (in this case, assuming a fixed discount)
    const originalPrice = 199;
    const discountedPrice = 99;
    const discountPercentage = Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
  
    // Display cart message
    const cartMessage = document.getElementById('cartMessage');
    cartMessage.innerHTML = `
      Added to Cart!<br>
      Product: ${selectedColor} ${selectedSize}<br>
      Quantity: ${selectedQuantity}<br>
      Total Price: $${discountedPrice * selectedQuantity} (${discountPercentage}% off)
    `;
  
    cartMessage.style.display = 'block';
  }
  
  