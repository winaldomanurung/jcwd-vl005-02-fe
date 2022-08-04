import api from "./api";

// Ini akan mengambil token yang sudah digenerate di dalam backend
// dia akan dijalankan di invoice di bagian getToken
export const getBraintreeClientToken = () => {
  let url = "/user/payment/getToken";
  return api
    .get(url)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      // console.log("error");
      console.log(err);
    });
};

// dengan menggunakan token, kita bisa melakukan pembayaran
export const processPayment = (paymentData) => {
  let url = "/user/payment/getToken/pay";
  return api
    .post(url, paymentData)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      // console.log("error");
      console.log(err);
    });
};

// export const createOrder = (userId, token, createOrderData) => {
//   return fetch(`${API}/order/create/${userId}`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify({ order: createOrderData }),
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .catch((err) => console.log(err));
// };
