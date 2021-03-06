// import { getAnalytics } from "firebase/analytics";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
  collection,
  getFirestore,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
// import {
//   getFirestore,
//   doc,
//   getDoc,
//   getDocs,
//   collection,
// } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgkcpvuQiVlKljlnSG-diHUEuTbbKjc8A",
  authDomain: "forschool-79f25.firebaseapp.com",
  projectId: "forschool-79f25",
  storageBucket: "forschool-79f25.appspot.com",
  messagingSenderId: "758169627388",
  appId: "1:758169627388:web:e49545efe307d2d2a30579",
  measurementId: "G-RYLTPDZCB6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore();
// // const auth = getAuth();

// // collection ref
const colRef = collection(db, "students");

const q = query(colRef, orderBy("createdAt"));

const unsubCol = onSnapshot(q, (snapshot) => {
  let students = [];
  snapshot.docs.forEach((doc) => {
    students.push({ ...doc.data(), id: doc.id });
  });
});

const addStudnetsForm = document.querySelector(".add");
addStudnetsForm.addEventListener("submit", (e) => {
  e.preventDefault();

  addDoc(colRef, {
    students__number: addStudnetsForm.students__number.value,
    number: addStudnetsForm.number.value,
    createdAt: serverTimestamp(),
    booth__1: $("select[name=booth__1] option:selected").text(),
    time__1: $("select[name=time__1] option:selected").text(),
    booth__2: $("select[name=booth__2] option:selected").text(),
    time__2: $("select[name=time__2] option:selected").text(),
    booth__3: $("select[name=booth__3] option:selected").text(),
    time__3: $("select[name=time__3] option:selected").text(),
  }).then(() => {
    addStudnetsForm.reset();
    console.log();
  });
});

let toastTrigger = document.getElementById("liveToastBtn");
let toastLiveExample = document.getElementById("liveToast");
if (toastTrigger) {
  toastTrigger.addEventListener("click", function () {
    let toast = new bootstrap.Toast(toastLiveExample);

    toast.show();
  });
}

let reserve = [
  { v: "1", t: "????????? ???????????????" },
  { v: "2", t: "???? (????????? ???)" },
  { v: "3", t: "Escape From Prison(?????????)" },
  { v: "4", t: "????????????(Trime??? ?????????) - ?????????" },
  { v: "5", t: "?????? ?????? ??????" },
  { v: "6", t: "????????? ?????????" },
  { v: "7", t: "?????? ?????????" },
  { v: "8", t: "????????? ?????????" },
  { v: "9", t: "????????????" },
  { v: "10", t: "?????? ?????????" },
  { v: "11", t: "??????! ??????????????????" },
  { v: "12", t: "??????! ?????? ???" },
  { v: "13", t: "??? ?????? ??????" },
  { v: "14", t: "?????????????????? - ?????????" },
  { v: "15", t: "?????? - ?????????" },
  { v: "16", t: "???????????? ????????????(????????????)" },
  { v: "17", t: "??????????????? - ?????????" },
  { v: "18", t: "???????????? ?????????" },
];

let time = [{ v: "1", t: "????????? ???????????????" }];

let time2 = [
  { v: "171", t: "3?????? - 3??? ????????????" },
  { v: "172", t: "4?????? - 3??? ????????????" },
];

let time3 = [
  { v: "21", t: "10:40 ~ 11:25 - 3??? ???????????????2" },
  { v: "22", t: "11:30 ~ 12:10 - 3??? ???????????????2" },
];

let time4 = [{ v: "31", t: "3~4?????? - 3??? ???????????????1" }];
let time5 = [
  { v: "41", t: "10:40 ~ 11:00 - 3??? ???????????????1" },

  { v: "42", t: "11:30 ~ 11:50 - 3??? ???????????????1" },
];

let time6 = [
  { v: "51", t: "10:40 ~ 11:25 - 13???" },

  { v: "52", t: "4?????? - 13???" },
];

let time7 = [
  { v: "61", t: "3?????? - 13???" },

  { v: "62", t: "4?????? - 13???" },
];

let time8 = [
  { v: "71", t: "3?????? - 2??? ?????????" },
  { v: "72", t: "4?????? - 2??? ?????????" },
];

let time9 = [
  { v: "81", t: "3?????? - 5??? ?????????1" },
  { v: "82", t: "4?????? - 5??? ?????????1" },
];

let time10 = [
  { v: "91", t: "3?????? - ?????????2" },
  { v: "92", t: "4?????? - ?????????2" },
];

let time11 = [
  { v: "101", t: "3?????? - 2??? ????????????" },
  { v: "102", t: "4?????? - 2??? ????????????" },
];

let time12 = [
  { v: "111", t: "3?????? - 2??? ????????????" },
  { v: "112", t: "4?????? - 2??? ????????????" },
];

let time13 = [
  { v: "121", t: "10:40 ~ 11:10 - 4??? ?????????" },
  { v: "122", t: "11:10 ~ 11:40 - 4??? ?????????" },
  { v: "122", t: "11: ~ 11:40 - 4??? ?????????" },
];

let time14 = [
  { v: "131", t: "3?????? - 4??? ????????????" },
  { v: "132", t: "4?????? - 4??? ????????????" },
];

let time15 = [
  { v: "141", t: "10:40 ~ 11:25 - 3??? ???????????????2" },
  { v: "142", t: "11:30 ~ 12:10 - 3??? ???????????????2" },
];

let time16 = [
  { v: "151", t: "10:40 ~ 11:05 - 3??? ???????????????2" },
  { v: "152", t: "11:05 ~ 11:30 - 3??? ???????????????2" },
  { v: "153", t: "11:30 ~ 11:55 - 3??? ???????????????2" },
  { v: "154", t: "11:55 ~ 12:20 - 3??? ???????????????2" },
];

let time17 = [{ v: "161", t: "3~4?????? - ???????????? " }];

let time18 = [
  { v: "11", t: "10:40 ~ 11:05 - 4??? ????????????" },
  { v: "12", t: "11:05 ~ 11:30 - 4??? ????????????" },
  { v: "13", t: "11:30 ~ 11:55 - 4??? ????????????" },
  { v: "14", t: "11:55 ~ 12:20 - 4??? ????????????" },
];

function Doreserve() {
  let h = [];
  reserve.forEach((item) => {
    h.push('<option value="' + item.v + '">' + item.t + "</option>");
  });
  document.querySelector("#inlineFormSelectPref").innerHTML = h.join("");
}

function Doreserve1() {
  let h = [];
  reserve.forEach((item) => {
    h.push('<option value="' + item.v + '">' + item.t + "</option>");
  });
  document.querySelector("#inlineFormSelectPref2").innerHTML = h.join("");
}
function Doreserve2() {
  let h = [];
  reserve.forEach((item) => {
    h.push('<option value="' + item.v + '">' + item.t + "</option>");
  });
  document.querySelector("#inlineFormSelectPref4").innerHTML = h.join("");
}

function loadReserve() {
  let h = [];
  let reserve = document.querySelector("#inlineFormSelectPref").value;
  if (reserve == "") {
  } else {
    if (reserve == "1") {
      time.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "2") {
      time2.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "3") {
      time3.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "4") {
      time4.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "5") {
      time5.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "6") {
      time6.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "7") {
      time7.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "8") {
      time8.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "9") {
      time9.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "10") {
      time10.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "11") {
      time11.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "12") {
      time12.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "13") {
      time13.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "14") {
      time14.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "15") {
      time15.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "16") {
      time16.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "17") {
      time17.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "18") {
      time18.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    document.querySelector("#inlineFormSelectPref1").innerHTML = h.join("");
  }
}
function loadReserve1() {
  let h = [];
  let reserve = document.querySelector("#inlineFormSelectPref2").value;
  if (reserve == "") {
  } else {
    if (reserve == "1") {
      time.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "2") {
      time2.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "3") {
      time3.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "4") {
      time4.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "5") {
      time5.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "6") {
      time6.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "7") {
      time7.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "8") {
      time8.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "9") {
      time9.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "10") {
      time10.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "11") {
      time11.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "12") {
      time12.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "13") {
      time13.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "14") {
      time14.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "15") {
      time15.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "16") {
      time16.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "17") {
      time17.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "18") {
      time18.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    document.querySelector("#inlineFormSelectPref3").innerHTML = h.join("");
  }
}
function loadReserve2() {
  let h = [];
  let reserve = document.querySelector("#inlineFormSelectPref4").value;
  if (reserve == "") {
  } else {
    if (reserve == "1") {
      time.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "2") {
      time2.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "3") {
      time3.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "4") {
      time4.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "5") {
      time5.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "6") {
      time6.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "7") {
      time7.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "8") {
      time8.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "9") {
      time9.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "10") {
      time10.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "11") {
      time11.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "12") {
      time12.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "13") {
      time13.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "14") {
      time14.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "15") {
      time15.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "16") {
      time16.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "17") {
      time17.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    if (reserve == "18") {
      time18.forEach((item) => {
        h.push('<option value="' + item.v + '">' + item.t + "</option>");
      });
    }
    document.querySelector("#inlineFormSelectPref5").innerHTML = h.join("");
  }
}
Doreserve();
loadReserve();
Doreserve1();
loadReserve1();
Doreserve2();
loadReserve2();

const selectElement = document.querySelector("#inlineFormSelectPref");
const selectElement1 = document.querySelector("#inlineFormSelectPref2");
const selectElement2 = document.querySelector("#inlineFormSelectPref4");
selectElement.addEventListener("change", (event) => {
  loadReserve();
});
selectElement1.addEventListener("change", (event) => {
  loadReserve1();
});
selectElement2.addEventListener("change", (event) => {
  loadReserve2();
});
