var config = {
    apiKey: "AIzaSyCWWEJDNHymd6dHzanGx-oBN4rL3KVYFqo",
    authDomain: "gif-controller-107a3.firebaseapp.com",
    databaseURL: "https://gif-controller-107a3.firebaseio.com",
    storageBucket: "",
};

firebase.initializeApp(config);

var database = firebase.database();

function getQueryParams(qs) {
    qs = qs.split('+').join(' ');

    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    return params;
}

function getRoom(qs)
{
    var query = getQueryParams(qs);
    var re = /[\w+\d+]+/;

    if (!query.room) {
        return 'default'
    }

    if (!re.exec(query.room)) {
        return 'default';
    }

    return query.room;
}
