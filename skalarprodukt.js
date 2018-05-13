$(function(){

    $("#bestätigen").click(function(){
        var einsEins = $("#einsEins").val();
        var einsZwei = $("#einsZwei").val();
        var einsDrei = $("#einsDrei").val();
        var zweiEins = $("#zweiEins").val();
        var zweiZwei = $("#zweiZwei").val();
        var zweiDrei = $("#zweiDrei").val();
        
        var ergebnis = einsEins*zweiEins+einsZwei*zweiZwei+einsDrei*zweiDrei;
        $("#ergebnis").text("Das Skalarptodukt ist "+ergebnis);
    });

});