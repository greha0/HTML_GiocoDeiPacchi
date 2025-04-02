$(document).ready(function() {
 /*    $("input").keypress(function(){
        let playerName = $("#playerName").val().trim();
        
        if (playerName === "") {
            $(".warning").fadeIn();
        } else {
            $(".modal-container").fadeOut();  // Nasconde la modale
            $("#gameContent").fadeIn();      // Mostra il contenuto del gioco
        }
    });

    $("#playerName").on("input", function() {
        $(".warning").fadeOut();  // Nasconde il messaggio di avviso quando si scrive
    });
    */
    function inserisciNome(){
        let playerName = $("#playerName").val().trim();
        
        if (playerName === "") {
            $(".warning").fadeIn();
        } else {
            $(".modal-container").fadeOut();  // Nasconde la modale
            $("#gameContent").fadeIn();      // Mostra il contenuto del gioco
        }

        $("#playerName").on("input", function() {
            $(".warning").fadeOut();  // Nasconde il messaggio di avviso quando si scrive
        });
    }
    $("input").keypress(function(e){
        if(e.keyCode == 13){
            inserisciNome();
        }
    
    });

    $(document).click(function(){
        inserisciNome();
    });
});