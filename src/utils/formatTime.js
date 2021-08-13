export const formatTime = (param) => {
  if (typeof param == 'undefined') {
    return null;
  } else if (isNaN(param)) {
    return null;
  }
  // else if (typeof param !== 'number') {
  //   return null;
  // }
  // powyżej inne rozwiązanie dla opcji nie liczby
  else if (param < 0) {
    return null;
  } else {
    const seconds = Math.floor(param % 60).toString().padStart(2, '0');
    const minutes = Math.floor((param / 60) % 60).toString().padStart(2, '0');
    const hours = Math.floor(param / 3600).toString().padStart(2, '0');
    let formattedTime = `${hours}:${minutes}:${seconds}`;

    return formattedTime;
  }
};
