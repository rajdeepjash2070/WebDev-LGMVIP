console.log("hello");
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }


}


// function countdislike() {
//   console.log("dislike");
//     let clickcount1=0;
//       if (typeof(Storage) !== "undefined") {
//         if (localStorage.clickcount1) {
//           localStorage.clickcount1 = Number(localStorage.clickcount1)+1;
//         } else {
//           localStorage.clickcount1 = 1;
//         }
//         document.getElementById("dislikeid").innerHTML =localStorage.clickcount1;
//       } else {
//         document.getElementById("dislikeid").innerHTML = "Sorry, your browser does not support web storage...";
//       }
//       document.getElementById("dislikeid").style.height="65px";
//       document.getElementsByClassName("dislike").style.width="65px";
//     }
console.log("dislike");

    
    function countlike(){
    
    }

 function darkmode(){
     var element1=document.body;
    element1.classList.toggle("darkmode");
 }

  
 var images = [
  "albert.jpg",
  "ramanujan.jpg",
  "g2.png",
  "collage 1.jpg",
  "Collage 2.jpg",
  "walpaper.jpg"
];
var number = 0;

// in your machine (local) you put the full name of the picture in the array //
// like bellow //
//d var images = ["a1.jpg", "a2.jpg", "a3.jpg", "a4.jpg", "a5.jpg", "a6.jpg", "a7.jpg", "a8.jpg", "a9.jpg", "a10.jpg"];

function Left() {
  if (number > 0) {
    number--;
  } else {
    number = images.length - 1;
  }
  //document.getElementById("myImage").src = "images/" + images[number];
  document.getElementById("myImage").src = images[number];
  document.getElementById("h1").innerHTML = number + 1;
}

function Right() {
  if (number < images.length - 1) {
    number++;
  } else {
    number = 0;
  }
  // document.getElementById("myImage").src = "images/" + images[number];
  document.getElementById("myImage").src = images[number];
  document.getElementById("h1").innerHTML = number + 1;
}
let add = () => {
 
  let comment = document.querySelector('.comment .comment1'); 
   
  if (name.value !== "" && comment.value != "") { 
   
  let list = document.querySelector('.list'); 
  let time = new Date();
  let h = time.getHours(); 
  let m = time.getMinutes(); 
  let s = time.getSeconds(); 
  let now = h + " : " + m + " : " + s;
  let list_item = document.createElement ("l1"); 
   
  list_item.innerHTML = `
  
  <p background-color:grey;>${comment.value}</p>
  `;
  list.append(list_item); 
  }
   
  if (name.value == "" || comment.value == "") {
  let list = document.querySelector('.list'); 
  let list_item = document.createElement ("l2"); 
  var warn = 'Please enter name & comment!';  
  list_item.innerHTML = `
  <span>
  <p>${warn}</p> 
  </span>
  `;
  list.append(list_item); 
   }
  name.value=comment.value = "";
  }
  $('.owl-carousel').owlCarousel({
    stagePadding: 200,
    loop:true,
    margin:10,
    items:1,
    nav:true,
  responsive:{
        0:{
            items:1,
            stagePadding: 60
        },
        600:{
            items:1,
            stagePadding: 100
        },
        1000:{
            items:1,
            stagePadding: 200
        },
        1200:{
            items:1,
            stagePadding: 250
        },
        1400:{
            items:1,
            stagePadding: 300
        },
        1600:{
            items:1,
            stagePadding: 350
        },
        1800:{
            items:1,
            stagePadding: 400
        }
    }
})

var playerSettings = {
      controls : ['play-large'],
      fullscreen : { enabled: false},
      resetOnEnd : true,
      hideControls  :true,
  clickToPlay:true,
      keyboard : false,
    }

const players = Plyr.setup('.js-player', playerSettings);

 players.forEach(function(instance,index) {
            instance.on('play',function(){
                players.forEach(function(instance1,index1){
                  if(instance != instance1){
                        instance1.pause();
                    }
                });
            });
        });

$('.video-section').on('translated.owl.carousel', function (event) {
  players.forEach(function(instance,index1){
                  instance.pause();
                });
});
  



