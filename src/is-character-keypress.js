export const isCharacterKeyPress = (ev) => {
  if (typeof ev.which == 'undefined') {
    return true;
  } else if (typeof ev.which == 'number' && ev.which > 0) {
    return !ev.ctrlKey && !ev.metaKey && !ev.altKey && ev.which != 8;
  }
  return false;
}
