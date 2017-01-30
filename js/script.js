$(document).ready(function () {
    $.getJSON('http://localhost:8080/database',
        function (json) {
            var tr;
            console.log(json);
            for (var i = 0; i < json.length; i++) {
                tr = $('<tr/>');
                tr.append("<th>" + json[i].name + "</th>");
                tr.append("<th>" + json[i].category + "</th>");
                tr.append("<th>" + json[i].amount + "</th>");
                tr.append("<th>" + json[i].location + "</th>");
                tr.append("<th>" + json[i].date + "</th>");
                $('#table').append(tr);
            }
        });

    $('form').submit(function (event) {

        event.preventDefault();
        var data = {
            "name": $('#name').val(),
            "category": $('#category').val(),
            "amount": $('#amount').val(),
            "location": $('#location').val(),
            "date": $('#date').val()
        };

        console.log(data)
        $.ajax({
            url: 'http://localhost:8080/database/new',
            type: 'POST',
            data: data,
            dataType: 'json',
            encode: true,
            success: function (response) {
                console.log(response);
            }

        })
            .done(function (data) {
                    var tr;
                    tr = $('<tr/>');
                    tr.append("<td>" + $('#name').val() + "</td>");
                    tr.append("<td>" + $('#category').val() + "</td>");
                    tr.append("<td>" + $('#amount').val() + "</td>");
                    tr.append("<td>" + $('#location').val() + "</td>");
                    tr.append("<td>" + $('#date').val() + "</td>");
                    $('#table').append(tr);

                    $('#name').val('');
                    $('#category').val('');
                    $('#amount').val('');
                    $('#location').val('');
                    $('#date').val('');
                }
            );

        console.log(data)
    })
});


// function reset() {
//     window.open("http://wt.ops.few.vu.nl/api/89937c46/reset")
// }

