document.addEventListener('DOMContentLoaded', function () {
    const galleryList = document.getElementById('galleryList');
  
    function getFiles() {
      return fetch('/getFiles')
        .then((response) => response.json())
        .then((data) => data.files);
    }
  
    function createGalleryItem(file) {
      const listItem = document.createElement('li');
      const fileType = file.endsWith('.mp4') ? 'video' : 'image';
  
      if (fileType === 'image') {
        const img = document.createElement('img');
        img.src = '/delete/' + file;
        listItem.appendChild(img);
      } else if (fileType === 'video') {
        const video = document.createElement('video');
        video.src = '/delete/' + file;
        video.controls = true;
        listItem.appendChild(video);
      }
  
      galleryList.appendChild(listItem);
    }
  
    function initGallery() {
      getFiles().then((files) => {
        files.forEach((file) => {
          createGalleryItem(file);
        });
  
        // Auto-play the gallery items
        const galleryItems = galleryList.querySelectorAll('img, video');
        galleryItems.forEach((item, index) => {
          setTimeout(() => {
            item.play();
          }, index * 5000); // Adjust the delay as needed
        });
      });
    }
  
    initGallery();
  });
  