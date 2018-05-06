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

        $("#bestätigen").after("<p>Der neue Vektor ist</p>"+
                                eins + "<br>"+ zwei+"<br>"+drei );
    });

});