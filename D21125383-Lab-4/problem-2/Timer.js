const timerContainer = document.getElementById("timer");
    const inputHours = document.getElementById("inputHours");
    const inputMinutes = document.getElementById("inputMinutes");
    const inputSeconds = document.getElementById("inputSeconds");
    const startButton = document.getElementById("startButton");
    const tmbox = document.getElementById("tmbox");

    function formatTime(time) {
      return time < 10 ? `0${time}` : time;
    }

    function updateTimerDisplay(hours, minutes, seconds) {

      tmbox.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
          if(hours==0){
            tmbox.textContent=`${formatTime(minutes)}:${formatTime(seconds)}`;
          }
          if(hours==0&&minutes==0){
            tmbox.textContent=`${formatTime(seconds)}`;
          }
    }

    let countdownTime = 0; // Initial countdown time

    // Event listener for the "Start Countdown" button
    startButton.addEventListener("click", () => {
      // Set the initial countdown time based on user input
      countdownTime = (parseInt(inputHours.value) || 0) * 3600 +
                      (parseInt(inputMinutes.value) || 0) * 60 +
                      (parseInt(inputSeconds.value) || 0);

      // Create observable for seconds
      rxjs.interval(1000)
        .pipe(
          rxjs.operators.takeWhile(() => countdownTime >= 0)
        )
        .subscribe(() => {
          const hours = Math.floor(countdownTime / 3600);
          const minutes = Math.floor((countdownTime % 3600) / 60);
          const seconds = countdownTime % 60;

          updateTimerDisplay(hours, minutes, seconds);

          countdownTime -= 1;
        });
    });