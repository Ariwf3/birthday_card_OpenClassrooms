


$(function() { // début jquery

    // Sélection des éléments à cacher et à disparaître grâce aux id sur l'évènement "click"
    $("#clickme_main").on("click", function() {
        $("#clickme_main").hide("slow");
        $("#btn-perso1").show("slow");
    })
    $("#btn-perso1").on("click", function() {
        $("#btn-perso2").show("slow");
    })
    $("#btn-perso2").on("click", function() {
        $("#btn-perso3").show("slow");
    })
    $("#btn-perso3").on("click", function() {
        $("body").addClass("image"); // ajout d'une classe pour changer l'image de dond
        $("#btn-perso1").fadeOut(1000);
        $("#btn-perso2").fadeOut(1000);
        $("#clickme_2").slideUp("slow");
        /* transformation du h1 final avec la méthode ".css" */
        $("h1").css({
            "background":"#e84393",
            "color":"white"
    }); 
    

}) // fin action click sur le dernier bouton


}) // Fin jquery
