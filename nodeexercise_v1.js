const http = require('q-io/http')
const GitHubDir = 'https://api.github.com/users/jcondina'
const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36'


function connect () {
    try {
        var req = http.read({
            url: GitHubDir,
            method: 'GET',
            headers: {
                'User-Agent': userAgent
            }
        }).then(function (json) {
            var receivedData = (JSON.parse(json))
            if (receivedData.public_repos == 0)
                console.log("No repositories")
            if (receivedData.public_repos == 3)
                console.log("There are three repositories")
            if (receivedData.public_repos == 0)
                console.log("No repositories")
        })
    } catch (e) {
        console.log("I cannot connect to the server")
    }
}

connect()