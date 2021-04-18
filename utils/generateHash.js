const hashExists = require('../validation/hashExists')

async function genHash(){
    let result           = [];
    let characters       = 'abcdefghijklmnopqrstuvwxyz';
    let charactersLength = characters.length;
    for ( let i = 0; i < 6; i++ ) {
        result.push(characters.charAt(Math.floor(Math.random() * 
    charactersLength)));
    }
    let hash = result.join('');

    if(await hashExists(hash)){
        console.log(hash)
        genHash()
    }
    return hash
}

module.exports = genHash

/*
TEST CONDITIONS

hash must be a string
hash must not be more than six characters

*/