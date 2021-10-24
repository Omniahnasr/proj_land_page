
// create nav bar 

function section() {
    var ul = document. getElementById("navbar__list");
    var li = document. createElement("li");
      var anchor = document. createElement("a");
    ul .className ="word";
    anchor. appendChild(document. createTextNode( "    "+""+"section1")
                   );
    li. appendChild(anchor);
    
      anchor. appendChild(document. createTextNode( " "+" "+"section2 ")
                   );
      
    li. appendChild(anchor);
      
      anchor. appendChild(document. createTextNode(" "+" "+"section3")
                   );
      
      
    li. appendChild(anchor);
      
      anchor. appendChild(document. createTextNode(" "+" "+"section4")
                   );
      
    ul. appendChild(anchor);
      
    }
    section();

    var div = document. getElementById("landing__container");
    var h4 = document. createElement("h4");
    var heading = document.createTextNode("Section 4");
   h4.appendChild(heading);
    // ul .className ="word";
    // anchor. appendChild(document. createTextNode( "    "+""+"section1")
    //                );
    // li. appendChild(anchor);
    
    //   anchor. appendChild(document. createTextNode( " "+" "+"section2 ")
    //                );
      
    // li. appendChild(anchor);
      
// var nav = document.getElementById("navbar__menu");
// // Navbar setup
// // nav.setAttribute("class", "navbar navbar-expand-lg navbar-light bg-light");
// // Create UL and container div
// var contDiv = document.createElement("DIV");
// contDiv.setAttribute("class", "collapse navbar-collapse");
// contDiv.setAttribute("id", "navbarSupportedContent");
// nav.appendChild(div);

// var navbar = document.createElement("UL");
// navbar.setAttribute("class", "navbar-nav mr-auto");
// contDiv.appendChild(navbar);

function addItem(name, href) {
    var li = document.createElement("LI");
    navbar.appendChild(li);
    if (name.toUpperCase() == document.title.toUpperCase) {
        li.setAttribute("class", "nav-item active");
    } else {
        li.setAttribute("class", "nav-item");
    }

//     var link = document.createElement("A");
//     link.href = href;
//     link.setAttribute("class", "nav-link")
//     link.innerHTML = name;
//     li.appendChild(link);


// Format is addItem(LINK_TITLE, FILE_NAME)
// addItem("Home", "index.html");
// addItem("Test", "Test");
//  * Manipulating the DOM exercise.
//  * Exercise programmatically builds navigation,
//  * scrolls to anchors from navigation,
//  * and highlights section in viewport upon scrolling.
//  * 
//  * Dependencies: None
//  * 
//  * JS Version: ES2015/ES6
//  * 
//  * JS Standard: ESlint
//  * 
// */

// /**
//  * Comments should be present at the beginning of each procedure and class.
//  * Great to have comments before crucial code sections within the procedure.
// */

// // /**
// // //  * Define Global Variables
// // //  *
// const navigation = document.getElementById("navbar__list");


// const section = document.querySelectorAll("section");

// $('#menu').append($('<ul/>').addClass('nav navbar-nav navbar-right'))



// active nav bar
let test = document.getElementById("navbar__list");
test.addEventListener("mouseover", function( event ) {
  // highlight the mouseenter target
  event.target.style.color = "black";
    setTimeout(function() {
     }, 200);
    }, false)
    ;
// create a new section 
     let paragraph = document.createElement("P");                    
     var text = document.createTextNode("This is a pragraph.");     
     paragraph.appendChild(text);                  
 document.text.appendChild(paragraph);




// // // // build the nav
const navBar = document.getElementById("navbar__menu");
Array.from(document.querySelectorAll("#section")).forEach((section, i) => {
  const link = document.createElement("a");
  link.href = `#${sectionid}`;
  link.appendChild(document.createTextNode(`section ${i + 1}`));
  const li = document.createElement("li");
  li.appendChild(link);
  navBar.appendChild(li);
});
// // const navCreation =() => {


// // 	  let navUl = "" ;

// //       section.forEach(section => {
          
// //       const sectionID =section.id;
// // 	  const sectionDataNav =section.dataset.nav;
// // 	  navUl += `<li><a class= "menu_link" href="#${sectionID}">${sectionDataNav}</a></li>`;
// //     });

// // // // Add class 'active' to section when near top of viewport

// // navigation.innerHTML = navUl;
// // };
// // navCreation();
// // // // // Scroll to anchor ID using scrollTO event


// // /**
// //  * End Main Functions
// //  * Begin Events
// //  * 
// // */

// // // Scroll to section on link click

// // // // Set sections as active


