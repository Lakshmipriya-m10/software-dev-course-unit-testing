
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
    if (!Array.isArray(inventory) || typeof key !== 'string') return [];
    // TODO: Implement sorting logic
    return inventory.sort((a ,b) => a[key].localCompare (b[key]));
    
    //return [];
}
 
module.exports = { calculateDiscount, filterProducts, sortInventory };



