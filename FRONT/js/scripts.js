// Get modal element
var modal = document.getElementById("modal-producto");
//Get open modal button
var modalbtn = document.getElementById("modal-open");
//Get close button
var closebtn = document.getElementById('btn-close-modal');
//Get ficha pruebas
//querySelectorAll selecciona todos los elementos que se llamen o tengan la clase .ficha (recordar: . = clase, #=id)

//const ficha = document.querySelectorAll(".ficha");
//ficha.forEach(ficha => {
//    ficha.addEventListener('click', openModal);
//});
const btnAddCarrito = document.querySelectorAll('#add-carrito');
const img = document.querySelector(".img-producto");
btnAddCarrito.forEach(btnAddCarrito=>{
    btnAddCarrito.addEventListener('click',)
})
img.addEventListener('click', openModal);
// Listen for open click
modalbtn.addEventListener('click', openModal);
//Listen for close click
closebtn.addEventListener('click', closeModal);
//lsiten for outside click
window.addEventListener('click', clickOustside);
// Funcion to open modal
function openModal(){
    modal.style.display='block';
}
function closeModal() {
    modal.style.display='none';
}
function clickOustside(e) {
    if (e.target == modal) {
        console.log(e);
        modal.style.display='none';
    }
}