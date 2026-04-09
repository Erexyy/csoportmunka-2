let kivalasztottAr = 0;
let kivalasztottAuto = "";

// 1. Megnyitjuk az űrlapot és beállítjuk az alap adatokat
function megnyitFoglalas(nev, arSzoveg) {
    kivalasztottAuto = nev;
    // Kiszedjük a számot az árból (pl. "35.000 Ft / nap" -> 35000)
    kivalasztottAr = parseInt(arSzoveg.replace(/\D/g, ''));
    
    document.getElementById('modalAutoNev').innerText = nev;
    document.getElementById('modalAutoAr').innerText = "Napidíj: " + arSzoveg;
    document.getElementById('foglalasModal').style.display = 'block';
    szamolVegosszeg();
}

// 2. Kiszámoljuk a végösszeget dinamikusan
document.getElementById('napokSzama').addEventListener('input', szamolVegosszeg);

function szamolVegosszeg() {
    const napok = document.getElementById('napokSzama').value;
    const osszeg = napok * kivalasztottAr;
    document.getElementById('vegosszeg').innerText = `Végösszeg: ${osszeg.toLocaleString()} Ft`;
}

// 3. A form elküldése (szimuláció)
document.getElementById('foglalasForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nev = document.getElementById('ugyfelNev').value;
    const napok = document.getElementById('napokSzama').value;
    const vegosszeg = napok * kivalasztottAr;

    // Itt egy igazi oldalnál egy API-nak küldenénk el az adatokat
    alert(`Gratulálunk ${nev}!\n\nSikeresen lefoglaltad a következőt: ${kivalasztottAuto}\nIdőtartam: ${napok} nap\nFizetendő: ${vegosszeg.toLocaleString()} Ft\n\nKeresni fogunk a megadott adatokon!`);
    
    document.getElementById('foglalasModal').style.display = 'none';
    this.reset();
});