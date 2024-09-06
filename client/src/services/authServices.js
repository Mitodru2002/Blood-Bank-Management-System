import { userLogin, userRegister } from "../redux/features/auth/authActions";
import store from "../redux/store";

export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!email || !password || !role) {
      return alert("Enter all fields in to login");
    }
    store.dispatch(userLogin({ email, password, role }));
  } catch (error) {
    console.log(error);
  }
};
export const handleRegister = (
  e,
  email,
  password,
  role,
  name,
  hospitalName,
  organisationName,
  address,
  phone
) => {
  e.preventDefault();
  try {
    store.dispatch(
      userRegister({
        email,
        password,
        role,
        name,
        hospitalName,
        organisationName,
        address,
        phone,
      })
    );
  } catch (error) {
    console.log(error);
  }
};
