function Test1()
{
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btEdge).Run("https://www.google.com/");
  Aliases.browser.BrowserWindow.Maximize();
}