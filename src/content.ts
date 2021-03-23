document.addEventListener("mouseup", () => {
  const selObj = window.getSelection();
  chrome.runtime.sendMessage(selObj?.toString());
});
