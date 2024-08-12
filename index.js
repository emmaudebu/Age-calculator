const calculate = () => {
  let valueYear = document.querySelector(".value-year");
  let valuemonth = document.querySelector(".value-month");
  let valueDay = document.querySelector(".value-day");

  let daylabel = document.querySelector(".daylabel");
  let Dayerror = document.querySelector(".error");
  let montherror = document.querySelector(".montherror");
  let yearerror = document.querySelector(".yearerror");
  let monthlabel = document.querySelector(".monthlabel");
  let yearlabel = document.querySelector(".yearlabel");
  let day = document.querySelector(".Day").value;
  let month = document.querySelector(".Month").value;
  let year = document.querySelector(".Year").value;

  const date = new Date();

  if (day === "" && day === NaN) {
    daylabel.style.color = "red";
    Dayerror.textContent = "Day is Empty !";
    Dayerror.style.color = "red";
    setTimeout(() => {
      daylabel.style.color = "black";
      Dayerror.textContent = "";
    }, 3000);
  } else if (month === "" && month === NaN) {
    monthlabel.style.color = "red";
    montherror.textContent = "Month is Empty !";
    montherror.style.color = "red";
    setTimeout(() => {
      monthlabel.style.color = "black";
      montherror.textContent = "";
    }, 3000);
  } else if (year === "" || year.length < 4 || year.length > 4 || year === NaN) {
    yearlabel.style.color = "red";
    yearerror.textContent = "Invalid year!";
    yearerror.style.color = "red";
    setTimeout(() => {
      yearlabel.style.color = "black";
      yearerror.textContent = "";
    }, 3000);
  } else {
    evaluate();
  }

  function evaluate(params) {
    if (
      parseInt(day) > 31 ||
      parseInt(month) === 1 &&
      parseInt(month) === 3 &&
      parseInt(month) === 5 &&
      parseInt(month) === 7 &&
      parseInt(month) === 8 &&
      parseInt(month) === 10 &&
      parseInt(month) === 12
    ) {
      daylabel.style.color = "red";
      Dayerror.textContent = " Must be valid Date";
      Dayerror.style.color = "red";

      setTimeout(() => {
        daylabel.style.color = "black";
        Dayerror.textContent = "";
      }, 3000);
    } else if (
      (parseInt(day) > 30 && parseInt(month) === 4) &&
      parseInt(month) === 6 &&
      parseInt(month) === 9 &&
      parseInt(month) === 11
    ) {
      daylabel.style.color = "red";
      Dayerror.textContent = " Must be valid Date";
      Dayerror.style.color = "red";

      setTimeout(() => {
        daylabel.style.color = "black";
        Dayerror.textContent = "";
      }, 3000);
    } else if (parseInt(day) > 29 && parseInt(month) === 2) {
      daylabel.style.color = "red";
      Dayerror.textContent = " Must be valid Date !";
      Dayerror.style.color = "red";
      setTimeout(() => {
        daylabel.style.color = "black";
        Dayerror.textContent = "";
      }, 3000);
    } else {
      let today = day - date.getDay()  ;
      let thisMonth = month - date.getMonth()  ;
      let ThisYear = date.getFullYear() - year;
      valueDay.textContent=today;
      valueYear.textContent=ThisYear
      valuemonth.textContent=thisMonth
    }
  }
};
