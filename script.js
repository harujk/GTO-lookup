document.addEventListener('DOMContentLoaded', function() {
    const finDropdown = document.getElementById('finDropdown');
    const crewDropdown = document.getElementById('crewDropdown');
    const imageView = document.getElementById('imageView');

    // Populate FIN dropdown with options
    data.forEach(item => {
        let option = document.createElement('option');
        option.value = item.pageNumber;
        option.textContent = item.id;
        finDropdown.appendChild(option);
    });

    // Event listener for FIN dropdown change
    finDropdown.addEventListener('change', function() {
        let selectedPageNumber = parseInt(this.value);
        if (selectedPageNumber !== 0) {
            crewDropdown.disabled = false;
            crewDropdown.selectedIndex = 0; // Reset crew dropdown to 1
            displayImage(selectedPageNumber);
        } else {
            crewDropdown.disabled = true;
            imageView.src = "GTO0001.jpg"; // Default image
        }
    });

    // Event listener for Crew dropdown change
    crewDropdown.addEventListener('change', function() {
        let basePageNumber = parseInt(finDropdown.value);
        let crewValue = parseInt(this.value);
        let pageNumber = basePageNumber + (crewValue - 1);
        displayImage(pageNumber);
    });

    // Function to display image based on page number
    function displayImage(pageNumber) {
        let imageName = `GTO${pageNumber.toString().padStart(4, '0')}.jpg`;
        imageView.src = imageName;
    }
});
