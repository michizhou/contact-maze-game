const Player = require('../models/players');
const playersToSeed = [
    {username: "michizhou", scores: []},
    {username: "scarletKnight", scores: []}
]

module.exports = () => {
    Player.find({}, (err, players) => { // Look into Player (/models/playerss) and find all objects.
        if (err) {
            console.log(err)
        } else {
            if (players.length === 0) { // Only seed if there's nothing in the table to prevent overwriting.
                Player.collection.save(playersToSeed, (err, players) => {
                    console.log(players)
                })
            }
        }
    })
}