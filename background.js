let debug = true;
log = debug ? console.log.bind(null, "DEBUG: ") : ()=>{};

browser.runtime.onMessage.addListener(async (message, sender) => {
    log("got messsage", message);
    log("sender", sender);
    tabIndex = message.activateFloatTabIndex;
    log(tabIndex);
    if (tabIndex) {
      pinnedTabs = await browser.tabs.query(
        {pinned: true}
      );
      targetTabs = await browser.tabs.query(
        {index: tabIndex+pinnedTabs.length-1}
      );

      browser.tabs.update(targetTabs[0].id, {
        active: true
      });
    }
});
