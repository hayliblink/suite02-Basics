/*

    getCharAt

    Ecrire une fonction "getCharAt",
    qui retourne un caractère à une certaine position.

    Si la position demandée est inexistante, retourner une chaine vide.

    Prototype:
        str getCharAt(str, position);

    Exemple:
        getCharAt("salut", 4); // "t"

*/

function getCharAt(str, position) {
    if (position<0 || position>str.length) {
        return "";
    }

    return str[position];
}