document.addEventListener('DOMContentLoaded', function(){ 

    const sections = document.querySelectorAll("section");
    const menu_highlighters = document.querySelectorAll(".HeaderHighlighter");
    const menu_links = document.querySelectorAll(".scroll");

    const makeActive = (function (link)
    {
      console.log(menu_links[link].parentElement.clientWidth);
      menu_highlighters[0].style.width = "" + menu_links[link].parentElement.clientWidth + "px";
      menu_highlighters[0].style.height = "1.68vw";
      menu_highlighters[0].style.left = link == 0 ? "40.1%" : menu_highlighters[link].style.left;
    });


    //const removeActive = (link) => menu_highlighters[link].style.opacity = "0";
    //const removeAllActive = () => [...Array(sections.length).keys()].forEach((link) => removeActive(link));
    
    const sectionMargin = 200;
    
    
    let currentActive = 0;
  
    window.addEventListener("scroll", () => {   
      const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - sectionMargin ) - 1
     
      if (current !== currentActive && current != 5) {
        currentActive = current;
        makeActive(current);
      }
    });
  }, false);