$(function () {
    var room = getRoom(document.location.search);

    var $player = $('#player');

    firebase.database().ref(room).on('value', function(snapshot) {
        if (snapshot.val() !== null && snapshot.val().gif) {
            $player.attr('src', 'http://tv.giphy.com/'+snapshot.val().gif)
        }
    });
});
