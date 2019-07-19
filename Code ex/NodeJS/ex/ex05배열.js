var score = [10, 40, 30, 20];

for (let i in score) {
    var out = "";
    out = score[i] + " : ";
    for (let j = 0; j < score[i]; j++) {
        out = out + "*";
    }
    console.log(out);
}