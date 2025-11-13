

  // Image preview functionality
  function previewImage(event) {
    const preview = document.getElementById('image-preview');
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function() {
      const img = document.createElement('img');
      img.src = reader.result;
      preview.innerHTML = ''; // Clear previous image preview
      preview.appendChild(img);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }