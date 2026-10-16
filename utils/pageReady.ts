// Shared "page is ready" signal: PageLoader marks it once every image has
// loaded, and Reveal waits for it so animations don't play behind the loader.
let ready = false;
const listeners = new Set<() => void>();

export function markPageReady() {
  if (ready) return;
  ready = true;
  listeners.forEach((cb) => cb());
  listeners.clear();
}

export function onPageReady(cb: () => void): () => void {
  if (ready) {
    cb();
    return () => {};
  }
  listeners.add(cb);
  return () => listeners.delete(cb);
}
