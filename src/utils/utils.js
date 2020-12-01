import { NUMBER, SIGN } from "../redux/types";

export function getType(str) {
    if (typeof str != "string") return false;
    return !isNaN(str) && !isNaN(parseFloat(str)) ? NUMBER : SIGN;
}