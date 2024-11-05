import * as fs from 'fs';

function writeFilterStaff(index: number): string {
    const prefix = 'ItemDisplay[NMAG !RW SK'; // Disables Magic and Runewords
    // const prefix = 'ItemDisplay[!RW SK'; // Problem with Magic and RWs not making new line away from affix
    let output = '';
    output += prefix + index + '=1]:%NAME%%WHITE%i%CONTINUE%\n';
    output += prefix + index + '=2]:%NAME%%YELLOW%i%CONTINUE%\n';
    output += prefix + index + '=3]:%NAME%%ORANGE%i%CONTINUE%\n';
    output += '\n';
    return output;
}

function writeFilterClass(index: number): string {
    // Implement the function if needed.
    return '';
}

// Open a writable stream to the file
const filePath = 'output.filter';
const stream = fs.createWriteStream(filePath, { flags: 'w' });

// Write data using the modified functions
for (let i = 5; i <= 280; i++) {
    stream.write(writeFilterStaff(i));
}

stream.write(writeFilterStaff(364));

for (let i = 366; i <= 371; i++) {
    stream.write(writeFilterStaff(i));
}

stream.write(writeFilterStaff(374));
stream.write(writeFilterStaff(376));
stream.write(writeFilterStaff(378));
stream.write(writeFilterStaff(381));
stream.write(writeFilterStaff(383));

// Close the stream when done
stream.end(() => {
    console.log(`Output written to ${filePath}`);
});
