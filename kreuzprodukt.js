$(function(){

    $("#bestätigen").click(function(){
        var einsEins = $("#einsEins").val();
        var einsZwei = $("#einsZwei").val();
        var einsDrei = $("#einsDrei").val();
        var zweiEins = $("#zweiEins").val();
        var zweiZwei = $("#zweiZwei").val();
        var zweiDrei = $("#zweiDrei").val();
        
        var eins = einsZwei * zweiDrei - einsDrei * zweiZwei;
        var zwei = einsDrei * zweiEins - einsEins * zweiDrei;
        var drei = einsEins * zweiZwei - einsZwei * zweiEins;

        $("#ergebnis").html("Das Kreuzprodukt ist  "+ "<br>"+
                                eins + "<br>"+ zwei+"<br>"+drei );
    });

});