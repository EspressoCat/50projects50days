const sounds = ['acoustic', 'funky', 'blues', 'house']
const playBtns = document.querySelectorAll('.circle__btn')
const circles = document.querySelectorAll('.circle')
let lastClickedIndex = -1

playBtns.forEach(function (playBtn, index) {
    playBtn.addEventListener('click', function (e) {
        e.preventDefault()
        stopSongs()
        if (lastClickedIndex === index) {
            playBtn.classList.remove('shadow')
            circles[index].classList.add('paused')
            lastClickedIndex = -1
        } else {
            playBtns.forEach(btn => btn.classList.remove('shadow'))
            circles.forEach(circle => circle.classList.add('paused'))

            playBtn.classList.toggle('shadow')
            circles[index].classList.toggle('paused')

            lastClickedIndex = index

            const sound = sounds[index]
            stopSongs()
            document.getElementById(sound).play()
        }
    })
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0
    })
}
