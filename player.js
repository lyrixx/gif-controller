$(function () {
    $player = $('#player');
    firebase.database().ref('options').on('value', function(snapshot) {
        $player.attr('src', 'http://tv.giphy.com/'+snapshot.val().gif)
    });
});
