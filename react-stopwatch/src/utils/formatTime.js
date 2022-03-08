
export function formatTime(t){
  return t ? (t < 10 ? `0${t}` : t) : '00';
}