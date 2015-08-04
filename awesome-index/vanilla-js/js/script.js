var people = [
{
name: 'Trinity',
occupation: 'programmer',
awesomeIndex: 10
},
{
name: 'Mater',
occupation: 'tow truck'
},
{
name: 'Number 5',
occupation: 'programmer',
awesomeIndex: 7
},
{
name: 'Alice',
occupation: 'programmer',
awesomeIndex: 9
},
{
name: 'Zaphod',
occupation: 'President of the Galaxy',
},
{
name: 'Bob Parr',
occupation: 'programmer',
awesomeIndex: 6
}
]

var displayPeople = document.getElementById("people");
var displayAverageAwesomeIndex = document.getElementById("awesome-index");
var awesomeIndexTotal = 0;
var awesomePeople = 0;

for (var i = 0; i < people.length; i++) {
  var person = people[i];
  displayPeople.insertAdjacentHTML("beforeend","<p id='" + i + "'><b>Name : </b>" + person.name + "<br/><b>Occupation : </b>" + person.occupation + "</p>");
  if (person.awesomeIndex) {
    awesomePeople++;
    awesomeIndexTotal += person.awesomeIndex;
    document.getElementById(i).innerHTML += "<br/><b>Awesome Index : </b>" + person.awesomeIndex;
  }
}
displayAverageAwesomeIndex.innerHTML = awesomeIndexTotal / awesomePeople;
