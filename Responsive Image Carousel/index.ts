const slider = document.querySelector('.slider') as HTMLDivElement
console.log(slider)
const activate = e => {
  const items:NodeListOf<Element> = document.querySelectorAll('.item')
  e.target.matches('.next') && slider.append(items[0])
  e.target.matches('.prev') && slider.prepend(items[items.length - 1])
}

document.addEventListener('click', activate, false)