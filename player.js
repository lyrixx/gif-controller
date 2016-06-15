$(function () {
    var room = getRoom(document.location.search);

    var $player = $('#player');

    firebase.database().ref(room).on('value', function(snapshot) {
        var gif = 'cat';
        if (snapshot.val() !== null && snapshot.val().gif) {
            gif = snapshot.val().gif;
        }
        $player.attr('src', 'http://tv.giphy.com/'+gif)
    });
});
