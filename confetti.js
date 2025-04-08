document.addEventListener('DOMContentLoaded', () => {
    // Get the pop-up and close button
    const popup = document.getElementById('popup');
    const closeButton = document.getElementById('close-popup');

    // Show the pop-up when the page loads
    setTimeout(() => {
        popup.style.display = 'block';
    }, 500); // Delay for 0.5 seconds after the page loads

    // Close the pop-up when the button is clicked
    closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Close the pop-up if the user clicks outside of it
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const banner = document.querySelector('.responsive-banner');
    if (banner) {
        banner.addEventListener('mouseover', () => {
            party.confetti(banner, {
                count: party.variation.range(20, 40), // Number of confetti pieces
                spread: 90, // Spread angle of confetti
            });
        });
    }
});
