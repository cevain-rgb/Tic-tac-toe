if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log("Service worker enregistré"))
    .catch(err => console.error("Échec : ", err));
}