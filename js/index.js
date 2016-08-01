(function() {
  var $tryNowButton = $('.js-try-now-button');
  var $downloadFromAppStore = $('.js-download-from-app-store');
  var $getTheApp = $('.js-get-the-app');


  $tryNowButton.on('click', {category:'download', action:'download-started', label:'hero-section' },downloadMockulus);

  $getTheApp.on('click', {category:'download', action:'download-started', label:'header-link' },downloadMockulus);

  $downloadFromAppStore.on('click', {category:'download', action:'download-from-app-store-clicked', label:'hero-section' },downloadMockulusFromAppStore);

  function downloadMockulus(e) {
    category = e.data.category
    action = e.data.action
    label = e.data.label
    ga('send', 'event', category, action, label);
    window.location.href = 'http://bit.ly/2aqZ6ci';
  };

  function downloadMockulusFromAppStore(e) {
    category = e.data.category
    action = e.data.action
    label = e.data.label
    ga('send', 'event', category, action, label);
    window.location.href = 'http://apple.co/2aCDU4l';
  };
})();
