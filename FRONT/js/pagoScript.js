const modalPago = document.getElementById('pago-realizado');

const modalPagoClose = document.getElementById('close-pago');

const btnOpenModalPago = document.getElementById('btn-pago-realizado');

modalPagoClose.addEventListener('click', closeModalPago);
btnOpenModalPago.addEventListener('click', openModalPago);
window.addEventListener('click', clickOustside);


function openModalPago(){
    modalPago.style.display='block';
}
function closeModalPago() {
    modalPago.style.display='none';
}
function clickOustside(e){
    if (e.target ==  modalPago) {
        modalPago.style.display='none';
    }
}