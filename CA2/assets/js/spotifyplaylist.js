// jQuery
// Spotify's playlist ID
var playlistID = new Array();
playlistID[0] = "603VFqaQsRVauTGsQ2teaU";
playlistID[1] = "4oiloCiPcjjm2g6j58Zql9";
playlistID[2] = "4bDAp38LEyvD6jS8Bi3dfp";
playlistID[3] = "0ZZeQw8OnhCZJRCfBMyJ9h";
playlistID[4] = "0UIlpT8b2fWBAAoagIxd7Q";
playlistID[5] = "29RPHNrj86gzSwyLBlHgki";
playlistID[6] = "4c3UcbYOJasIrhlIVNSylG";
playlistID[7] = "73Jt1069tNQUkBKDVeGhWZ";
playlistID[8] = "79JdF1xaM0f1WtmboTkvbl";

// On spotify button click
$("#spotify-button").click(function() {
    // generate random number from 0 to length of playlist
    var randIndex = Math.floor(Math.random()*playlistID.length);
    // change src attribute in #spotify-embed 
    $("#spotify-embed").attr('src', `https://open.spotify.com/embed/playlist/${playlistID[randIndex]}`)
});
