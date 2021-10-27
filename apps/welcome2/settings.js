(function(back) {
  let settings = require('Storage').readJSON('welcome2.json', 1)
    || require('Storage').readJSON('setting.json', 1) || {}
  E.showMenu({
    '': { 'title': 'Welcome App' },
    'Run next boot': {
      value: !settings.welcomed,
      format: v => v ? 'Yes' : 'No',
      onchange: v => require('Storage').write('welcome2.json', {welcomed: !v}),
    },
    'Run Now': () => load('welcome2.app.js'),
    'Turn off & run next': () => {
      require('Storage').write('welcome2.json', {welcomed: false});
      Bangle.off();
    },
    '< Back': back,
  })
})
