import { getAuth } from "firebase/auth";

const { default: app } = require("./firebase.config");

const auth = getAuth(app);
export default auth;
