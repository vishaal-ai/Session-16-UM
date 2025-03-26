let button = document.querySelectorAll("button");

        for (btn of button) {
            btn.addEventListener("click", () => {
                console.log("Button is clicked");
            })
        }

        let display = document.getElementById("display");

        let time = 0;
        let timer = null;

        function startTimer() {
            if (timer === null) {
                timer = setInterval(() => {
                    time++;
                    display.innerText = time + " sec";
                }, 1000);
            }
        }
        let startBtn = document.getElementById("start");
        startBtn.addEventListener("click", startTimer);

        function pauseTimer() {
            clearInterval(timer);
            timer = null;
        }

        let pauseBtn = document.getElementById("pause");
        pauseBtn.addEventListener("click", pauseTimer);

        function resetTimer() {
            clearInterval(timer);
            time = 0;
            display.innerText = "0 sec"
            timer = null;
        }

        let resetBtn = document.getElementById("reset");
        resetBtn.addEventListener("click", resetTimer);