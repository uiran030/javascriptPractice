const clock = document.querySelector('.time');
const date = document.querySelector('.date');
//-------------------------------------
function setting () {
  const dateInfo = new Date();
  //-------------------------------------
  const hour = dateInfo.getHours();
  const minute = dateInfo.getMinutes();
  const second = dateInfo.getSeconds();
  //-------------------------------------
  const year = dateInfo.getFullYear();
  const month = dateInfo.getMonth()+1;
  const todayDate = dateInfo.getDate();
  //-------------------------------------
  clock.innerHTML = `${convertTime(hour)} : ${convertTime(minute)} : ${convertTime(second)}`
  date.innerHTML = `${year}년 ${month}월 ${todayDate}일`
}
//-------------------------------------
const convertTime = (time) => {
  return time < 10 ? `0${time}` : time;
}
//-------------------------------------

setting();
setInterval(setting, 1000);