// script.js
document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const newImage = document.createElement('img');
            newImage.src = e.target.result;
            newImage.classList.add('color-option'); // Make sure this class has the needed CSS styles
            
            // Find the add-icon in the DOM
            const addIcon = document.querySelector('.add-icon');
            // Get the parent element of the add-icon
            const parent = addIcon.parentNode;
            // Insert the new image before the add-icon
            parent.insertBefore(newImage, addIcon);
        };
        reader.readAsDataURL(file);
    }
});
