$(document).ready(function() {
    $(document).click(function() {
        let playerName = $("#playerName").val().trim();
        
        if (playerName === "") {
            $(".warning").fadeIn();
        } else {
            $(".modal-container").fadeOut();  // Nasconde la modale
            $("#gameContent").fadeIn();      // Mostra il contenuto del gioco
            localStorage.setItem("playerName", playerName);  // Salva il nome
        }
    });

    $("#playerName").on("input", function() {
        $(".warning").fadeOut();  // Nasconde il messaggio di avviso quando si scrive
    });
});