
function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') return null;
    if (discountRate < 0 || discountRate > 1) return null;
    // TODO: Implement logic
    const discountPrice = price - (price * discountRate);
    return discountPrice;
}


 function filterProducts(products, callback) {
    if (!Array.isArray(products) || typeof callback !== 'function') return [];
    // TODO: Implement filtering logic
  return products.filter(callback);
}

function sortInventory(inventory, key) {
    if (typeof inventory !== Array || typeof key !== 'number') return 0;
    return [...inventory].sort((a, b) =>
        a[key].localeCompare(b[key])
    );
}

module.exports = { calculateDiscount, filterProducts, sortInventory };



