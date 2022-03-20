document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.querySelector('.beer-button')
    const randomBeer = document.querySelector('.random-beer')
    const descriptionDisplay = document.querySelector('.description')

    function getData(e) {
        e.preventDefault()

        fetch('https://api.punkapi.com/v2/beers/random')
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data)
                const name = data[0].name
                const description = data[0].description
                const { volume } = data[0]
                const volueValue = volume.value
                const volumeUnit = volume.unit
                const beerImage = data[0].image_url
                console.log(beerImage)

                randomBeer.innerHTML = name + ' ' + volueValue + ' ' + volumeUnit
                descriptionDisplay.innerHTML = description
            })
    }

    startBtn.addEventListener('click', getData)
})