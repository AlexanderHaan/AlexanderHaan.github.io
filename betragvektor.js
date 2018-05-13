$(function(){

    $("#bestätigen").click(function(){
        var einsEins = $("#einsEins").val();
        var einsZwei = $("#einsZwei").val();
        var einsDrei = $("#einsDrei").val();
        
        var betrag = Math.sqrt(Math.pow(einsEins, 2) + Math.pow(einsZwei, 2) + Math.pow(einsDrei, 2));

        $("#ergebnis").text("Der Betrag des Vektors ist "+ betrag+ " LE.");
    });

});