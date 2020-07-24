// Descrizione:
// Creare uno slider di immagini,
// Lo slider prevederà due frecce (icone) che permettono di scorrere
// tra le immagini dello slider
// Utilizziamo una classe first e last  per capire quali sono la
// prima e ultima immagine dello slider
// Utilizziamo una classe active per aiutarci a capire qual è
// l’immagine attuale da visualizzare nello slider.


$(document).ready(function(){
    // Click su prev per far scorrere le immagini.
    $(".prev").click(function(){
        prevImage();
    });
    // Click su next per far scorrere le immagini.
    $(".next").click(function(){
        nextImage();
    });

    // Click nei vari pallini.
    $(".nav i").click(
        function() {
            // Trovo la posizione del pallino cliccato.
            var posizione = $(this).index();

            // Rimuovere la classe active.
            $(".images img").removeClass("active");
            // Dare la classe active all'elemento con l'indice trovato attraverso il metodo eq().
            $(".images img").eq(posizione).addClass("active");
            // Rimuovere la classe active a tutti i pallini.
            $(".nav i").removeClass("active");
            // Dare la classe al pallino con l'indice trovato attraverso il metodo eq().
            $(".nav i").eq(posizione).addClass("active");
        }
    );

    // *FUNZIONI*

    // Funzione Next.
    function nextImage() {
        //memorizzare in una variabile l'immagine attiva.
        var activeImage = $(".images img.active");
        var cerchio = $(".nav i.active");

        //Eliminare la classe.
        activeImage.removeClass("active");
        cerchio.removeClass("active");

        //Inserire la classe.
        if (activeImage.hasClass("last")) {
            $(".images img.first").addClass("active");
            $(".nav i.first").addClass("active");
        } else {
            activeImage.next().addClass("active");
            cerchio.next().addClass("active");
        }
    };

    // Funzione prev.
    function prevImage() {
        var activeImage = $(".images img.active");
        var cerchio = $(".nav i.active");

        activeImage.removeClass("active");
        cerchio.removeClass("active");

        if (activeImage.hasClass("first")) {
            $(".images img.last").addClass("active");
            $(".nav i.last").addClass("active");
        } else {
            activeImage.prev().addClass("active");
            cerchio.prev().addClass("active");
        }
    };
});
