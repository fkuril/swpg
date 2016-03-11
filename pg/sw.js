self.addEventListener('install', function(event) {
  event.waitUntil((new Promise(function(resolve, reject) {
    console.log('SW fetching things');
    resolve();
  })));
});

self.addEventListener('activate', function(event) {
  console.log('SW activated!');
});
