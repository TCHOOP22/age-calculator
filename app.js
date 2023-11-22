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
    calculAge(year,month,days);
  }
};



let calculAge =(year,month,days) =>{
    let thisYear = new Date();
    let ty=thisYear.getFullYear();  // current year
    let tm=thisYear.getUTCMonth();  // current month
    tm++;
    let td = thisYear.getUTCDate();   //current day

    let currentDays = (ty*12*365) + (tm*365) + td ; 
    let userDays = (Number(year)*12*365) + (Number(month)*365) + Number(days) ;


    let lastDays = currentDays-userDays ;
    console.log(lastDays);








/*
    let userYear = ty-year ;

    let userMonth = tm-month ;
    let userDay = td-days ;

    if(userMonth<0){userYear-- ; userMonth=12-month}
    if(userDay<0){userMonth-- ; userDay=31+td -days}


    document.getElementById("year-output").innerHTML=userYear;


        document.getElementById("months-output").innerHTML=userMonth;
        document.getElementById("days-output").innerHTML=userDay;
*/






    // let userDay = td-days ;
    // if(userDay<0){  userDay=31-days; month-- }

    // let userMonth = tm -month;

    // console.log(userDay,userMonth);

}
