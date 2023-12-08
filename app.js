let validation = () => {
  let days = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;

  let isValid=true;
  let thisYear = new Date();
  thisYear = thisYear.getFullYear();


  /*  functions   */
  let addRequiired = () => {
    document.querySelector(".container .inputs").classList.add("required");
  };
  let addMessage = (index, msg) => {
    let h5 = document.querySelectorAll(".container .inputs h5");
    h5[index].innerHTML = msg;
  };
/*   conditions  */
  if (Number(days) < 1 || Number(days) > 31) {
    addMessage(0, "Must Be a valid date");
    addRequiired();
    isValid=false;
  }

  if (Number(month) < 1 || Number(month) > 12) {
    addMessage(1, "Must Be a valid month");
    addRequiired();
    isValid=false;
  }

  if (Number(year) > thisYear) {
    addMessage(2, "Must Be in the past");

    addRequiired();
    isValid=false;

  }

  if (
    (days == null || days === "") &&
    (month == null || month === "") &&
    (year == null || year === "")
  ) {
    addRequiired();
    isValid=false;


    let h5 = document.querySelectorAll(".container .inputs h5");

    for (let i = 0; i < h5.length; i++) {
      h5[i].innerHTML = "This field is required";
    }
  }


  /* check if valid */

  if(isValid){
    calculateAge(year,month,days);
  }
};
let calculateAge = (year, month, days) => {
  let userDOB = new Date(`${year}-${month}-${days}`);
  let currentTime = new Date();
  
  let ageInMilliseconds = currentTime - userDOB;

  let ageDate = new Date(ageInMilliseconds);

  let years = ageDate.getUTCFullYear() - 1970;
  let months = ageDate.getUTCMonth();
  let outdays = ageDate.getUTCDate() - 1;

  document.getElementById("year-output").textContent = years+" ";
  document.getElementById("months-output").textContent = months+" ";
  document.getElementById("days-output").textContent = outdays+" ";
};



// let calculateAge = (year, month, days) => {
//   let userDOB = new Date(`${year}-${month}-${days}`);
//   let currentTime = new Date();
//   let timeDifference = currentTime - userDOB;
  
//   let daysInMilliSeconds = 86400000;
//   let daysDifference = Math.floor(timeDifference / daysInMilliSeconds);

//   let years = Math.floor(daysDifference / 365);
//   let remainingDays = daysDifference % 365;

//   let months = Math.floor(remainingDays / 30);
//   let remainingDaysFromMonth = remainingDays % 30;

//   document.getElementById("year-output").innerHTML = years;
//   document.getElementById("months-output").innerHTML = months;
//   document.getElementById("days-output").innerHTML = remainingDaysFromMonth;
// };

