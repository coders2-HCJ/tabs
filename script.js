function openTab(event, id) {
  var tabContents = document.getElementsByClassName("tab-content");
  for(var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }
  var tabs = document.getElementsByClassName("tab");
  for(var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");
  }
  document.getElementById(id).style.display = "block";
  event.currentTarget.classList.add("active");
}
