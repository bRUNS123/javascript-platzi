import Singleton from "./Singleton";

const a = Singleton.getInstance();
const b = Singleton.getInstance();

console.log("A === B?", a === b); // true
