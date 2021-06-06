$(document).ready(function () {
    $("#calc").click(function () {
        var x = $("#x").val();
        var y = $("#y").val();
        $.ajax({
            type: "GET",
            data: { "x": x, "y": y },
            dataType: "json",
            url: "/api/math",
            success: function (json) {
                $("#sum").html(json.sum);
                $("#difference").html(json.difference);
                $("#product").html(json.product);
                $("#quotient").html(json.quotient);
            }
        });
    });
});