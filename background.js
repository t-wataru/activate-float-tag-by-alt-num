let debug = false;
debugLog = debug ? console.log.bind(null, "DEBUG: ") : ()=>{};

browser.commands.onCommand.addListener(async (command)=>{
  debugLog(command);
  const commands = ["_select_1st_tab", "_select_2nd_tab", "_select_3rd_tab", "_select_4th_tab", "_select_5th_tab", "_select_6th_tab", "_select_7th_tab", "_select_8th_tab", "_select_9th_tab", "_select_10th_tab"];
  const tabIndex = commands.indexOf(command);
  debugLog(tabIndex);
  
  pinnedTabs = await browser.tabs.query(
    {pinned: true}
  );
  targetTabs = await browser.tabs.query(
    {index: tabIndex+pinnedTabs.length}
  );

  browser.tabs.update(targetTabs[0].id, {
    active: true
  });
});
