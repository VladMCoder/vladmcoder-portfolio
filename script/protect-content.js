(() => {
  document.addEventListener("contextmenu", (evt) => {
    evt.preventDefault();
  });

  const handleVisibilityChange = () => {
    if (document.visibilityState === "hidden") {
      document.body.style.background = "#000";
      document.body.style.overflowY = "hidden";
    }
  };

  document.addEventListener("keyup", handleVisibilityChange);

  const handleKeyUpScreen = (e) => {
    if (e.key === "PrintScreen") {
      document.body.style.visibility = "hidden";
    }
  };

  document.addEventListener("keyup", handleKeyUpScreen);

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  function ctrlShiftKey(e, keyCode) {
    return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
  }

  document.onkeydown = (e) => {
    if (
      e.keyCode === 123 ||
      ctrlShiftKey(e, "I") ||
      ctrlShiftKey(e, "J") ||
      ctrlShiftKey(e, "C") ||
      (e.ctrlKey && e.keyCode === "U".charCodeAt(0))
    )
      return false;
  };

  document.addEventListener("contextmenu", handleContextMenu);
})();
