const alphabetMap: { [x: string]: string } = {
    a: "m", b: "n", c: "b", d: "v", e: "c",
    f: "x", g: "z", h: "a", i: "s", j: "d",
    k: "f", l: "g", m: "h", n: "j", o: "k",
    p: "l", q: "p", r: "o", s: "i", t: "u",
    u: "y", v: "t", w: "r", x: "e", y: "w",
    z: "q",
    
    A: "M", B: "N", C: "B", D: "V", E: "C",
    F: "X", G: "Z", H: "A", I: "S", J: "D",
    K: "F", L: "G", M: "H", N: "J", O: "K",
    P: "L", Q: "P", R: "O", S: "I", T: "U",
    U: "Y", V: "T", W: "R", X: "E", Y: "W",
    Z: "Q",
    
    ã: "1", Ã: "2", á: "3", Á: "4", â: "5",
    Â: "6", à: "7", À: "8", é: "9", É: "0",
    ê: "!", Ê: "@", í: "#", Í: "$", ó: "%",
    Ó: "^", ô: "&", Ô: "*", õ: "(", Õ: ")",
    ú: "-", Ú: "_", ç: "=", Ç: "+", " ": "."
    
}
const alphabetMapReversed: { [x: string]: string } = {}
Object.keys(alphabetMap).forEach((key) => (alphabetMapReversed[alphabetMap[key]] = key))

export { alphabetMap, alphabetMapReversed }
