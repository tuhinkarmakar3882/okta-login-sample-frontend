const url = new URL(window.location);

const token_type = url.searchParams.get("token_type");
const expires_in = url.searchParams.get("expires_in");
const access_token = url.searchParams.get("access_token");
const scope = url.searchParams.get("scope");
const id_token = url.searchParams.get("id_token");

document.getElementById("token_type").textContent = token_type
document.getElementById("expires_in").textContent = expires_in
document.getElementById("access_token").textContent = access_token
document.getElementById("scope").textContent = scope
document.getElementById("id_token").textContent = id_token

console.log(`[+] token_type => ${token_type}`)
console.log(`[+] expires_in => ${expires_in}`)
console.log(`[+] access_token => ${access_token}`)
console.log(`[+] scope => ${scope}`)
console.log(`[+] id_token => ${id_token}`)
