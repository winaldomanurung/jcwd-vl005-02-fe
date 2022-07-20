import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/user/Navbar";
import ForgotPassword from "./pages/user/forgotPassword";
import ResetPassword from "./pages/user/resetPassword";
import UserHome from "./pages/user/UserHome";
import UserLogin from "./pages/user/userLogin";
import UserRegister from "./pages/user/UserRegister";
import UserProductDetails from "./pages/user/UserProductDetails";
import UserProducts from "./pages/user/UserProducts";
import Footer from "./components/user/Footer";
import UserCart from "./pages/user/UserCart";
import VerificationPage from "./pages/user/VerificationPage";
import ResendEmailVerification from "./pages/user/UserResendVerification";
import { useSelector } from "react-redux";
import UserCheckout from "./pages/user/UserCheckout";
import UserInvoice from "./pages/user/UserInvoice";
import UserPurchases from "./pages/user/UserPurchases";
// import UserPurchaseDetails from "./pages/user/UserPurchaseDetails";
import NotificationTrial from "./pages/user/NotificationTrial";
import UserNotifications from "./pages/user/UserNotifications";
import { Box } from "@chakra-ui/react";
import UserDashboard from "./pages/user/UserDashboard";

function UserRouter() {
  const { email, username, id: userId } = useSelector((state) => state.user);
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <div style={{ paddingBottom: "16.3rem" }}>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<UserHome />} />
          <Route exact path="/dashboard/*" element={<UserDashboard />} />

          <Route path="/shop" element={<UserProducts />}></Route>
          {localStorage.getItem("token") ? (
            <Route path="/cart" element={<UserCart />}></Route>
          ) : (
            <Route path="/cart" element={<Navigate to="/" replace />} />
          )}
          {/* {userId ? (
          <Route path="/checkout" element={<UserCheckout />}></Route>
        ) : (
          <Route path="/checkout" element={<Navigate to="/" replace />} />
        )} */}
          <Route path="/checkout" element={<UserCheckout />}></Route>
          {/* <Route path="/invoice" element={<UserInvoice />}></Route> */}
          <Route path="/purchases">
            <Route index element={<UserPurchases />} />
            <Route path=":invoiceCode" element={<UserInvoice />} />
          </Route>

          <Route path="/products">
            <Route index element={<UserProducts />} />
            <Route path=":productId" element={<UserProductDetails />} />
          </Route>
          <Route path="/login" element={<UserLogin />}></Route>
          <Route path="/register" element={<UserRegister />}></Route>
          <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
          <Route
            path="/resetpassword/:token"
            element={<ResetPassword />}
          ></Route>
          <Route
            path="/authentication/:token"
            element={<VerificationPage />}
          ></Route>
          <Route path="/notification" element={<UserNotifications />}></Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Box bottom="0" width="100%" position="absolute" height="16.3rem">
        <Footer></Footer>
      </Box>
    </div>
  );
}

export default UserRouter;
