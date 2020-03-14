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

const coord = el => {
  const viewportX = el.clientX;
  const viewportY = el.clientY;

  const boxRectangle = el.target.getBoundingClientRect();
  const localX = viewportX - boxRectangle.left;
  const localY = viewportY - boxRectangle.top;

  el.target.closest('.js-comparator').style.setProperty('--x-2', `${localX}px`);
  el.target.closest('.js-comparator').style.setProperty('--y-2', `${localY}px`);

}
