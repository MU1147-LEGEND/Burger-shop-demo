 function scrollCounter(){
  // Function to check if an element is in the viewport
 function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to animate the count
function animateCount(countTextElement) {
  var endValue = parseInt(countTextElement.dataset.endValue);
  var duration = 1.5; // Change the duration as needed

  var startValue = 0;
  var increment = Math.ceil(endValue / (duration * 60));

  var timer = setInterval(function () {
    startValue += increment;
    countTextElement.textContent = startValue.toLocaleString();

    if (startValue >= endValue) {
      clearInterval(timer);
      countTextElement.textContent = endValue.toLocaleString() + "+";
    }
  }, 10);

  // Add the "visible" class to make the count text visible during the animation
  countTextElement.classList.add("visible");
}

// Function to handle the scroll event
function handleScroll() {
  // Find the count text elements
  var countTextElements = document.querySelectorAll(".count-text");

  // Check if the count text elements are in the viewport
  countTextElements.forEach(function (countText) {
    if (
      isInViewport(countText) &&
      !countText.classList.contains("visible")
    ) {
      animateCount(countText);
    }
  });

  // Remove the scroll event listener after animating the counts
  if (
    countTextElements.length > 0 &&
    document.querySelectorAll(".count-text.visible").length ===
      countTextElements.length
  ) {
    window.removeEventListener("scroll", handleScroll);
  }
}
// Add the scroll event listener
window.addEventListener("scroll", handleScroll);
 }
scrollCounter();

 //mobile navigation expand script
function navExpand(){
  const navIcon = document.getElementById("nav");
  const navUl = document.querySelector(".nav-ul");
  if(screen.width > 480){  //for laptop screen
    navIcon.classList.toggle("rd");
  }
  else{ //for mobile screen.
    navUl.classList.add("rd");
    navIcon.addEventListener("click", ()=>{
      navIcon.firstElementChild.classList.toggle("fa-xmark");
      navUl.classList.toggle("rd");
    });
  }
}
navExpand();

// Check if scrolled to the top
function isScrolledToTop() {
  return (document.documentElement.scrollTop || document.body.scrollTop) === 0;
}
// Check if scrolled to the bottom
function isScrolledToBottom() {
  return (document.documentElement.scrollTop + window.innerHeight) >= document.documentElement.scrollHeight;
}

// go to top btn scripts
const gTopElem = document.querySelector(".go-top");
gTopElem.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
});

window.onscroll = function () {
  if (isScrolledToTop()) {
    gTopElem.style.display = "none";
  } else{
      gTopElem.style.display = "block";
  }
};
