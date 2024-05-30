function a() {
  let b = 20;
  c();
  function c() {
    console.log(b);
  }
}

a();

let n = 100;

console.log(n);
