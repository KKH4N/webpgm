onmessage = function (e) {
    let grade;
    let score = parseInt(e.data);
    switch(Math.floor(score/10)) {
        case 10: case 9: grade = "A"; break;
        case 8: grade = "B"; break;
        case 7: grade = "C"; break;
        case 6: grade = "D"; break;
        case 5: case 4: case 3: case 2: case 1: case 0: grade = "F"; break; 
    }
    postMessage(grade);
}