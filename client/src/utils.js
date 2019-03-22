export default function makeAccessiblePsuedoButton(fn) {
  return {
    onKeyPress: fn,
    role: "button",
    tabIndex: 0
  };
}
