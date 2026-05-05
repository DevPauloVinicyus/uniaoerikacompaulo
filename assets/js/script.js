document.addEventListener("DOMContentLoaded", function () {

    console.log("JS OK");

    /* ============================= */
    /* ELEMENTOS */
    /* ============================= */
    const folha = document.querySelector(".folha-esquerda");
    const selo = document.querySelector(".selo-container");
    const musica = document.getElementById("musica");

    const scene1 = document.getElementById("scene1");
    const scene2 = document.getElementById("scene2");

    /* ============================= */
    /* ABERTURA DO CONVITE (SELO) */
    /* ============================= */
    if (selo) {
        selo.addEventListener("click", function () {

            console.log("CLICK NO SELO");

            /* ANIMA FOLHA */
            if (folha) {
                folha.style.transform = "translateX(-110%)";
                folha.style.transition = "transform 1s ease";
            }

            /* SOME SELO */
            selo.style.opacity = "0";
            selo.style.pointerEvents = "none";

            /* TOCAR MÚSICA */
            if (musica) {
                musica.currentTime = 0;
                musica.muted = false;

                const playPromise = musica.play();

                if (playPromise !== undefined) {
                    playPromise
                        .then(() => console.log("Áudio iniciado"))
                        .catch(err => console.log("Erro ao tocar áudio:", err));
                }
            }

            /* TROCA PARA SCENE 2 */
            setTimeout(() => {
                trocarCena("scene2");
            }, 800);

        });
    }

    /* ============================= */
    /* NAVEGAÇÃO ENTRE SCENES */
    /* ============================= */
    document.addEventListener("click", function (e) {

        const nextBtn = e.target.closest(".nav.next");
        const prevBtn = e.target.closest(".nav.prev");

        if (nextBtn) {
            const nextId = nextBtn.getAttribute("data-next");
            trocarCena(nextId);
        }

        if (prevBtn) {
            const prevId = prevBtn.getAttribute("data-prev");
            trocarCena(prevId);
        }

    });

});


/* ============================= */
/* FUNÇÃO TROCAR CENA */
/* ============================= */
function trocarCena(idDestino) {

    const atual = document.querySelector(".scene.active");
    const destino = document.getElementById(idDestino);

    if (!destino || !atual) return;

    atual.classList.remove("active");

    setTimeout(() => {
        destino.classList.add("active");
    }, 300);
}


/* ============================= */
/* CONFIRMAR PRESENÇA */
/* ============================= */
function confirmarPresenca() {

    const telefone = "5531998488478";

    const mensagem = encodeURIComponent(
        "Olá! 💛 Confirmo minha presença no casamento 🥂✨"
    );

    const url = `https://wa.me/${telefone}?text=${mensagem}`;

    // Melhor compatibilidade mobile
    window.location.href = url;
}