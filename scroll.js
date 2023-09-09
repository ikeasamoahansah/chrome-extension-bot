var scrollButton = document.getElementById('scrollButton');
scrollButton.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: function() {
          window.scrollTo(0, document.body.scrollHeight);
        }
      });
    });
  });