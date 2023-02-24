// console.log(a);
// var a = 10;
// var a = 100;
// var a = 1000;
// console.log(a);

// keyward var defines variable in all parts of JS

// function f(a) {
//   console.log(a, this.a);
// }
// let b = 20;
// setTimeout(f.bind({a:"Hello"}, b), 1000);
// f.call({a:"World"}, b)

function getId() {
  return new Promise(resolve => {
    setTimeout(() => resolve(100), 1000);
  })
}
function getUserName() {
  return new Promise(resolve => {
    setTimeout(resolve.bind(undefined, "Alex"), 500);
  }) 
}
// 1.scenario - we should get id, and only after user name
// async function fAsync(){
//   const id = await getId();
//   console.log(id);
//   const userName = await getUserName();
//   console.log(userName);
// }
// fAsync();

// 2.scenario - we should get user id and user name the same time.
// const promiseId = getId();
// const promiseUser = getUserName();
// Promise.all([promiseId, promiseUser]).then(idUser => console.log(`id: ${idUser[0]}, userName: ${idUser[1]}`))

// 3.scenario - there will be considered only one result from promise moving in resolved
const promiseId = getId();
const promiseUser = getUserName();
Promise.race([promiseId, promiseUser]).then(res => console.log(res, typeof res))