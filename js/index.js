(function() {
  var $tryNowButton = $('.js-try-now-button');
  var $getTheApp = $('.js-get-the-app');


  $tryNowButton.on('click', {category:'download', action:'download-started', label:'hero-section' },downloadMockulus);
  $getTheApp.on('click', {category:'download', action:'download-started', label:'header-link' },downloadMockulus);

  function downloadMockulus(e) {
    category = e.data.category
    action = e.data.action
    label = e.data.label
    ga('send', 'event', category, action, label);
    window.location.href = 'http://bit.ly/1NASfZu';
  };
})();
