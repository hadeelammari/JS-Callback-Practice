function newImage(url) {
   let image = document.createElement("img");
   image.src = url;
   image.style.position = 'fixed'
   document.body.append(image);
   return image;
}
