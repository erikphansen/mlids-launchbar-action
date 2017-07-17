var merchants = [
  {name: 'LOCAL'},
  {name: 'Mancini De Paris', mlid: '398', slug: 'mancini-de-paris'},
  {name: 'The Ugly Mug', mlid: '193', slug: 'the-ugly-mug'},
  {name: 'Irish Channel', mlid: '250', slug: 'irish-channel'},
  {name: 'Dante Pizzeria', mlid: '197330', slug: 'dante-pizzeria'},
  {name: 'Euphoria Hair', mlid: '355259', slug: 'euphoria-hair'},
  {name: 'PROD TESTING'},
  {name: 'Mykonos Restaurant', mlid: '1528303', slug: 'mykonos-restaurant'},
  {name: 'New Frontier Restaurant', mlid: '1428000', slug: 'new-frontier-restaurant'},
  {name: 'Sandspike', mlid: '1437524', slug: 'sandspike'},
  {name: 'Vapor Connect', mlid: '1511211', slug: 'vapor-connect'}
]

/**
 * If this action is run with the option key pressed, paste the merchant slug,
 * otherwise paste the merchant's MLID
 */
function pasteMerchantInfo(arg) {
  if (LaunchBar.options.alternateKey) {
    LaunchBar.paste(`${arg.slug}`);
  } else {
    LaunchBar.paste(`${arg.mlid}`);
  }
}

function showHelp() {
  LaunchBar.alert(
    `Select a merchant then:
  - Hit RETURN to paste the merchant's MLID in the current frontmost app
  - Hit OPTION-RETURN to paste the merchant's slug instead`
  )
}

/**
 * Build the array of objects that'll be displayed as options by LaunchBar
 */
var actionItems = merchants.map((merchant) => {
  var obj = {
    title: merchant.name,
    icon: 'womply-icon-64.png'
  }
  if (merchant.mlid) {
    obj.subtitle = merchant.slug;
    obj.alwaysShowSubtitle = true;
    obj.badge = merchant.mlid;
    obj.action = 'pasteMerchantInfo';
    obj.actionArgument = merchant;
    obj.actionRunsInBackground = true; // LaunchBar will crash if `LaunchBar.paste()` is not run in the background
  }
  return obj;
})

actionItems.push({
  title: 'Help!',
  action: 'showHelp',
  icon: 'font-awesome:question-circle'
})

/**
 * The main function that'll execute when the action is run.
 * Just gives you a list of merchants to choose from.
 */
function run() {
  return actionItems;
}
