
//Yêu cầu thứ nhất: Dừng các promise khác nếu một promise thất bại và log ra lỗi của promise đó.
const promisel = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Loi promise 1 ');
    }, 2000)
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hoan thanh promise 2');
    }, 3000)
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hoan thanh promise 3');
    }, 4000)
});
Promise.all([promisel, promise2, promise3])
    .then((results) => {
        console.log("Tất cả các promise đã hoàn thành thành công");
    })
    .catch((error) => {
        console.log("Promise thất bại:", error);
    });





