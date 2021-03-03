export const millisecToMinSec = (milli: number) => {
  const sec = String(Math.floor(milli / 1000) % 60).padStart(2, '0');
  const min = Math.floor(milli / 60 / 1000);
  return `${min}:${sec}`;
};
