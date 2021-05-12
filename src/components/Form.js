import React from "react";

function Form() {
  function Calculate(event) {
    event.preventDefault();
    document.getElementById("form").style.display = "none";
    let gender = document.getElementById("gender").value;
    let age = parseFloat(document.getElementById("age").value);
    if (gender === "Male") {
      let height = parseFloat(document.getElementById("height").value);
      let weight = parseFloat(document.getElementById("weight").value);
      let bmi = (weight / (height / 100) ** 2).toFixed(2);
      let ideal_weight = 50 + 0.91 * (height - 152.4).toFixed(0);
      if (ideal_weight < weight) {
        document.getElementById("toloseorgain").innerHTML =
          "Weight To Gain : " + (ideal_weight - weight).toFixed(2) + " KG";
      }
      if (weight > ideal_weight) {
        document.getElementById("toloseorgain").innerHTML =
          "Weight To Lose : " + (weight - ideal_weight).toFixed(2) + " KG";
      }
      let ideal_calories = 10 * weight + 6.25 * height - 5 * age + 5;
      if (age < 18) {
        if (bmi < 21) {
          let description = "You are healthy";
          document.getElementById("description").innerHTML =
            "Description : " + description;
        }
        if (bmi > 21 && bmi < 25) {
          let description = "You are overweight !";
          document.getElementById("description").innerHTML =
            "Description : " + description;
        }
        if (bmi > 25) {
          let description = "You are obese !";
          document.getElementById("description").innerHTML =
            "Description : " + description;
        }
        let bfp = (1.51 * bmi - 0.7 * (age - 2.2)).toFixed(0);
        document.getElementById("bfp").innerHTML =
          "Body Fat Percentage : " + bfp + " %";
      } else {
        if (bmi < 24) {
          let description = "You are healthy";
          document.getElementById("description").innerHTML =
            "Description : " + description;
        }
        if (bmi > 24 && bmi < 30) {
          let description = "You are overweight !";
          document.getElementById("description").innerHTML =
            "Description : " + description;
        }
        if (bmi > 30) {
          let description = "You are obese !";
          document.getElementById("description").innerHTML =
            "Description : " + description;
        }
        let bfp = (1.2 * bmi + 0.23 * age - 16.2).toFixed(0);
        document.getElementById("bfp").innerHTML =
          "Body Fat Percentage : " + bfp + " %";
      }
      document.getElementById("card").style.display = "block";
      document.getElementById("result").style.display = "block";
      document.getElementById("bmi").innerHTML = "Body Mass Index : " + bmi;
      document.getElementById("ideal_weight").innerHTML =
        "Ideal Weight : " + ideal_weight + " KG";
      document.getElementById("ideal_calories").innerHTML =
        "Ideal Calorie Intake : " + ideal_calories + " Calories";
    }
    if (gender === "Female") {
      let height = parseFloat(document.getElementById("height").value);
      let weight = parseFloat(document.getElementById("weight").value);
      let bmi = (weight / (height / 100) ** 2).toFixed(2);
      let ideal_weight = (45.5 + 0.91 * (height - 152.4)).toFixed(0);
      if (ideal_weight < weight) {
        document.getElementById("toloseorgain").innerHTML =
          "Weight To Gain : " + (ideal_weight - weight).toFixed(2) + " KG";
      }
      if (weight > ideal_weight) {
        document.getElementById("toloseorgain").innerHTML =
          "Weight To Lose : " + (weight - ideal_weight).toFixed(2) + " KG";
      }
      let ideal_calories = 10 * weight + 6.25 * height - 5 * age - 161;
      if (age < 18) {
        if (bmi < 21) {
          let description = "You are healthy";
          document.getElementById("description").innerHTML =
            "Description : " + description;
        }
        if (bmi > 21 && bmi < 25) {
          let description = "You are overweight !";
          document.getElementById("description").innerHTML =
            "Description : " + description;
        }
        if (bmi > 25) {
          let description = "You are obese !";
          document.getElementById("description").innerHTML =
            "Description : " + description;
        }
        let bfp = (1.51 * bmi - 0.7 * (age + 1.4)).toFixed(0);
        document.getElementById("bfp").innerHTML =
          "Body Fat Percentage : " + bfp + " %";
      } else {
        if (bmi < 24) {
          let description = "You are healthy";
          document.getElementById("description").innerHTML =
            "Description : " + description;
        }
        if (bmi > 24 && bmi < 30) {
          let description = "You are overweight !";
          document.getElementById("description").innerHTML =
            "Description : " + description;
        }
        if (bmi > 30) {
          let description = "You are obese !";
          document.getElementById("description").innerHTML =
            "Description : " + description;
        }
        let bfp = (1.2 * bmi + 0.23 * age - 5.4).toFixed(0);
        document.getElementById("bfp").innerHTML =
          "Body Fat Percentage : " + bfp + " %";
      }
      document.getElementById("card").style.display = "block";
      document.getElementById("result").style.display = "block";
      document.getElementById("bmi").innerHTML = "Body Mass Index : " + bmi;
      document.getElementById("ideal_weight").innerHTML =
        "Ideal Weight : " + ideal_weight + " KG";
      document.getElementById("ideal_calories").innerHTML =
        "Ideal Calorie Intake : " + ideal_calories + " Calories";
    }
  }
  function Clear(event) {
    event.preventDefault();
    document.getElementById("result").style.display = "none";
    document.getElementById("form").style.display = "block";
    document.getElementById("gender").value = "Male";
    document.getElementById("age").value = "";
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
  }
  function back(event) {
    document.getElementById("result").style.visibility = "none";
    document.getElementById("form").style.visibility = "block";
  }
  return (
    <div className="container my-3">
      <form>
        <div id="form">
          <div className="mb-3">
            <label htmlFor="gender" className="form-label">
              Select Gender :
            </label>
            <br />
            <select class="custom-select" id="gender">
              <option value="Male" selected>Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Enter Age :
            </label>
            <input
              type="text"
              className="form-control"
              id="age"
              aria-describedby="age"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="height" className="form-label">
              Enter Height In Centimeters :
            </label>
            <input
              type="text"
              className="form-control"
              id="height"
              aria-describedby="height"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="weight" className="form-label">
              Enter Weight In Kilograms :
            </label>
            <input type="text" className="form-control" id="weight" required />
          </div>
          <button type="submit" className="btn btn-success" onClick={Calculate}>
            Calculate
          </button>
          <br />
          <br />
          <button type="submit" className="btn btn-danger" onClick={Clear}>
            Clear
          </button>
          <br />
          <br />
        </div>
        <div id="result">
          <h3>Health Results :</h3>
          <br />
          <div className="card " style={{ width: "20rem" }} id="card">
            <div className="card-body">
              <h6 className="card-title" id="bmi">
                {}
              </h6>
              <h6 className="card-title" id="description">
                {}
              </h6>
              <h6 className="card-title" id="ideal_weight">
                {}
              </h6>
              <h6 className="card-title" id="toloseorgain">
                {}
              </h6>
              <h6 className="card-title" id="ideal_calories">
                {}
              </h6>
              <h6 className="card-title" id="bfp">
                {}
              </h6>
            </div>
          </div>
          <br />
          <button className="btn btn-info" onClick={back}>Back To Home</button>
          <br />
          <br />
        </div>
      </form>
    </div>
  );
}

export default Form;
