$(document).ready(function () {
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
];

var awesomeIndexArray = _.pluck(_.filter(people, {'occupation':"programmer"}), 'awesomeIndex');
var awesomeIndexArraySum = _.sum(awesomeIndexArray);
$('#awesome-index').html(awesomeIndexArraySum / awesomeIndexArray.length);

});
