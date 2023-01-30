let count = 1;

document.getElementById("radio1").checked = true;

setInterval( function(){
  nextImage();
}, 4500);


function nextImage() {
  count++;

  const imgs = document.querySelectorAll('div.slide');

  if (count > imgs.length) {
    count = 1;
  };

  document.getElementById("radio"+count).checked = true;
};
