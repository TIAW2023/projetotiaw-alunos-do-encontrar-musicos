
//MODAL VAGAS
const abrirModal = document.getElementById("abrir-modal");
const modal = document.getElementById("modal");
const fechar = document.getElementsByClassName("fechar")[0];

abrirModal.onclick = function() {
  modal.style.display = "block";
  window.addEventListener("click", closeModal);
}

fechar.onclick = function() {
  modal.style.display = "none";
  window.removeEventListener("click", closeModal);
}

function closeModal(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    window.removeEventListener("click", closeModal);
  }
}

//MODAL EVENTO
const abrirModalEvento = document.getElementById("abrir-modal1");
const modalEvento = document.getElementById("modal1");
const fecharEvento = document.getElementsByClassName("fechar1")[0];

abrirModalEvento.onclick = function() {
  modalEvento.style.display = "block";
  window.addEventListener("click", closeModalEvento);
}

fecharEvento.onclick = function() {
  modalEvento.style.display = "none";
  window.removeEventListener("click", closeModalEvento);
}

function closeModalEvento(event) {
  if (event.target == modalEvento) {
    modalEvento.style.display = "none";
    window.removeEventListener("click", closeModalEvento);
  }
}
