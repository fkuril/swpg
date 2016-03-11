console.log('This would be the main JS file.');
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/pg/sw.js', {
    scope: '/pg/'
  }).then(function(reg) {
    console.log('Yey!', reg);
  }).catch(function(err) {
    console.log('Boo!', err);
  });
}
