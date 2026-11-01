function osszesOszto(szam: number): number[] {
    var osztok: number[] = [];
    for (var i = 1; i <= szam; i++) {
        if (szam % i == 0) {
            osztok.push(i);
        }
    }
    return osztok;
}

function parosDarab(tomb: number[]): number {
    var db: number = 0;
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i] % 2 == 0) {
            db++;
        }
    }
    return db;
}

function fuggvenyhivasPalindrom(fuggveny: () => string): boolean {
    var szoveg: string = fuggveny();
    var szokozNelkul: string = "";
    for (var i = 0; i < szoveg.length; i++) {
        if (szoveg[i] != " ") {
            szokozNelkul += szoveg[i];
        }
    }

    var forditott: string = "";
    for (var j = szokozNelkul.length - 1; j >= 0; j--) {
        forditott += szokozNelkul[j];
    }

    return szokozNelkul == forditott;
}