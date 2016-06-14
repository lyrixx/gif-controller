$(function () {
    var $what = $('#what');
    firebase.database().ref('options').on('value', function (snapshot) {
        $what.val(snapshot.val().gif);
    });
    $('#form-what').submit(function (e) {
        e.preventDefault();
        firebase.database().ref('options').set({
            gif: $what.val(),
        });
        $('.thematic').html($what.val());
    });
});
