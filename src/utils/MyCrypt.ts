import { alphabetMap, alphabetMapReversed } from "./alphabets"
export default class MyCrypt {
    constructor(public name: string) {}

    encrypt = () => this.transformName(alphabetMap)
    decrypt = () => this.transformName(alphabetMapReversed)

    transformName = (alphabetMap: { [x: string]: string }) => {
        return this.name
            .split("")
            .map((letter: string) => (letter = alphabetMap[letter]))
            .join("")
    }
}
