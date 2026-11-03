import { auth } from "./firebaseConfig.js";
import { onAuthStateChanged } from "firebase/auth";

onAuthStateChanged(auth, function (user) {
    if (user) {
        document.getElementById("user-name").textContent =
            user.displayName || "there";
    }
});