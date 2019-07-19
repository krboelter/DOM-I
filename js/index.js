const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo


//*****selectors*****
let logo = document.getElementById("logo-img");
let navBar = document.querySelectorAll("a");
let logoImg = document.getElementById("cta-img");
let topHeader = document.querySelector(".cta-text h1");
let topButton = document.querySelector(".cta-text button");
let mainContentHeader = document.querySelectorAll(".text-content h4");
let mainContentParagraph = document.querySelectorAll(".text-content p");
let mainContentImage = document.querySelector(".middle-img");
let contactHeader = document.querySelector(".contact h4");
let contactParagraph = document.querySelectorAll(".contact p");
let footer = document.querySelector("footer");


//******code*****
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//setting up the nav bar
for (let i = 0; i < navBar.length; i++) {
  navBar[i].textContent = siteContent["nav"][`nav-item-${i}`];
}

logoImg.setAttribute('src', siteContent["cta"]["img-src"]);

topHeader.innerHTML = siteContent["cta"]["h1"];

topButton.innerHTML = siteContent["cta"]["button"];

//putting keys containing "h4" into an array to use in the for loop
let parentArray = siteContent["main-content"];
let keys = Object.keys(parentArray);
let newKeys = keys.filter(n => n.includes("h4"));


for (let i = 0; i < newKeys.length; i++) {
  mainContentHeader[i].innerHTML = parentArray[newKeys[i]];
}

mainContentImage.src = siteContent["main-content"]["middle-img-src"];

//putting keys containing "content" into an array to use in the for loop
let textKeys = Object.keys(parentArray);
let newTextKeys = keys.filter(n => n.includes("content"));

for (let i = 0; i < newTextKeys.length; i++) {
  mainContentParagraph[i].innerHTML = parentArray[newTextKeys[i]];
}

contactHeader.innerHTML = siteContent["contact"]["contact-h4"];

//putting keys into an array to cycle through them in the for loop
let parentArrayContact = siteContent["contact"];
let contactKeys = Object.keys(parentArrayContact);

for (let i = 0; i <contactKeys.length -1; i++) {
  contactParagraph[i].innerHTML = parentArrayContact[contactKeys[i]];
}

footer.innerHTML = siteContent["footer"]["copyright"];


//*****stretch*****

