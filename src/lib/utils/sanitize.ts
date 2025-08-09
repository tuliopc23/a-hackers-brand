// Minimal client-side HTML sanitizer for trusted rendering cases
// Removes script/style, event handler attributes, and javascript: URLs.
export function sanitizeHTML(input: string): string {
  if (typeof window === 'undefined' || typeof document === 'undefined') return '';
  const tpl = document.createElement('template');
  tpl.innerHTML = String(input);

  const walker = (node: Node) => {
    // Remove script and style tags entirely
    if (node.nodeType === Node.ELEMENT_NODE) {
      const el = node as HTMLElement;
      const tag = el.tagName.toLowerCase();
      if (tag === 'script' || tag === 'style') {
        el.remove();
        return;
      }

      // Remove on* event handlers and sanitize href/src
      for (const attr of Array.from(el.attributes)) {
        const name = attr.name.toLowerCase();
        const value = attr.value;
        if (name.startsWith('on')) {
          el.removeAttribute(attr.name);
          continue;
        }
        if ((name === 'href' || name === 'src') && /^\s*javascript:/i.test(value)) {
          el.removeAttribute(attr.name);
          continue;
        }
      }
    }

    // Recurse
    for (const child of Array.from(node.childNodes)) walker(child);
  };

  walker(tpl.content);
  return tpl.innerHTML;
}

