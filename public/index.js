$(function() {
    var messagingClient;
    var username = randomUsername();
    console.log('Your random username is: ' + username);

    // Get a token for the current user
    $.getJSON('/token', {
        identity: username,
        device: 'browser'
    }, function(data) {
        messagingClient = new Twilio.IPMessaging.Client(data.token);
        messagingClient.getChannels().then(function(channels) {
            console.log(channels);
        });
    });
});