import Base64 from "crypto-js/enc-base64";
import sha256 from "crypto-js/sha256";
import hmacSHA512 from "crypto-js/hmac-sha512";
import CryptoJS from "crypto-js";
import { DATA_SESSION } from "../config/global";

// obtiene los datos de las cookies
export function getDataCookies() {
  return localStorage.getItem(DATA_SESSION);
}

export function getTag() {
  let date = new Date();
  let message =
    "jECY#*whX^8N4!92F&v#dM%WR3xGgW" +
    date.getDay() +
    "*" +
    date.getMonth() +
    "*" +
    date.getFullYear();
  let nonce = "_>_";
  let path = "/";
  const privateKey = "jECY#*whX^8N4!92F&v#dM%WR3xGgW";
  const hashDigest = sha256(nonce + message);
  return Base64.stringify(hmacSHA512(path + hashDigest, privateKey));
}

export function wrap(message, info) {
  return CryptoJS.AES.encrypt(message, info).toString();
}

export function unwrap(message, info) {
  var bytes = CryptoJS.AES.decrypt(message, info);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}
