'use strict';

function letovRandom() {
    let letov; 

    letov = fs.readFileSync('../output.json', 'utf-8', function (err, fileContents) {
      if (err) throw err;
      return JSON.parse(fileContents);
    });
    console.log(letov)
    const len = letov.length;
    const song = Math.floor(Math.random() * len);
    const string = Math.floor(Math.random() * letov[song].lyrics.length);
    return letov[song].lyrics[string];
};
function test () {
    let variable = '';

    for (var i = 100000 - 1; i >= 0; i--) {
        console.log()
        variable += letovRandom() + '\n';
    };

    fs.writeFile('../test.txt', variable, function(err){
        console.log('File successfully written! - Check your project directory for the output.json file');
    })
}
module.exports = {letovRandom, test};