let students = [ 
    {name: "Rimuru", scores: [100, 96, 99, 92]}, 
    {name: "Benimaru", scores: [92, 89, 96, 100, 94]}, 
    {name: "Shuna", scores: [86, 72, 92]}, 
    {name: "Ranga", scores: [98, 84, 89, 100, 100, 76]}, 
    {name: "Veldora", scores: [89, 100]}, 
    {name: "Gobta", scores: [100, 99, 100, 87]} 
]; 
// two loops. the outer loops should loop from one student to another.
// the inner loop will have to loop over a particular student's scored, add them up, and then divide by the number of scores.
for(let i = 0; i < students.length; i++){
    let sum = 0;
    for(let j = 0; j < students[i].scores.length; j++){
        sum += students[i].scores[j];
    }
    let avg = sum / students[i].scores.length; 
    console.log(`${students[i].name}'s average score is ${avg.toFixed(2)}`);
};
