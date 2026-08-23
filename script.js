            if (window.instgrm) {
  window.instgrm.Embeds.process();
}

const container = document.querySelector('.gallery_container');
const delay = 3000; // Time per image in milliseconds (3 seconds)

let autoScroll = setInterval(scrollNext, delay);

function scrollNext() {
  const maxScroll = container.scrollWidth - container.clientWidth;
  
  // If at the end, jump back to the start; otherwise scroll to next item
  if (container.scrollLeft >= maxScroll - 5) {
    container.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    // Scroll by the width of one child item + the flex gap
    const step = container.children[0].clientWidth + 5;
    container.scrollBy({ left: step, behavior: 'smooth' });
  }
}

// Optional: Pause auto-scroll when user touches/interacts with the carousel
container.addEventListener('touchstart', () => clearInterval(autoScroll));
container.addEventListener('touchend', () => {
  autoScroll = setInterval(scrollNext, delay);
});