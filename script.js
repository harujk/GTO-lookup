document.addEventListener('DOMContentLoaded', function() {
    const finDropdown = document.getElementById('finDropdown');
    const crewDropdown = document.getElementById('crewDropdown');
    const fullscreenImage = document.getElementById('fullscreenImage');
    const infoDiv = document.getElementById('info');
    
    const data = [
    { id: 0, pageNumber: 1, lavkit: 1, soap: 1 }, { id: 101, pageNumber: 25, lavkit: 1, soap: 1 },
    { id: 102, pageNumber: 25, lavkit: 1, soap: 1 }, { id: 103, pageNumber: 25, lavkit: 1, soap: 1 },
    { id: 104, pageNumber: 25, lavkit: 1, soap: 1 }, { id: 105, pageNumber: 25, lavkit: 1, soap: 1 },
    { id: 106, pageNumber: 25, lavkit: 1, soap: 1 }, { id: 107, pageNumber: 25, lavkit: 1, soap: 1 },
    { id: 108, pageNumber: 25, lavkit: 1, soap: 1 }, { id: 109, pageNumber: 25, lavkit: 1, soap: 1 },
    { id: 110, pageNumber: 25, lavkit: 1, soap: 1 }, { id: 111, pageNumber: 25, lavkit: 1, soap: 1 },
    { id: 112, pageNumber: 25, lavkit: 1, soap: 1 }, { id: 113, pageNumber: 25, lavkit: 1, soap: 1 },
    { id: 114, pageNumber: 25, lavkit: 1, soap: 1 }, { id: 115, pageNumber: 25, lavkit: 1, soap: 1 },
    { id: 116, pageNumber: 25, lavkit: 1, soap: 1 }, { id: 117, pageNumber: 25, lavkit: 1, soap: 1 },
    { id: 118, pageNumber: 25, lavkit: 1, soap: 1 }, { id: 119, pageNumber: 25, lavkit: 1, soap: 1 },
    { id: 120, pageNumber: 25, lavkit: 1, soap: 1 }, { id: 121, pageNumber: 25, lavkit: 1, soap: 1 },
    { id: 122, pageNumber: 25, lavkit: 1, soap: 1 }, { id: 123, pageNumber: 25, lavkit: 1, soap: 1 },
    { id: 124, pageNumber: 25, lavkit: 1, soap: 1 }, { id: 125, pageNumber: 25, lavkit: 1, soap: 1 },
    { id: 126, pageNumber: 25, lavkit: 1, soap: 1 }, { id: 127, pageNumber: 25, lavkit: 1, soap: 1 },
    { id: 128, pageNumber: 25, lavkit: 1, soap: 1 }, { id: 129, pageNumber: 25, lavkit: 1, soap: 1 },
    { id: 130, pageNumber: 25, lavkit: 1, soap: 1 }, { id: 131, pageNumber: 25, lavkit: 1, soap: 1 },
    { id: 132, pageNumber: 25, lavkit: 1, soap: 1 }, { id: 133, pageNumber: 25, lavkit: 1, soap: 1 },
    { id: 225, pageNumber: 15, lavkit: 0, soap: 1 }, { id: 226, pageNumber: 15, lavkit: 0, soap: 1 },
    { id: 232, pageNumber: 15, lavkit: 0, soap: 1 }, { id: 235, pageNumber: 9, lavkit: 0, soap: 1 },
    { id: 236, pageNumber: 9, lavkit: 0, soap: 1 }, { id: 237, pageNumber: 9, lavkit: 0, soap: 1 },
    { id: 238, pageNumber: 9, lavkit: 0, soap: 1 }, { id: 239, pageNumber: 9, lavkit: 0, soap: 1 },
    { id: 240, pageNumber: 9, lavkit: 0, soap: 1 }, { id: 241, pageNumber: 9, lavkit: 0, soap: 1 },
    { id: 242, pageNumber: 9, lavkit: 0, soap: 1 }, { id: 243, pageNumber: 7, lavkit: 0, soap: 1 },
    { id: 244, pageNumber: 7, lavkit: 0, soap: 1 }, { id: 245, pageNumber: 7, lavkit: 0, soap: 1 },
    { id: 246, pageNumber: 7, lavkit: 0, soap: 1 }, { id: 247, pageNumber: 7, lavkit: 0, soap: 1 },
    { id: 251, pageNumber: 3, lavkit: 0, soap: 1 }, { id: 252, pageNumber: 3, lavkit: 0, soap: 1 },
    { id: 255, pageNumber: 3, lavkit: 0, soap: 1 }, { id: 256, pageNumber: 3, lavkit: 0, soap: 1 },
    { id: 257, pageNumber: 3, lavkit: 0, soap: 1 }, { id: 258, pageNumber: 5, lavkit: 0, soap: 1 },
    { id: 259, pageNumber: 3, lavkit: 0, soap: 1 }, { id: 260, pageNumber: 5, lavkit: 0, soap: 1 },
    { id: 262, pageNumber: 3, lavkit: 0, soap: 1 }, { id: 263, pageNumber: 3, lavkit: 0, soap: 1 },
    { id: 272, pageNumber: 3, lavkit: 0, soap: 1 }, { id: 273, pageNumber: 3, lavkit: 0, soap: 1 },
    { id: 276, pageNumber: 3, lavkit: 0, soap: 1 }, { id: 277, pageNumber: 3, lavkit: 0, soap: 1 },
    { id: 278, pageNumber: 3, lavkit: 0, soap: 1 }, { id: 279, pageNumber: 3, lavkit: 0, soap: 1 },
    { id: 280, pageNumber: 5, lavkit: 0, soap: 1 }, { id: 281, pageNumber: 3, lavkit: 0, soap: 1 },
    { id: 283, pageNumber: 3, lavkit: 0, soap: 1 }, { id: 284, pageNumber: 3, lavkit: 0, soap: 1 },
    { id: 286, pageNumber: 3, lavkit: 0, soap: 1 }, { id: 287, pageNumber: 3, lavkit: 0, soap: 1 },
    { id: 290, pageNumber: 3, lavkit: 0, soap: 1 }, { id: 401, pageNumber: 9, lavkit: 0, soap: 1 },
    { id: 402, pageNumber: 9, lavkit: 0, soap: 1 }, { id: 405, pageNumber: 9, lavkit: 0, soap: 1 },
    { id: 415, pageNumber: 9, lavkit: 0, soap: 1 }, { id: 416, pageNumber: 15, lavkit: 0, soap: 1 },
    { id: 417, pageNumber: 11, lavkit: 0, soap: 1 }, { id: 420, pageNumber: 11, lavkit: 0, soap: 1 },
    { id: 421, pageNumber: 13, lavkit: 0, soap: 1 }, { id: 422, pageNumber: 13, lavkit: 0, soap: 1 },
    { id: 451, pageNumber: 23, lavkit: 0, soap: 1 }, { id: 452, pageNumber: 21, lavkit: 0, soap: 1 },
    { id: 453, pageNumber: 21, lavkit: 0, soap: 1 }, { id: 454, pageNumber: 21, lavkit: 0, soap: 1 },
    { id: 455, pageNumber: 21, lavkit: 0, soap: 1 }, { id: 456, pageNumber: 21, lavkit: 0, soap: 1 },
    { id: 457, pageNumber: 23, lavkit: 0, soap: 1 }, { id: 458, pageNumber: 21, lavkit: 0, soap: 1 },
    { id: 459, pageNumber: 21, lavkit: 0, soap: 1 }, { id: 460, pageNumber: 21, lavkit: 0, soap: 1 },
    { id: 461, pageNumber: 21, lavkit: 0, soap: 1 }, { id: 462, pageNumber: 21, lavkit: 0, soap: 1 },
    { id: 463, pageNumber: 21, lavkit: 0, soap: 1 }, { id: 464, pageNumber: 21, lavkit: 0, soap: 1 },
    { id: 465, pageNumber: 17, lavkit: 0, soap: 1 }, { id: 466, pageNumber: 17, lavkit: 0, soap: 1 },
    { id: 467, pageNumber: 17, lavkit: 0, soap: 1 }, { id: 468, pageNumber: 19, lavkit: 0, soap: 1 },
    { id: 469, pageNumber: 19, lavkit: 0, soap: 1 }, { id: 470, pageNumber: 19, lavkit: 0, soap: 1 },
    { id: 471, pageNumber: 19, lavkit: 0, soap: 1 }, { id: 472, pageNumber: 19, lavkit: 0, soap: 1 },
    { id: 473, pageNumber: 21, lavkit: 0, soap: 1 }, { id: 474, pageNumber: 19, lavkit: 0, soap: 1 },
    { id: 475, pageNumber: 19, lavkit: 0, soap: 1 }, { id: 476, pageNumber: 19, lavkit: 0, soap: 1 },
    { id: 477, pageNumber: 19, lavkit: 0, soap: 1 }, { id: 478, pageNumber: 19, lavkit: 0, soap: 1 },
    { id: 479, pageNumber: 19, lavkit: 0, soap: 1 }, { id: 480, pageNumber: 19, lavkit: 0, soap: 1 },
    { id: 481, pageNumber: 19, lavkit: 0, soap: 1 }, { id: 482, pageNumber: 19, lavkit: 0, soap: 1 },
    { id: 483, pageNumber: 17, lavkit: 0, soap: 1 }, { id: 501, pageNumber: 27, lavkit: 1, soap: 1 },
    { id: 502, pageNumber: 27, lavkit: 1, soap: 1 }, { id: 503, pageNumber: 27, lavkit: 1, soap: 1 },
    { id: 504, pageNumber: 27, lavkit: 1, soap: 1 }, { id: 505, pageNumber: 27, lavkit: 1, soap: 1 },
    { id: 506, pageNumber: 27, lavkit: 1, soap: 1 }, { id: 507, pageNumber: 27, lavkit: 1, soap: 1 },
    { id: 508, pageNumber: 27, lavkit: 1, soap: 1 }, { id: 509, pageNumber: 27, lavkit: 1, soap: 1 },
    { id: 510, pageNumber: 27, lavkit: 1, soap: 1 }, { id: 511, pageNumber: 27, lavkit: 1, soap: 1 },
    { id: 512, pageNumber: 27, lavkit: 1, soap: 1 }, { id: 513, pageNumber: 27, lavkit: 1, soap: 1 },
    { id: 514, pageNumber: 27, lavkit: 1, soap: 1 }, { id: 515, pageNumber: 27, lavkit: 1, soap: 1 },
    { id: 516, pageNumber: 27, lavkit: 1, soap: 1 }, { id: 517, pageNumber: 27, lavkit: 1, soap: 1 },
    { id: 518, pageNumber: 27, lavkit: 1, soap: 1 }, { id: 519, pageNumber: 27, lavkit: 1, soap: 1 },
    { id: 520, pageNumber: 27, lavkit: 1, soap: 1 }, { id: 521, pageNumber: 27, lavkit: 1, soap: 1 },
    { id: 522, pageNumber: 27, lavkit: 1, soap: 1 }, { id: 523, pageNumber: 27, lavkit: 1, soap: 1 },
    { id: 524, pageNumber: 27, lavkit: 1, soap: 1 }, { id: 525, pageNumber: 27, lavkit: 1, soap: 1 },
    { id: 526, pageNumber: 27, lavkit: 1, soap: 1 }, { id: 527, pageNumber: 27, lavkit: 1, soap: 1 },
    { id: 528, pageNumber: 27, lavkit: 1, soap: 1 }, { id: 529, pageNumber: 27, lavkit: 1, soap: 1 },
    { id: 530, pageNumber: 27, lavkit: 1, soap: 1 }, { id: 531, pageNumber: 27, lavkit: 1, soap: 1 },
    { id: 532, pageNumber: 27, lavkit: 1, soap: 1 }, { id: 533, pageNumber: 27, lavkit: 1, soap: 1 },
    { id: 534, pageNumber: 27, lavkit: 1, soap: 1 }, { id: 535, pageNumber: 27, lavkit: 1, soap: 1 },
    { id: 536, pageNumber: 27, lavkit: 1, soap: 1 }, { id: 537, pageNumber: 27, lavkit: 1, soap: 1 },
    { id: 538, pageNumber: 27, lavkit: 1, soap: 1 }, { id: 539, pageNumber: 27, lavkit: 1, soap: 1 },
    { id: 540, pageNumber: 27, lavkit: 1, soap: 1 }
    ];

    // Populate FIN dropdown options
    data.forEach(item => {
        const option = document.createElement('option');
        option.value = item.pageNumber;
        option.textContent = item.id === 0 ? 'Select FIN' : item.id;
        finDropdown.appendChild(option);
    });

    // Populate Crew dropdown options
    const crewOptions = [
        { value: '1', text: '1' },
        { value: '2', text: '2' }
    ];
    
    crewOptions.forEach(option => {
        const crewOption = document.createElement('option');
        crewOption.value = option.value;
        crewOption.textContent = option.text;
        crewDropdown.appendChild(crewOption);
    });

    // Set default value for Crew dropdown
    crewDropdown.value = '1';

    // Update image when FIN or Crew dropdown changes
    function updateImage() {
        let finNumber = parseInt(finDropdown.textContent);
        let pageNumber = parseInt(finDropdown.value);
        if (crewDropdown.value === '2') {
            pageNumber += 1;
        }
        const imageName = `GTO${pageNumber.toString().padStart(4, '0')}.jpg`;
        fullscreenImage.src = imageName;

        // Find corresponding data entry
        const selectedItem = data.find(item => item.id === parseInt(finNumber));

        // Update infoDiv with lavkit and soap info
        if (selectedItem) {
            if (selectItem.id > 0) {
                infoDiv.textContent = `Lav Kit: ${selectedItem.lavkit === 1 ? 'T' : 'S'} Soap: ${selectedItem.soap === 1 ? 'T' : 'S'}`;
            } else {
                infoDiv.textContent = ''; // Clear if no matching item found
            }            
        } else {
            infoDiv.textContent = ''; // Clear if no matching item found
        }
    }

    finDropdown.addEventListener('change', updateImage);
    crewDropdown.addEventListener('change', updateImage);

    // Initial image load
    updateImage();
});
