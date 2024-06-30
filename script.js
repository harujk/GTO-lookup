document.addEventListener('DOMContentLoaded', function() {
    const finDropdown = document.getElementById('finDropdown');
    const crewDropdown = document.getElementById('crewDropdown');
    const fullscreenImage = document.getElementById('fullscreenImage');
    
    const data = [
        { id: 0, pageNumber: 1 }, { id: 101, pageNumber: 25 }, { id: 102, pageNumber: 25 }, { id: 103, pageNumber: 25 },
        { id: 104, pageNumber: 25 }, { id: 105, pageNumber: 25 }, { id: 106, pageNumber: 25 },
        { id: 107, pageNumber: 25 }, { id: 108, pageNumber: 25 }, { id: 109, pageNumber: 25 },
        { id: 110, pageNumber: 25 }, { id: 111, pageNumber: 25 }, { id: 112, pageNumber: 25 },
        { id: 113, pageNumber: 25 }, { id: 114, pageNumber: 25 }, { id: 115, pageNumber: 25 },
        { id: 116, pageNumber: 25 }, { id: 117, pageNumber: 25 }, { id: 118, pageNumber: 25 },
        { id: 119, pageNumber: 25 }, { id: 120, pageNumber: 25 }, { id: 121, pageNumber: 25 },
        { id: 122, pageNumber: 25 }, { id: 123, pageNumber: 25 }, { id: 124, pageNumber: 25 },
        { id: 125, pageNumber: 25 }, { id: 126, pageNumber: 25 }, { id: 127, pageNumber: 25 },
        { id: 128, pageNumber: 25 }, { id: 129, pageNumber: 25 }, { id: 130, pageNumber: 25 },
        { id: 131, pageNumber: 25 }, { id: 132, pageNumber: 25 }, { id: 133, pageNumber: 25 },
        { id: 225, pageNumber: 15 }, { id: 226, pageNumber: 15 }, { id: 232, pageNumber: 15 },
        { id: 235, pageNumber: 9 }, { id: 236, pageNumber: 9 }, { id: 237, pageNumber: 9 },
        { id: 238, pageNumber: 9 }, { id: 239, pageNumber: 9 }, { id: 240, pageNumber: 9 },
        { id: 241, pageNumber: 9 }, { id: 242, pageNumber: 9 }, { id: 243, pageNumber: 7 },
        { id: 244, pageNumber: 7 }, { id: 245, pageNumber: 7 }, { id: 246, pageNumber: 7 },
        { id: 247, pageNumber: 7 }, { id: 251, pageNumber: 3 }, { id: 252, pageNumber: 3 },
        { id: 255, pageNumber: 3 }, { id: 256, pageNumber: 3 }, { id: 257, pageNumber: 3 },
        { id: 258, pageNumber: 5 }, { id: 259, pageNumber: 3 }, { id: 260, pageNumber: 5 },
        { id: 262, pageNumber: 3 }, { id: 263, pageNumber: 3 }, { id: 272, pageNumber: 3 },
        { id: 273, pageNumber: 3 }, { id: 276, pageNumber: 3 }, { id: 277, pageNumber: 3 },
        { id: 278, pageNumber: 3 }, { id: 279, pageNumber: 3 }, { id: 280, pageNumber: 5 },
        { id: 281, pageNumber: 3 }, { id: 283, pageNumber: 3 }, { id: 284, pageNumber: 3 },
        { id: 286, pageNumber: 3 }, { id: 287, pageNumber: 3 }, { id: 290, pageNumber: 3 },
        { id: 401, pageNumber: 9 }, { id: 402, pageNumber: 9 }, { id: 405, pageNumber: 9 },
        { id: 415, pageNumber: 9 }, { id: 416, pageNumber: 15 }, { id: 417, pageNumber: 11 },
        { id: 420, pageNumber: 11 }, { id: 421, pageNumber: 13 }, { id: 422, pageNumber: 13 },
        { id: 451, pageNumber: 23 }, { id: 452, pageNumber: 23 }, { id: 453, pageNumber: 21 },
        { id: 454, pageNumber: 21 }, { id: 455, pageNumber: 21 }, { id: 456, pageNumber: 21 },
        { id: 457, pageNumber: 23 }, { id: 458, pageNumber: 21 }, { id: 459, pageNumber: 21 },
        { id: 460, pageNumber: 21 }, { id: 462, pageNumber: 21 }, { id: 463, pageNumber: 21 },
        { id: 465, pageNumber: 17 }, { id: 466, pageNumber: 17 }, { id: 467, pageNumber: 17 },
        { id: 468, pageNumber: 19 }, { id: 469, pageNumber: 19 }, { id: 470, pageNumber: 19 },
        { id: 471, pageNumber: 19 }, { id: 472, pageNumber: 19 }, { id: 473, pageNumber: 21 },
        { id: 474, pageNumber: 19 }, { id: 475, pageNumber: 19 },
        { id: 476, pageNumber: 19 }, { id: 477, pageNumber: 19 }, { id: 478, pageNumber: 19 },
        { id: 479, pageNumber: 19 }, { id: 480, pageNumber: 19 }, { id: 481, pageNumber: 19 },
        { id: 482, pageNumber: 19 }, { id: 483, pageNumber: 17 },
        { id: 501, pageNumber: 27 }, { id: 502, pageNumber: 27 }, { id: 503, pageNumber: 27 },
        { id: 504, pageNumber: 27 }, { id: 505, pageNumber: 27 }, { id: 506, pageNumber: 27 },
        { id: 507, pageNumber: 27 }, { id: 508, pageNumber: 27 }, { id: 509, pageNumber: 27 },
        { id: 510, pageNumber: 27 }, { id: 511, pageNumber: 27 }, { id: 512, pageNumber: 27 },
        { id: 513, pageNumber: 27 }, { id: 514, pageNumber: 27 }, { id: 515, pageNumber: 27 },
        { id: 516, pageNumber: 27 }, { id: 517, pageNumber: 27 }, { id: 518, pageNumber: 27 },
        { id: 519, pageNumber: 27 }, { id: 520, pageNumber: 27 }, { id: 521, pageNumber: 27 },
        { id: 522, pageNumber: 27 }, { id: 523, pageNumber: 27 }, { id: 524, pageNumber: 27 },
        { id: 525, pageNumber: 27 }, { id: 526, pageNumber: 27 }, { id: 527, pageNumber: 27 },
        { id: 528, pageNumber: 27 }, { id: 529, pageNumber: 27 }, { id: 530, pageNumber: 27 },
        { id: 531, pageNumber: 27 }, { id: 532, pageNumber: 27 }, { id: 533, pageNumber: 27 },
        { id: 534, pageNumber: 27 }, { id: 535, pageNumber: 27 }, { id: 536, pageNumber: 27 },
        { id: 537, pageNumber: 27 }, { id: 538, pageNumber: 27 }, { id: 539, pageNumber: 27 },
        { id: 540, pageNumber: 27 }
    ];

    // Populate FIN dropdown options
    data.forEach(item => {
        const option = document.createElement('option');
        option.value = item.pageNumber;
        option.textContent = item.id === 0 ? 'Select FIN' : item.id;
        finDropdown.appendChild(option);
    });

    console.log("1"); 
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
        int pageNumber = parseInt(finDropdown.value);
//        const selectedFin = parseInt(finDropdown.value);
//        const selectedData = data.find(item => item.id === selectedFin);
//        if (selectedData) {
//            let pageNumber = selectedData.pageNumber;
    console.log(crewDropdown.value);
            if (crewDropdown.value === '2') {
                pageNumber += 1;
            }
    console.log(pageNumber);
            const imageName = `GTO${pageNumber.toString().padStart(4, '0')}.jpg`;
            console.log(imageName);
            fullscreenImage.src = imageName;
//        }
    }

    finDropdown.addEventListener('change', updateImage);
    crewDropdown.addEventListener('change', updateImage);

    // Initial image load
    updateImage();
});
