function sample(array) {
    const index = Math.floor(Math.random() * array.length)
    return array[index]
}

function generateUrl(length) {
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    const upperCaseLetters = lowerCaseLetters.toUpperCase()
    const numbers = '1234567890'
    const collection = lowerCaseLetters + upperCaseLetters + numbers

    let shortUrl = ''

    for(let i = 0; i < length; i++) {
        shortUrl += sample(collection)
    }
    return shortUrl
}

module.exports = generateUrl