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
  console.log(students);
});

const addStudnetsForm = document.querySelector(".add");
addStudnetsForm.addEventListener("submit", (e) => {
  e.preventDefault();

  addDoc(colRef, {
    students__number: addStudnetsForm.students__number.value,
    email: addStudnetsForm.email.value,
    createdAt: serverTimestamp(),
    inlineFormSelectPref: $(
      "select[name=inlineFormSelectPref] option:selected"
    ).text(),
    inlineFormSelectPref1: $(
      "select[name=inlineFormSelectPref1] option:selected"
    ).text(),
    inlineFormSelectPref2: $(
      "select[name=inlineFormSelectPref2] option:selected"
    ).text(),
    inlineFormSelectPref3: $(
      "select[name=inlineFormSelectPref3] option:selected"
    ).text(),
    inlineFormSelectPref4: $(
      "select[name=inlineFormSelectPref4] option:selected"
    ).text(),
    inlineFormSelectPref5: $(
      "select[name=inlineFormSelectPref5] option:selected"
    ).text(),
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
  { v: "1", t: "부스를 선택하세요" },
  { v: "2", t: "비즈반지 만들기" },
  { v: "3", t: "Escape From Prison(방탈출)" },
  { v: "4", t: "보드게임(Trime을 이겨라) - 선착순" },
  { v: "5", t: "매직 큐브 달력" },
  { v: "6", t: "슬라임 만들기" },
  { v: "7", t: "석고 방향제" },
  { v: "8", t: "달고나 만들기" },
  { v: "9", t: "캐리컬쳐" },
  { v: "10", t: "실크 스크린" },
  { v: "11", t: "스포츠스태킹" },
  { v: "12", t: "다트 던지기" },
  { v: "13", t: "더 주식 게임" },
  { v: "14", t: "페이스페인팅 - 선착순" },
  { v: "15", t: "타투 - 선착순" },
  { v: "16", t: "오늘밤은 스윗드림(드림캐쳐)" },
  { v: "17", t: "폴라로이드 - 선착순" },
  { v: "18", t: "귀신의 집" },
];

let time = [{ v: "1", t: "시간을 선택하세요" }];

let time2 = [
  { v: "11", t: "10:40 ~ 11:05 - 4층 중국어실" },
  { v: "12", t: "11:05 ~ 11:30 - 4층 중국어실" },
  { v: "13", t: "11:30 ~ 11:55 - 4층 중국어실" },
  { v: "14", t: "11:55 ~ 12:20 - 4층 중국어실" },
];

let time3 = [
  { v: "21", t: "10:40 ~ 11:25 - 4층 기가실" },
  { v: "22", t: "11:30 ~ 12:10 - 4층 기가실" },
];

let time4 = [{ v: "31", t: "3~4교시 - 3층 과학이론실1" }];
let time5 = [
  { v: "41", t: "10:40 ~ 11:00 - 3층 과학실험실1" },

  { v: "42", t: "10:30 ~ 11:50 - 3층 과학실험실1" },
];

let time6 = [
  { v: "51", t: "3교시 - 13반" },

  { v: "52", t: "4교시 - 13반" },
];

let time7 = [
  { v: "61", t: "3교시 - 13반" },

  { v: "62", t: "4교시 - 13반" },
];

let time8 = [
  { v: "71", t: "3교시 - 2층 요가실" },
  { v: "72", t: "4교시 - 2층 요가실" },
];

let time9 = [
  { v: "81", t: "3교시 - 5층 미술실1" },
  { v: "82", t: "4교시 - 5층 미술실1" },
];

let time10 = [
  { v: "91", t: "3교시 - 미술실2" },
  { v: "92", t: "4교시 - 미술실2" },
];

let time11 = [
  { v: "101", t: "3교시 - 2층 홈베이스" },
  { v: "102", t: "4교시 - 2층 홈베이스" },
];

let time12 = [
  { v: "111", t: "3교시 - 2층 홈베이스" },
  { v: "112", t: "4교시 - 2층 홈베이스" },
];

let time13 = [
  { v: "121", t: "3교시 - 4층 홈베이스" },
  { v: "122", t: "4교시 - 4층 홈베이스" },
];

let time14 = [
  { v: "131", t: "3교시 - 3층 과학이론실2" },
  { v: "132", t: "4교시 - 3층 과학이론실2" },
];

let time15 = [
  { v: "141", t: "10:40 ~ 11:25 - 4층 기가실" },
  { v: "142", t: "11:30 ~ 12:10 - 4층 기가실" },
];

let time16 = [
  { v: "151", t: "10:40 ~ 11:05 - 3층 과학실험실2" },
  { v: "152", t: "11:05 ~ 11:30 - 3층 과학실험실2" },
  { v: "153", t: "11:30 ~ 11:55 - 3층 과학실험실2" },
  { v: "154", t: "11:55 ~ 12:20 - 3층 과학실험실2" },
];

let time17 = [{ v: "161", t: "3~4교시 - 강당? " }];

let time18 = [
  { v: "1", t: "3교시 - 3층 학생회실" },
  { v: "2", t: "4교시 - 3층 학생회실" },
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
      time17.forEach((item) => {
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
      time17.forEach((item) => {
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
      time17.forEach((item) => {
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
