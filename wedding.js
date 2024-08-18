var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("hari").innerHTML = days + "hari";
  document.getElementById("jam").innerHTML = hours + "jam";
  document.getElementById("menit").innerHTML = minutes + "menit";
  document.getElementById("detik").innerHTML = seconds + "detik";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Selesai";
  }
}, 1000);