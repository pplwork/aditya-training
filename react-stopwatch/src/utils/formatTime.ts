
export const formatTime = (t:Number) => {
  return (t ? (t < 10 ? `0${t}` : t) : '00');
}