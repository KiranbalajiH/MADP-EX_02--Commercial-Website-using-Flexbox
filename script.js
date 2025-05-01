document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartIcon = document.querySelector('.cart-icon');
    let cartItemCount = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            cartItemCount++;
            cartIcon.textContent = `🛒 Cart (${cartItemCount})`;
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            // In a real scenario, you would add this product to a more persistent cart
            console.log(`${productName} added to cart.`);
            // You could also provide visual feedback to the user here (e.g., a small notification)
        });
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('header').offsetHeight, // Adjust for fixed header height
                    behavior: 'smooth'
                });
            }
        });
    });
});