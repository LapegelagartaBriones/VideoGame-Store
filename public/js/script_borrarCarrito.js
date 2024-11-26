document.querySelectorAll(".borrar-btn").forEach(button => {
    button.addEventListener("click", async (e) => {
        const idJuego = e.currentTarget.getAttribute("data-id");
        const response = await fetch(`/carrito/eliminar/${idJuego}`, {
            method: "DELETE",
        });

        if (response.ok) {
            // Elimina el juego del DOM
            e.currentTarget.parentElement.remove();
            console.log(`Juego con ID ${idJuego} eliminado del carrito.`);
        } else {
            console.error("Error al eliminar el juego del carrito.");
        }
    });
});