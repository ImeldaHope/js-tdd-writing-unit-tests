// Your code here

export function pointsForWord(word){
    let points = 0;
    for (const char of word){
        //adds i flag to check for case-sensitivity
        points += /[aeiou]/i.test(char) ? 1 : 2;
    }

    return points;
}