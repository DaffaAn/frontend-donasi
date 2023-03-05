//import vuex
import { createStore } from "vuex";

//import module auth
import auth from "./module/auth";

//import module donation
import donation from "./module/donation";

//import module profile
import slider from "./module/slider";

//import module slider
import profile from "./module/profile";

//import module category
import category from "./module/category";

//create store vuex
export default createStore({
  modules: {
    auth, // <-- module auth
    donation, // <-- module donation
    profile, // <-- module profile
    slider, // <-- module slider
    category, // <-- module category
  },
});
