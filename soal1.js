const prompt = require('prompt-sync')({sigint: true});

const input = prompt('Masukkan Angka : ');

if(input < 0 )
{
    console.log("Tidak bisa input bilangan negatif");
}
else if (input % 2 !== 0)
{
    console.log("Tidak bisa input bilangan ganjil");
} else {
    console.log(Math.sqrt(input));
}