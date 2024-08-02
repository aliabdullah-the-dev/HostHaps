// Speed factor: Increase to speed up the scroll
const speedFactor = 3;
let scrollPosition = window.scrollY;
let isScrolling = false;

// Function to handle custom scroll behavior
function customScroll(event) {
    // Prevent the default scroll behavior
    event.preventDefault();

    // Determine the scroll direction
    const delta = event.deltaY || event.detail || event.wheelDelta;
    
    // Update the scroll position
    scrollPosition += delta * speedFactor;
    
    // Clamp the scroll position to the bounds of the document
    scrollPosition = Math.max(0, Math.min(scrollPosition, document.body.scrollHeight - window.innerHeight));

    // Start the scroll animation if not already scrolling
    if (!isScrolling) {
        isScrolling = true;
        smoothScroll();
    }
}

// Function for smooth scrolling using requestAnimationFrame
function smoothScroll() {
    const currentScroll = window.scrollY;
    const distance = scrollPosition - currentScroll;

    // If the distance is small enough, finish the scrolling
    if (Math.abs(distance) < 1) {
        window.scrollTo(0, scrollPosition);
        isScrolling = false;
        return;
    }

    // Otherwise, scroll a fraction of the remaining distance
    window.scrollTo(0, currentScroll + distance * 0.1);

    // Continue the animation on the next frame
    requestAnimationFrame(smoothScroll);
}

// Add the event listener for the scroll event
window.addEventListener('wheel', customScroll, { passive: false });