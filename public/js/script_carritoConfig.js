document.addEventListener("DOMContentLoaded", ()=>{
    const checkboxes = document.querySelectorAll('input[name="carrito"]');
    checkboxes.forEach((checkbox)=>{
        checkbox.addEventListener("change",(e)=>{
            if (e.target.checked) {
                checkboxes.forEach((cb) =>{
                    if (cb !== e.target) {
                        cb.checked=false;
                    }
                });
            }
        });
    });
});