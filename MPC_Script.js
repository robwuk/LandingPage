function alertAge(age, thresh) {
    var isAdult = (age < thresh) ? "too young": "old enough";

    alert("you are " + isAdult + " (" + age + "). Theshold is " + thresh +".");
}

alertAge(19,18);
alertAge(16,20);
