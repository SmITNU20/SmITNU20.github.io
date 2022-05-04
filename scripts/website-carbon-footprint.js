let uri = encodeURI(
    'https%3A%2F%2Fwww.wholegraindigital.com%2F'
)
console.log(`https://api.websitecarbon.com/site?url=${uri}`)
fetch(`https://api.websitecarbon.com/site?url=${uri}`, {
    mode: 'cors'
})
    .then(data => data.json())
        .then(res => console.log(res))
            .catch(error => console.log(error))