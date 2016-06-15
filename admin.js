$(function () {
    var room = getRoom(document.location.search);

    var $what = $('#what');

    firebase.database().ref(room).on('value', function (snapshot) {
        if (snapshot.val() !== null && snapshot.val().gif) {
            $what.val(snapshot.val().gif);
        }
    });

    $('#form-what').submit(function (e) {
        e.preventDefault();
        firebase.database().ref(room).set({
            gif: $what.val(),
        });
    });
});
