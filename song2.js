async function fetch(){
    document.querySelector('#genre').textContent = ''

    const URL = 'https://us-central1-reverberant-joy-289322.cloudfunctions.net/function-1'

    let artist = document.querySelector('#artist').value;
    let track = document.querySelector('#track').value;

    let response = await axios.post( URL, {
    "artist": artist,
    "track": track
})

    document.querySelector('#genre').textContent = response.data
    return response.data
}

function mock(){
    document.querySelector('#genre').textContent = 'pop'
}
  
