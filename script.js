document.addEventListener('DOMContentLoaded', () => {

  const boxes = document.querySelectorAll('.js-comparator');
  boxes.forEach(box => {
    box.addEventListener('click', handleComparator, false)
  });

});

const handleComparator = () => {
  const container = event.target.closest('.js-comparator');
  if (!container.classList.contains('active')) {
    container.classList.add('active')
    container.addEventListener('mousemove', coord, false);
  } else {
    container.classList.remove('active')
    container.removeEventListener('mousemove', coord, false);
  }
}

const coord = () => {
  const viewportX = event.clientX;
  const viewportY = event.clientY;

  const boxRectangle = event.target.getBoundingClientRect();
  const localX = viewportX - boxRectangle.left;
  const localY = viewportY - boxRectangle.top;

  const container = event.target.closest('.js-comparator');
  container.style.setProperty('--x-2', `${localX}px`);
  container.style.setProperty('--y-2', `${localY}px`);
}
