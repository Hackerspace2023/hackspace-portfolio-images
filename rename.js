const fs = require('fs');

function appendTextToFile() {
    const file = '/home/lenovo/All Files/Others/Hackerspace-Media/Hackerspace-portfolio-images/rename.txt';
    const text = 'hackerspace-image-.jpeg\n';

    for (let i = 0; i < 103; i++) {
        fs.appendFileSync(file, `hackerspace-image-${i}.jpeg\n`, (err) => {
            if (err) {
                console.log('Error opening file.');
                return;
            }
        });
    }
}

appendTextToFile();