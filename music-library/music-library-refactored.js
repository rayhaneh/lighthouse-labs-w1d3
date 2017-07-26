var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }

             },
  printPlayLists: function (){
    playlists = this.playlists;
    for (var key in playlists) {
      playlistInfo = playlists[key]
      printStr = `${playlistInfo.id}: ${playlistInfo.name} - ${playlistInfo.tracks.length} track`
      if (playlists[key].tracks.length > 1) printStr += 's';
      console.log(printStr)
    }
  },
  printTracks: function () {
    tracks = this.tracks;
    for (var key in tracks) {
      trackInfo = tracks[key]
      printStr  = `${trackInfo.id}: ${trackInfo.name} by ${trackInfo.artist}`
      console.log(printStr)
    }
  },
  printPlaylist: function (playlistId) {
    playlistInfo = this.playlists[playlistId]
    printStr = `${playlistInfo.id}: ${playlistInfo.name} - ${playlistInfo.tracks.length} tracks`
    if (playlistInfo.tracks.length > 1) printStr += 's';
    console.log(printStr)
    for (var i = 0; i < playlistInfo.tracks.length; i++) {
      var trackId = playlistInfo.tracks[i]
      printStr = `${trackId}: ${this.tracks[trackId].name} by ${this.tracks[trackId].artist} (${this.tracks[trackId].album})`
      console.log(printStr)
    }
  },
  addTrackToPlaylist: function (trackId, playlistId) {
    this.playlists[playlistId].tracks.push(trackId)
  },
  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  addTrack: function (name, artist, album) {
    id = this.uid()
    this.tracks[id] = {
      id: id,
      name: name,
      artist: artist,
      album: album
    }
  },
  addPlaylist: function (name) {
    id = this.uid()
    this.playlists[id] = {
      id: id,
      name: name,
      track: []
    }
  }

}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

if (process.env.NODE_ENV === "testPrintPlayLists") {
  library.printPlayLists()
}


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

if (process.env.NODE_ENV === "testPrintTracks") {
  library.printTracks()
}

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

if (process.env.NODE_ENV === "testPrintPlayList") {
  library.printPlaylist("p01")
}



// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  library.playlists[playlistId].tracks.push(trackId)
}
if (process.env.NODE_ENV === "testAddTrackToPlayList") {
  library.addTrackToPlaylist("t01","p01")
  console.log(library.playlists["p01"].tracks)
}


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

if (process.env.NODE_ENV === "testAddTrack") {
  library.addTrack("Wake me up","Avicii","True")
  console.log(library.tracks)
}


// // adds a playlist to the library

if (process.env.NODE_ENV === "testAddPlayList") {
  library.addPlaylist("testplaylist")
  console.log(library.playlists)
}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

// var printSearchResults = function(query) {
//   tracks = library.tracks
//   for (var key in tracks) {
//     result = tracks[key].name.search(query)
//     console.log(!!result)
//   }
  // query.tracks
  // console.log (tracks)


// }
// printSearchResults("Code")


