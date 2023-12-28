const btnOpenModal = document.querySelectorAll('.show-modal')
const btnCloseModal = document.querySelector('.close-modal')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')

const openModal = function () {
      modal.classList.remove('hidden')
      overlay.classList.remove('hidden')
}

console.log(btnOpenModal)
const closeModal = function () {
      modal.classList.add('hidden')
      overlay.classList.add('hidden')
}
const escBtn = function(event) {
      // console.log(event)
      if (event.keyCode === 27) {
            closeModal ()
      }
}
document.addEventListener('keydown', escBtn)
for (let i = 0; i < btnOpenModal.length; i++){
      btnOpenModal[i].addEventListener('click', openModal)
}
overlay.addEventListener('click',closeModal)
      btnCloseModal.addEventListener('click',closeModal)
