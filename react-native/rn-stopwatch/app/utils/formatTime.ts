
export function formatTime(t: number){
  return t ? (t < 10 ? `0${t}` : t) : '00';
}