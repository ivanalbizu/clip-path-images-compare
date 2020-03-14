document.addEventListener('DOMContentLoaded', () => {

  let boxes = document.querySelectorAll('.js-comparator');
  boxes.forEach(box => {
    box.addEventListener('click', handlerComparator, false)
  });

});

const handlerComparator = () => {
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
  let viewportX = el.clientX;
  let viewportY = el.clientY;

  let boxRectangle = el.target.getBoundingClientRect();
  let localX = viewportX - boxRectangle.left;
  let localY = viewportY - boxRectangle.top;

  el.target.closest('.js-comparator').style.setProperty('--x-2', `${localX}px`);
  el.target.closest('.js-comparator').style.setProperty('--y-2', `${localY}px`);

}
