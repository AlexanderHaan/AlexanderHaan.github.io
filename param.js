$(function(){
    
    $("#bestätigen").click(function(){
        var stützEins = $("#stützEins").val();
        var stützZwei = $("#stützZwei").val();
        var stützDrei = $("#stützDrei").val();
        var einsEins = $("#einsEins").val();
        var einsZwei = $("#einsZwei").val();
        var einsDrei = $("#einsDrei").val();
        var zweiEins = $("#zweiEins").val();
        var zweiZwei = $("#zweiZwei").val();
        var zweiDrei = $("#zweiDrei").val();
        
        var eins = einsZwei * zweiDrei - einsDrei * zweiZwei;
        var zwei = einsDrei * zweiEins - einsEins * zweiDrei;
        var drei = einsEins * zweiZwei - einsZwei * zweiEins;

        var konst = eins*stützEins+zwei*stützZwei+drei*stützDrei;
        
        $("#ergebnis").text("Die Koordinatengleichung der Parametergleichung lautet: "+eins+"x + "+zwei+"y + "+ drei+"z = "+konst);
        
        
    });

});