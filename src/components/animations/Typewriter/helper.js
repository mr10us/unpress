export default function setupTypewriter(t, delay = 0) {
  const HTML = t.textContent;
  const height = t.offsetHeight;
  t.innerHTML = "";
  t.style.minHeight = `${height}px`;

  const totalCharacters = HTML.length;
  const baseSpeed = 1000 / totalCharacters;

  let cursorPosition = 0,
      tag = "",
      writingTag = false,
      tagOpen = false,
      tempTypeSpeed = 0;

  function type() {
    const char = HTML[cursorPosition];

    if (writingTag) {
      tag += char;
    }

    if (char === "<") {
      tempTypeSpeed = 0;
      if (tagOpen) {
        tagOpen = false;
        writingTag = true;
      } else {
        tag = "";
        tagOpen = true;
        writingTag = true;
        tag += char;
      }
    }

    if (!writingTag && tagOpen) {
      tag.innerHTML += char;
    }

    if (!writingTag && !tagOpen) {
      tempTypeSpeed = char === " " ? baseSpeed * 0.5 : baseSpeed + Math.random() * 20;
      t.innerHTML += char;
    }

    if (writingTag && char === ">") {
      writingTag = false;
      tempTypeSpeed = baseSpeed + Math.random() * 20;
      if (tagOpen) {
        const newSpan = document.createElement("span");
        t.appendChild(newSpan);
        newSpan.innerHTML = tag;
        tag = newSpan.firstChild;
      }
    }

    cursorPosition += 1;
    if (cursorPosition < HTML.length) {
      setTimeout(type, tempTypeSpeed);
    }
  }

  // Здесь ставим задержку старта, если нужно
  function start() {
    if (delay > 0) {
      setTimeout(type, delay);
    } else {
      type();
    }
  }

  return { start };
}
