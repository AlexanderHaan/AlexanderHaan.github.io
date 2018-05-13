$(function (){

    $("#bestätigen").click(function(){
        var einsEins = $("#einsEins").val();
        var einsZwei = $("#einsZwei").val();
        var einsDrei = $("#einsDrei").val();
        var zweiEins = $("#zweiEins").val();
        var zweiZwei = $("#zweiZwei").val();
        var zweiDrei = $("#zweiDrei").val();
        
        var skalar = einsEins*zweiEins+einsZwei*zweiZwei+einsDrei*zweiDrei;
        var betragEins = Math.sqrt(Math.pow(einsEins, 2) + Math.pow(einsZwei, 2) + Math.pow(einsDrei, 2));
        var betragZwei = Math.sqrt(Math.pow(zweiEins, 2) + Math.pow(zweiZwei, 2) + Math.pow(zweiDrei, 2));
        var betrag = betragEins * betragZwei;
        var ergebnis = Math.acos(skalar/betrag);
        ergebnis = ergebnis / Math.PI * 180;

        $("#ergebnis").html(" Das Skalarprodukt ist "+ skalar+
                                "<p> Der Betrag des ersten Vektors ist "+ betragEins+ ".</p>"+
                                "<p> Der Betrag des zweiten Vektors ist "+ betragZwei+ ".</p>"+
                                "<p> Der Winkel ist "+ ergebnis+ "°.</p>")
    });

});