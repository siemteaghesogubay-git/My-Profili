document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // VANLIGA PROJECT MODALS
    // =========================
    const openButtons = document.querySelectorAll(".open-modal");
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".close");

    openButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modalId = button.getAttribute("data-modal");
            document.getElementById(modalId).style.display = "flex";
        });
    });

    closeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.closest(".modal").style.display = "none";
        });
    });

    window.addEventListener("click", e => {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    });


    // =========================
    // HACKER PÅSKÄGG 🕶️
    // =========================
    const secretTrigger = document.getElementById("secret-trigger");
    const secretModal = document.getElementById("secretModal");
    const closeSecret = document.getElementById("closeSecret");

    secretTrigger.addEventListener("click", () => {
        secretModal.style.display = "flex";
    });

    closeSecret.addEventListener("click", () => {
        secretModal.style.display = "none";
    });

    window.addEventListener("click", e => {
        if (e.target === secretModal) {
            secretModal.style.display = "none";
        }
    });
    
 


    


});