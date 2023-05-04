function harmlessRansomNote(noteText, magazineText) {
    const noteArr = noteText.split(' ');
    const magazinArr = magazineText.split(' ');

    const magazineObj = {}; //hastable technic

    magazinArr.forEach((word) => {
        if (!magazineObj[word]) magazineObj[word] = 0;
        magazineObj[word]++;
    });

    let noteIsPossible = true;
    noteArr.forEach((word) => {
        if (magazineObj[word]) {
            magazineObj[word]--;
        } else if (magazineObj[word] < 0) {
            noteIsPossible = false;
        } else noteIsPossible = false;
    })

    console.log(magazineObj, 'magazineobj')
    return noteIsPossible;    
}

console.log(harmlessRansomNote('', 'this is all the magazine text in the magazine'));

console.log(harmlessRansomNote('this is a secret note for you from a secret admirer', 
'puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited'));