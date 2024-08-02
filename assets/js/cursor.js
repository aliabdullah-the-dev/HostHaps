// Custom Cursor - Added by AliAbdullah

document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".cursor");
    let timeOut;
  
    const updateCursorPosition = (x, y) => {
      cursor.style.top = `${y}px`;
      cursor.style.left = `${x}px`;
      cursor.style.display = "block";
    };
  
    const hideCursor = () => {
      cursor.style.display = "none";
    };
  
    const resetHideCursorTimeout = () => {
      clearTimeout(timeOut);
      timeOut = setTimeout(hideCursor, 1000);
    };
  
    document.addEventListener("mousemove", (e) => {
      cursor.style.animation = "colors 5s infinite";
      updateCursorPosition(e.clientX, e.clientY);
      resetHideCursorTimeout();
    });
  
    document.addEventListener("scroll", (e) => {
      cursor.style.animation = "colors 5s infinite";
      updateCursorPosition(e.clientX, e.clientY);
      clearTimeout(timeOut);
      timeOut = setTimeout(hideCursor, 1000);
    });

    document.addEventListener("click", () => {
        cursor.style.animation = "colors-fade 0.1s 1";
    })
  
    document.addEventListener("mouseout", hideCursor);
});