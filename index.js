
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
  } else {
    ready();
  }
  
  function ready() {
    // Get Delete Button
  
    const delButtons = document.getElementsByClassName("delete-icon");
  
    for (i = 0; i < delButtons.length; i++) {
      const delButton = delButtons[i];
      delButton.addEventListener("click", delCartRow);
    }
  }
  //  Cart Items Number  
  
  let noOfCartItems = document.getElementsByClassName("no-items-cart")[0];
  const cartContainer = document.getElementsByClassName("cart-container")[0];
  const cartDetails = cartContainer.getElementsByClassName("cart-details").length;
  
  noOfCartItems.innerText = cartDetails;
  
  // Delete Function
  function delCartRow(event) {
    const delButtonRow = event.target;
    delButtonRow.parentElement.parentElement.remove();
    //   console.log(event.target);
    updateCartTotal();
  }
  
  function updateCartTotal() {
    //   Get Cart Container Wrapping Every Row
    const cartContainer = document.getElementsByClassName("cart-container")[0];
    const cartDetails = cartContainer.getElementsByClassName("cart-details");
    let total = 0;
    for (i = 0; i < cartDetails.length; i++) {
      const cartDetail = cartDetails[i];
      const cartItemPrice = parseFloat(
        cartDetail
          .getElementsByClassName("cart-item-price")[0]
          .innerText.replace("TND", "")
      );
      const cartItemQuantity =
        cartDetail.getElementsByClassName("item-quantity")[0].value;
      total += cartItemPrice * cartItemQuantity;
    }
    //   console.log(total);
    const cartTotal = document.getElementsByClassName("cart-price")[0];
    cartTotal.innerText = "TND" + total;
  
    //   Update Total Number Of Items In Cart
    let noOfCartItems = document.getElementsByClassName("no-items-cart")[0];
    noOfCartItems.innerText = cartDetails.length;
  }
  
  // Like Button
  
  const likeIcons = document.getElementsByClassName("fav-icon");
  
  for (i = 0; i < likeIcons.length; i++) {
    likeIcon = likeIcons[i];
    likeIcon.addEventListener("click", likeItem);
  }
  
  function likeItem(event) {
    event.target.classList.toggle("active");
  }
 
  // update Cart On Input Change
  
  let itemsQuantity = document.getElementsByClassName("item-quantity");
  
  for (i = 0; i < itemsQuantity.length; i++) {
    let itemQuantity = itemsQuantity[i];
    itemQuantity.addEventListener("change", changeItemQuantity);
    //   console.log(itemQuantity.value);
  }
  
  function changeItemQuantity(event) {
    let input = event.target;
    if (isNaN(input.value) || input.value < 0) {
      input.value = 1;
    }
    //   console.log(input.value);
    updateCartTotal();
  }
  
  // Increase Number Of Items
  
  const addItems = document.getElementsByClassName("plus-icon");
  
  for (i = 0; i < addItems.length; i++) {
    const addItem = addItems[i];
    addItem.addEventListener("click", increaseQuantity);
    //   const itemValue = addItem.nextElementSibling;
  }
  
  function increaseQuantity(e) {
    const cartRow = e.target;
    let itemQuantity = cartRow.previousElementSibling;
  
    itemQuantity.value = parseInt(itemQuantity.value) + 1;
  
    updateCartTotal();
  }
  
  // Decrease Number Of Items
  
  const subItems = document.getElementsByClassName("sub-icon");
  
  for (i = 0; i < subItems.length; i++) {
    const subItem = subItems[i];
    subItem.addEventListener("click", decreaseQuantity);
  }
  
  function decreaseQuantity(e) {
    const cartRow = e.target;
    let itemQuantity = cartRow.nextElementSibling;
  
    itemQuantity.value = parseInt(itemQuantity.value) - 1;
  
    if (itemQuantity.value < 1) {
      itemQuantity.value = 1;
    }
    updateCartTotal();
  }
 



  
  
  