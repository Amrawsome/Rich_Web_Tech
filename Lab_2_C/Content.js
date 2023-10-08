const btnZ= document.querySelector(".change");

//array of images
let catsImages = [
    "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
    "https://e3.365dm.com/21/03/768x432/skynews-cats-missing-microchip_5315182.jpg?20210323142004",
    "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fc3836660-7846-11eb-80c3-8cc375faed89.jpg?crop=5729%2C3222%2C187%2C805&resize=1200",
    "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/07/petting_pet_cat-1296x728-header.jpg?w=1155&h=1528",
	"https://lh3.googleusercontent.com/pw/AL9nZEXYJlrVkYoKIkpx07_3F4HOiTiOheaoaiRAcwrUg3C613-jkzEubJ3k8Z9fDjG5IfVqCzorphZ00vp6mIyB79GtCsoyV69xXe9cqrA0zglgrcvYhH2UP4cDR88WTm1AmuyCxQHAWCB5JzKD7eD94dtNZA=w690-h920-no"
];

//reverse through array of images
//getting random image from the array we created before (we use math.floor and math.random to grab a random index in the array)
const imgs = document.getElementsByTagName("img");
for(let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * catsImages.length)
    imgs[i].src = catsImages[randomImg]
}
//do the same for h1 elements
const headers = document.getElementsByTagName("h1");
for (let i = 0; i < headers.length; i++){
    headers[i].innerText = "Cats are awesome.";
}

//do the same for p elements
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++){
    p[i].innerText = "This website is now about cats.";
}

let font = document.createElement('style');
    font.innerHTML = 'body { font-family: "Comic Sans MS"}';
    

let size = document.createElement('style');
    size.innerHTML = 'body { font-size: 25px}';

document.head.appendChild(font).appendChild(size);


var link = document.getElementsByTagName("a");
for (var i = 0; i < link.length; i++) {
    link[i].href = "https://www.google.com/search?sca_esv=571781278&sxsrf=AM9HkKkLXMxpZ63rJPPp4JR4eP_Upn3cjw:1696806476123&q=cats&tbm=isch&source=lnms&sa=X&ved=2ahUKEwja7IvayOeBAxVJUkEAHTebDm0Q0pQJegQIEhAB&biw=958&bih=913&dpr=1" + link[i].href
}


var li = document.getElementsByTagName("li");
for (var i =0; i < li.length; i++){
    li[i].innerHTML = "Why am I a list"
}

let sent = [
"I love cats",
"I dislike cats",
"I love dogs",
"I dislike dogs",
"WHO wants nachos"

];

window.addEventListener("click", function(e){
    if (e.target.tagName === 'P'){
        for (let i = 0; i < p.length; i++){
            let randomsent = Math.floor(Math.random() * sent.length)
            p[i].innerText = sent[randomsent];
        }
    }
})



    


    



