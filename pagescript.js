let debug = true;
debugLog = debug ? console.log.bind(null, "DEBUG: ") : ()=>{};

let closingTab = false;
window.addEventListener('keydown', event => {
  debugLog(event);
  num = Number(event.key)
  debugLog(num)
  debugLog(event.altKey && num)
  if(event.altKey && num){
    debugLog("sendMessage")
    browser.runtime.sendMessage({activateFloatTabIndex: num});
  }
});