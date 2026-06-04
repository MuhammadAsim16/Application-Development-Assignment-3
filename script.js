const checks = document.querySelectorAll(".check");

const progressFill = document.getElementById("progressFill");

const progressCount = document.getElementById("progressCount");

const percentage = document.getElementById("percentage");

const circle = document.querySelector(".circle");

const date = document.getElementById("date");

const themeToggle = document.getElementById("themeToggle");

const doneBtn = document.getElementById("doneBtn");

const messageBox = document.getElementById("messageBox");

/* Date */

date.innerText = new Date().toDateString();

/* Prayer Times */

const prayerTimes = [5,13,16,18,20];

/* Update Progress */

function updateProgress(){

  let completed = 0;

  checks.forEach((check,index)=>{

    const card = check.closest(".prayer-card");

    const status = card.querySelector(".status");

    const currentHour = new Date().getHours();

    if(check.checked){

      completed++;

      card.classList.add("completed");

      status.innerText = "Completed ✅";

    }

    else{

      card.classList.remove("completed");

      if(currentHour > prayerTimes[index]){

        card.classList.add("missed");

        status.innerText = "Missed ❌";

        status.style.color = "#ef4444";

      }

      else{

        card.classList.remove("missed");

        status.innerText = "Pending ⏳";

        status.style.color = "#f59e0b";

      }

    }

  });

  let progress = (completed / 5) * 100;

  progressFill.style.width = `${progress}%`;

  progressCount.innerText = `${completed} / 5`;

  percentage.innerText = `${progress}%`;

  let degree = (progress / 100) * 360;

  circle.style.background = `
  conic-gradient(
    #8b5cf6 ${degree}deg,
    #e5e7eb ${degree}deg
  )
  `;

  if(completed === 5){

    doneBtn.style.display = "block";

  }
  else{

    doneBtn.style.display = "none";

    messageBox.style.display = "none";

  }

}

/* Checkbox */

checks.forEach((check)=>{

  check.addEventListener("change",updateProgress);

});

/* Dark Mode */

themeToggle.addEventListener("click",()=>{

  document.body.classList.toggle("dark-mode");

});

/* Done Button */

doneBtn.addEventListener("click",()=>{

  messageBox.style.display = "block";

});

/* Start */

updateProgress();