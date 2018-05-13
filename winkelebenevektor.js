$(function (){

    $("#bestätigen_a").click(function(){
        var einsEins = $("#einsEins").val();
        var einsZwei = $("#einsZwei").val();
        var einsDrei = $("#einsDrei").val();
        var zweiEins = $("#zweiEins").val();
        var zweiZwei = $("#zweiZwei").val();
        var zweiDrei = $("#zweiDrei").val();
        var dreiEins = $("#dreiEins").val();
        var dreiZwei = $("#dreiZwei").val();
        var dreiDrei = $("#dreiDrei").val();

        var nEins = einsZwei * zweiDrei - einsDrei * zweiZwei;
        var nZwei = einsDrei * zweiEins - einsEins * zweiDrei;
        var nDrei = einsEins * zweiZwei - einsZwei * zweiEins;
        
        var skalar = nEins*dreiEins+nZwei*dreiZwei+nDrei*dreiDrei;
        var betragEins = Math.sqrt(Math.pow(nEins, 2) + Math.pow(nZwei, 2) + Math.pow(nDrei, 2));
        var betragZwei = Math.sqrt(Math.pow(dreiEins, 2) + Math.pow(dreiZwei, 2) + Math.pow(dreiDrei, 2));
        var betrag = betragEins * betragZwei;
        var ergebnis = Math.acos(skalar/betrag);
        ergebnis = ergebnis / Math.PI * 180;
        if(ergebnis > 90) ergebnis = ergebnis-90;

        $("#ergebnis").text("Der Winkel zwischen der Ebene und der Gerade ist "+ ergebnis+ "°.");
    });

    $("#bestätigen_b").click(function(){
        
        var nEins = $("#nEins").val();
        var nZwei = $("#nZwei").val();
        var nDrei = $("#nDrei").val();
        var dreiEins = $("#dreiEins_b").val();
        var dreiZwei = $("#dreiZwei_b").val();
        var dreiDrei = $("#dreiDrei_b").val();

        var skalar = nEins*dreiEins+nZwei*dreiZwei+nDrei*dreiDrei;
        var betragEins = Math.sqrt(Math.pow(nEins, 2) + Math.pow(nZwei, 2) + Math.pow(nDrei, 2));
        var betragZwei = Math.sqrt(Math.pow(dreiEins, 2) + Math.pow(dreiZwei, 2) + Math.pow(dreiDrei, 2));
        var betrag = betragEins * betragZwei;
        var ergebnis = Math.acos(skalar/betrag);
        ergebnis = ergebnis / Math.PI * 180;
        if(ergebnis > 90) ergebnis = ergebnis-90;

        $("#ergebnis").text("Der Winkel zwischen der Ebene und der Gerade ist "+ ergebnis+ "°.");
    });

});