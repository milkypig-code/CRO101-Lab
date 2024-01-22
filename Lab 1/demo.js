// function myFunc(theoject){
//   theoject.make="Toyota";
//   theoject.model="Wave";
// }
// const mycar ={
//     make: "Honda",
//     model: "Dream",
//     year: "2000",

// }
// console.log(mycar.make);
// myFunc(mycar);
// console.log(mycar.make);
// console.log(mycar.model);
const players = [
    { name: 'Messi', goals: 30 },
    undefined,
    { name: 'Ronaldo', goals: 28 },
    { name: 'Neymar', goals: 22 },
    { goals: 2 },
    { name: 'Mbappé', goals: 25 },
    { name: 'Pele', goals: null },
    ]
    const filterPlayer=players.filter(
        (player) => player&&player.name&&player.goals
    )
    console.log(filterPlayer);
    const playerWithmaxgoal=filterPlayer.reduce((a,b) => b?.goals > a?.goals ? b:a);
    const playernameWithmaxgoal=playerWithmaxgoal.name;
    console.log(playernameWithmaxgoal);
