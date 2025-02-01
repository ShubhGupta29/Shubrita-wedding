// document.getElementById("portfolio").innerText = "weds";
// function sendMsg() {
//     console.log("Strat");
//     var cName=document.getElementById("clientName").value;
//     var cEmail=document.getElementById("clientEmail").value;
//     var cMsg=document.getElementById("msg").value;
//     console.log(cName,cEmail,cMsg);
//     var url="mailto:reachshubhgupta@gmail.com/?body="+cMsg;
//     console.log(url)
//     window.URL(url)
// }

$(document).ready(function () {
  $(window).scroll(function () {
    var windowWidth = $(window).width();

    if (windowWidth > 690) {
      if (this.scrollY > 40) {
        document.getElementById("ShubhGupta").style.transition =
          "all 0.5s ease";
        document.getElementById("Namrita").style.display = "none";
        document.getElementById("ShubhGupta").innerText = "SN";
        document.getElementById("ShubhGupta").style.color = "#5e9a8e";
        document.getElementById("ShubhGupta").style.marginLeft = "-4px";
        document.getElementById("portfolio").innerText = "";
        // var logo = document.createElement("img");
        // logo.src="images/SN-Logo.ico"
        // logo.alt="SN-Logo"
        // logo.width="32px"
        // logo.height="32px"
        // logo.style="margin-bottom: -8px;"
        // document.getElementById("ShubhGupta").appendChild(logo);
        // document.getElementById('menu').style.color="#5e9a8e";
        // document.getElementById("navbar").classList.add("sticky");
      } else {
        document.getElementById("ShubhGupta").style.transition =
          "all 0.5s ease";
        document.getElementById("Namrita").style.display = "inherit";
        document.getElementById("ShubhGupta").innerHTML = "Shubh";
        document.getElementById("ShubhGupta").style.color = "#fff";
        document.getElementById("ShubhGupta").style.marginLeft = "0";
        document.getElementById("portfolio").innerText = "weds";
        // document.getElementById('menu').style.color="#fff";S
        // document.getElementById("navbar").classList.add("sticky");
      }
    }
    else {
      if (this.scrollY > 40) {
        document.getElementById("ShubhGupta").style.transition =
          "all 0.5s ease";
        document.getElementById("Namrita").style.display = "none";
        document.getElementById("ShubhGupta").innerText = "SN";
        document.getElementById("ShubhGupta").style.color = "#5e9a8e";
        document.getElementById("ShubhGupta").style.marginLeft = "-4px";
        document.getElementById("portfolio").innerText = "";
        // document.getElementById('menu').style.color="#5e9a8e";
        document.getElementById("navbar").classList.add("sticky");
      } else {
        document.getElementById("ShubhGupta").style.transition =
          "all 0.5s ease";
        document.getElementById("Namrita").style.display = "inherit";
        document.getElementById("ShubhGupta").innerHTML = "Shubh";
        document.getElementById("ShubhGupta").style.color = "#fff";
        document.getElementById("ShubhGupta").style.marginLeft = "0";
        document.getElementById("portfolio").innerText = "weds";
        // document.getElementById('menu').style.color="#fff";S
        document.getElementById("navbar").classList.add("sticky");
      }
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      document.getElementById("scroll-up-btn").classList.add("show");
    } else {
      document.getElementById("scroll-up-btn").classList.remove("show");
    }
  });

  $(document).ready(function () {
    var windowWidth = $(window).width();

    if (windowWidth <= 400) {
      document.getElementById("ShubhGupta").style.transition = "all 0.5s ease";
      document.getElementById("ShubhGupta").innerText = "SN";
      document.getElementById("ShubhGupta").style.color = "#5e9a8e";
      // document.getElementById('ShubhGupta').style.marginLeft="-64px"
      document.getElementById("portfolio").innerText = "";
      // document.getElementById('menu').style.color="#5e9a8e";
      document.getElementById("navbar").addClass("sticky");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  // var typed = new Typed(".typing", {
  //   strings: ["Engineer", "Develope", "Travel", "Game", "Code"],
  //   typeSpeed: 100,
  //   backSpeed: 60,
  //   loop: true,
  // });

  // var typed = new Typed(".typing-2", {
  //   strings: ["Engineer", "Develope", "Travel", "Game", "Code"],
  //   typeSpeed: 100,
  //   backSpeed: 60,
  //   loop: true,
  // });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      800: {
        items: 2,
        nav: false,
      },
      1200: {
        items: 3,
        nav: false,
      },
    },
  });
});
// skills sphere
const Texts = [
  "Shubh",
  "Namrita",
  "Shubh",
  "Namrita",
  "Shubh",
  "Namrita",
  "Shubh",
  "Namrita",
  "Shubh",
  "Namrita",
  "Shubh",
  "Namrita",
  "Shubh",
  "Namrita",
  "Shubh",
  "Namrita",
  "Shubh",
  "Namrita",
  "Shubh",
  "Namrita",
  "Shubh",
  "Namrita",
  "Shubh",
  "Namrita",
];

var tagCloud = TagCloud(".Sphere", Texts, {
  // Sphere radius in px
  radius: 230,

  // animation speed
  // slow, normal, fast
  maxSpeed: "normal",
  initSpeed: "fast",

  // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)]
  direction: 135,

  // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
  keep: true,
});

// Giving color to each text in sphere
var color = "#5e9a8e";
// document.querySelector(".Sphere").style.color = color;

//   cursor

// const cursor = document.querySelector('.cursor');
// document.addEventListener('mousemove', e => {
// 	cursor.setAttribute("style", " top: "+(e.pageY -10)+"px; left: "+(e.pageX -10)+"px; ")
// });

// const cursor2 = document.querySelector('.cursor2');
// document.addEventListener('mousemove', e => {
// 	cursor2.setAttribute("style", " top: "+(e.pageY -10)+"px; left: "+(e.pageX -10)+"px; ")
// });

var noida =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58283.94590941084!2d77.373174454878!3d28.53559112950471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1703702289376!5m2!1sen!2sin";

var kanpur =
  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d223.31006464520348!2d80.3244475!3d26.424734!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c47000d9dccaf%3A0xa788ad048b63ea4a!2sAchal%20Gupta%20Residence!5e0!3m2!1sen!2sin!4v1738043526969!5m2!1sen!2sin";

document.addEventListener("DOMContentLoaded", function () {
  // Get the container element
  var container = document.getElementById("map");

  // Create the iframe element
  var iframe = document.createElement("iframe");

  document.getElementById("location").innerText = "Kanpur, India";
  // Set attributes for the iframe
  iframe.src = kanpur; // Set the source URL
  iframe.width = "550"; // Set the width
  iframe.height = "400"; // Set the height
  iframe.frameborder = "0"; // Set the frameborder
  iframe.loading = "lazy";
  iframe.referrerpolicy = "no-referrer-when-downgrade";

  // Append the iframe to the container
  // container.appendChild(iframe);
});

const elements = document.querySelectorAll(".text-2 span");

elements.forEach((element) => {
  element.addEventListener("mouseout", (e) => {
    if (e.target.classList.contains("hoveredColor")) {
      e.target.classList.remove("hoveredColor");
      e.target.classList.add("unHoveredColor");
    } else {
      e.target.classList.add("hoveredColor");
      e.target.classList.remove("unHoveredColor");
    }
  });
});


const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

//I'm adding this section so I don't have to keep updating this pen every year :-)
//remove this if you don't need it
let today = new Date(),
  dd = String(today.getDate()).padStart(2, "0"),
  mm = String(today.getMonth() + 1).padStart(2, "0"),
  yyyy = today.getFullYear(),
  nextYear = yyyy + 1,
  dayMonth = "02/23/",
  birthday = dayMonth + yyyy;

today = mm + "/" + dd + "/" + yyyy;
if (today > birthday) {
  birthday = dayMonth + nextYear;
}
//end

const countDown = new Date(birthday).getTime(),
  x = setInterval(function () {

    const now = new Date().getTime(),
      distance = countDown - now;

    document.getElementById("days").innerText = Math.floor(distance / (day)),
      document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

    //do something later when date is reached
    if (distance < 0) {
      document.getElementById("headline").innerText = "Marriage Date is here!";
      document.getElementById("countdown").style.display = "none";
      document.getElementById("content").style.display = "block";
      clearInterval(x);
    }
    //seconds
  }, 0);

/////////////////JSONbin.io///////////////
const BIN_ID = "6798ee60ad19ca34f8f5d991";  // Replace with your JSONBin ID
const API_KEY = "$2a$10$qQjvFNzVpqCAsHJWy6yiieNLA2QCVByRJXgbAsR7uo656RYpwiZOO";  // Replace with your API key
const API_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

// Load messages when the page loads
document.addEventListener("DOMContentLoaded", async function () {
  // document.getElementById("formName").onblur = setTimeout(alert("called key"), 60000);
  let storedMessages = localStorage.getItem("messages");

  if (storedMessages) {
    cachedMessages = JSON.parse(storedMessages); // Load from cache
    cachedMessages.forEach(displayMessage);
  } else {
    cachedMessages = await fetchMessages(); // Fetch from API
    localStorage.setItem("messages", JSON.stringify(cachedMessages)); // Store in localStorage
  }
});

// Handle form submission
document.getElementById("messageForm").addEventListener("submit", async function (event) {
  event.preventDefault();

  let name = document.getElementById("formName").value.trim();
  let message = document.getElementById("formMessage").value.trim();

  if (!name || !message) {
    alert("Please fill in both fields.");
    return;
  }

  let newMessage = { name, message };
  cachedMessages.push(newMessage);  // Update in-memory cache
  localStorage.setItem("messages", JSON.stringify(cachedMessages)); // Update local cache

  displayMessage(newMessage);

  // Delayed API update (every 10 seconds)
  debounceSaveMessages();

  document.getElementById("formName").value = "";
  document.getElementById("formMessage").value = "";
});

function removeLocalStorageMessages(key) {

  localStorage.removeItem(key);
}

// Fetch messages from JSONBin (only on first load)
async function fetchMessages() {
  try {
    let response = await fetch(API_URL, {
      headers: { "X-Master-Key": API_KEY }
    });
    let data = await response.json();
    return data.record.messages || {
      "messages": [
        {
          "name": "Kiran Gupta",
          "message": "<3\nGod Bless You"
        },
        {
          "name": "Tester",
          "message": "All the best ❤️"
        }
      ]
    };
  } catch (error) {
    console.error("Error fetching messages:", error);
    return [];
  }
}

// Debounced API update function (limits API calls)
let debounceTimer;
function debounceSaveMessages() {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    saveMessages(cachedMessages);
  }, 10000); // Delay API call for 10 seconds
}

// Save messages to JSONBin (only called after debounce)
async function saveMessages(messages) {
  try {
    await fetch(API_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": API_KEY
      },
      body: JSON.stringify({ messages })
    });
  } catch (error) {
    console.error("Error saving messages:", error);
  }
}

// Display a message on the page
function displayMessage({ name, message }) {
  let messageContainer = document.getElementById("messageDisplay");
  let newMessage = document.createElement("p");
  newMessage.innerHTML = `<strong>${name}:</strong> ${message}`;
  messageContainer.appendChild(newMessage);
}