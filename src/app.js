//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
 function createManager(managerName,managerAge,currentTeam,trophiesWon)
{
return[managerName,managerAge,currentTeam,trophiesWon];
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formations){
  return{
    defender:formations[0],midfield:formations[1],forward:formations[2]
  };
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in _ year
function filterByDebut(year){
return data.filter(player=>player.debut===year);
}

//Progression 4 - Filter players that play at the position ___
function filterByPosition(position){
  return data.filter(player=>player.position===position);
}

//Progression 5 - Filter players that have won __ award
function filterByAward(awardName){
return data.filter(player=>player.awards.some(award=>award.name===awardName));
}

//Progression 6 - Filter players that won __ award __ times
function filterByAwardxTimes(){
  return data.filter(award=>award.name===awardName.length>=noOfTimes);
}

//Progression 7 - Filter players that won __ award and belong to __ country
function filterByAwardxCountry(awardName,country){
return data.filter(player=>player.country===country && player.awards.some(award=>award.name===awardName));
}

//Progression 8 - Filter players that won atleast __ awards, belong to __ team and are younger than __
 function filterByNoOfAwardsxTeamxAge(noOfAwards,team,age){
  return data.filter(player=>player.team===team && player.age < age && player.awards,length >= noOfAwards);

}

//Progression 9 - Sort players in descending order of their age
function SortByAge(){
  return data.slice().sort((a,b)=>b.age-a.age);
}

//Progression 10 - Sort players beloging to ___ team in descending order of awards won
function filterByTeamxSortByNoOfAwards(team){
  return data.filter(player=>player.team===team).sort((a,b)=>b.awards.length-a.awards.length);
}

//Challenge 1 - Sort players that have won ___ award __ times and belong to ____ country in alphabetical order of their names
function sortByNamexAwardxTimes(awardName,noOfTimes,country){
  return data.filter(player=>player.country===country && player.awards.filter(award=>award.name===awardName)
  .length>=noOfTimes).sort((a,b)=>a.name.localeCompare(b.name));
  
}

//Challenge 2 - Sort players that are older than ___ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function SortByNamexOlderThan(age){
  return data.filter(player=>player.age>age).sort((a,b)=>{
    const awardsA=a.awards.map(award=>award.year).sort((x,y)=>y-x);
    const awardsB=b.awards.map(award=>award.year).sort((x,y)=>y-x);
    return awardsB[0]-awardsA[0];
  });
}