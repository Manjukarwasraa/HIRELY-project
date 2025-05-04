// about.js

document.addEventListener("DOMContentLoaded", () => {
	console.log("Hirely - About page loaded successfully.");
  
	// Example: Smooth scroll to team section if URL contains #team
	if (window.location.hash === "#team") {
	  const teamSection = document.querySelector(".team");
	  if (teamSection) {
		teamSection.scrollIntoView({ behavior: "smooth" });
	  }
	}
  
	// Future enhancements: fetch team or company data dynamically via API
  });
  