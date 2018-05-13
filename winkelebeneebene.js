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
        var vierEins = $("#vierEins").val();
        var vierZwei = $("#vierZwei").val();
        var vierDrei = $("#vierDrei").val();

        var nEins = einsZwei * zweiDrei - einsDrei * zweiZwei;
        var nZwei = einsDrei * zweiEins - einsEins * zweiDrei;
        var nDrei = einsEins * zweiZwei - einsZwei * zweiEins;
        var nEins_b = dreiZwei * vierDrei - dreiDrei * vierZwei;
        var nZwei_b = dreiDrei * vierEins - dreiEins * vierDrei;
        var nDrei_b = dreiEins * vierZwei - dreiZwei * vierEins;
        
        var skalar = nEins*nEins_b+nZwei*nZwei_b+nDrei*nDrei_b;
        var betragEins = Math.sqrt(Math.pow(nEins, 2) + Math.pow(nZwei, 2) + Math.pow(nDrei, 2));
        var betragZwei = Math.sqrt(Math.pow(nEins_b, 2) + Math.pow(nZwei_b, 2) + Math.pow(nDrei_b, 2));
        var betrag = betragEins * betragZwei;
        var ergebnis = Math.acos(skalar/betrag);
        ergebnis = ergebnis / Math.PI * 180;
        if(ergebnis > 90) ergebnis = ergebnis-90;

        $("#ergebnis").text("Der Winkel zwischen der Ebene und der Gerade ist "+ ergebnis+ "°.");
    });

});