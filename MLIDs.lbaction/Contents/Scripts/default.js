// LaunchBar Action Script

var pasteit = function pasteit(arg) {
  LaunchBar.paste(`${arg}`);
}

var merchants = [
  {id: '193', name: 'the ugly mug'},
  {id: '250', name: 'irish channel'},
  {id: '398', name: 'mancini de paris'},
  {id: '197330', name: 'dante pizzeria'},
  {id: '355259', name: 'euphoria hair'},
]

var actionItems = merchants.map((merchant) => {
  return {
    title: `${merchant.name} - ${merchant.id}`,
    action: 'pasteit',
    actionArgument: merchant.id,
    actionRunsInBackground: true // LaunchBar will crash if `LaunchBar.paste()` is not run in the background
  }
})

function run(argument) {
  return actionItems;
}
