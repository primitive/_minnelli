// config
const settings = {
    texttop: "New Site",
    textbottom: "Coming Soon",
    icontop: "",
    iconbottom: "",
    company1: "Shaun",
    company2: "Knowles",


    buttoncolor: {
        "white": `background-image: linear-gradient(to right bottom, #dadfe1, #abb7b7 );
            button {
              background-image: linear-gradient(to right bottom, #dadfe1, #abb7b7 );
              &:active {
                background-image: linear-gradient(to right bottom, #abb7b7, #dadfe1);
              }
        }`,
        "green": `background-image: linear-gradient(to right bottom, #dadfe1, rgb(0, 165, 70));
            button {
              background-image: linear-gradient(to right bottom, #dadfe1, rgb(0, 165, 70) );
              &:active {
                background-image: linear-gradient(to right bottom, #dadfe1, rgb(0, 165, 70)) );
              }
        }`,
        "blue": `background-image: linear-gradient(to right bottom, #dadfe1, rgb(15, 82, 186) );
            button {
              background-image: linear-gradient(to right bottom, #dadfe1, rgb(15, 82, 186) );
              &:active {
                background-image: linear-gradient(to right bottom, #dadfe1, rgb(15, 82, 186) );
              }
            }`,
        "red": `background-image: linear-gradient(to right bottom, #dadfe1, rgb(202, 52, 51) );
            button {
              background-image: linear-gradient(to right bottom, #dadfe1, rgb(202, 52, 51) );
              &:active {
                background-image: linear-gradient(to right bottom, #dadfe1, rgb(202, 52, 51) );
              }
            }`,
        "cyan": `background-image: linear-gradient(to right bottom, #dadfe1, rgb(0, 165, 186) );
            button {
              background-image: linear-gradient(to right bottom, #dadfe1, rgb(0, 165, 186) );
              &:active {
                background-image: linear-gradient(to right bottom, #dadfe1, rgb(0, 165, 186) );
              }
            }`,
        "orange": `background-image: linear-gradient(to right bottom, #dadfe1, rgb(240, 94, 35) );
            button {
              background-image: linear-gradient(to right bottom, #dadfe1, rgb(240, 94, 35) );
              &:active {
                background-image: linear-gradient(to right bottom, #dadfe1, rgb(240, 94, 35) );
              }
          }`
      },
    profiles: {
        work: [
          { "id": "prof1", "label": "/sknow.it", "url": "https://sknow.it", "icon": "fas fa-globe", "title": "sknow.it - Digital Consultant" },
          { "id": "prof2", "label": "/primitivedigital.co.uk", "url": "https://primitivedigital.co.uk", "icon": "fas fa-globe", "title": "Primitive Digital - end-to-end design and devlopment services for Startups, Charities and SMEs" },
          { "id": "prof3", "label": "/primitivehosting.uk", "url": "https://primitivehosting.uk", "icon": "fas fa-globe", "title": "Primitive Digital on LinkedIn" },
          { "id": "prof4", "label": "/primitivedigital", "url": "https://www.linkedin.com/company/primitive-web-design", "icon": "fa-linkedin", "title": "Primitive Digital on LinkedIn" },
          { "id": "prof5", "label": "/primitiveshaun", "url": "https://github.com/primitiveshaun", "icon": "fa-github", "title": "Primitive Shaun on Github" },
          { "id": "prof6", "label": "/primitiveshaun", "url": "https://www.behance.net/primitiveshaun/", "icon": "fa-behance", "title": "Primitive Shaun on Behance" },
          { "id": "prof7", "label": "/primitiveshaun", "url": "https://codepen.io/primitiveshaun", "icon": "fa-codepen", "title": "Primitive Shaun on Codepen" },
          { "id": "prof8", "label": "/primitivestuff", "url": "https://twitter.com/primitivestuff", "icon": "fa-twitter", "title": "Primitive Digital on Twitter" },
          { "id": "prof9", "label": "/primitivedigital", "url": "https://www.instagram.com/primitivedigital/", "icon": "fa-instagram", "title": "Primitive Digital on Instagram" },
          { "id": "prof10", "label": "/primitivedigital", "url": "https://www.facebook.com/primitivedigital", "icon": "fa-facebook", "title": "Primitive Digital on Facebook" }
    
    
        ],
        play: [
          { "id": "soci1", "label": "/nice2b.me", "url": "https://nice2b.me/", "icon": "fa-globe", "title": "Nice2B.me - The Living Notebook" },
          { "id": "soci2", "label": "/shaunknowles", "url": "https://www.linkedin.com/in/shaunknowles/", "icon": "fa-linkedin", "title": "Shaun Knowles on LinkedIn" },
          { "id": "soci3", "label": "/shaunknows", "url": "https://twitter.com/shaunknows", "icon": "fa-twitter", "title": "Shaun Knows on Twitter" },
          { "id": "soci4", "label": "/nice2b.me", "url": "https://www.instagram.com/nice2b.me/", "icon": "fa-instagram", "title": "Nice2B.me on Instagram" }
        ]
    
      }
}


// apple red - #E1623F" - rgba(225,98,63,.7)

// mustard -  #ffdb58 / rgb(255,219,88,.7)
// lime - #00FF00
// teal - #008080 / rgba(0,128,128,.7)
// mango - #ffc324 / rgba(255, 195, 36, .7)
// watermelon - #fc6c85 / rgba(252,108,133, .7)
// salmom - #ff8c69 / 	rgba(255,140,105, .7)
// tomato - #ff6347 / 	rgba(255,99,71, .7)

export default settings;