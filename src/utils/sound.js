export function playSound(name) {
  const audio = new Audio(`/${name}.wav`);
  audio.play().catch(err => {
    console.warn("Erreur lecture audio :", err);
  });
}