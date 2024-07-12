// making a function make_album
function make_album(artist_name, album_title, tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// calling three times function and 3 variables  with different values.
var album1 = make_album("Javeria", "Album title 1");
var album2 = make_album("Alishba", "Album title 2");
//calling a make album function with 3rd parameters
var album3 = make_album("Sania", "Album title 3", 10);
// print values of our object created my function.
console.log(album1);
console.log(album2);
console.log(album3);
