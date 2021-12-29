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
  where,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

//  학번, 이름 : 30618 이현서전화번호 : 010 2465 8074
//  학번, 이름 : 30115 윤세빈전화번호 : 010 8904 5932
//  학번, 이름 : 30506 김현아전화번호 : 01055421632
//  학번, 이름 : 30623 허소은전화번호 : 01088346894
//  학번, 이름 : 10318 윤승준전화번호 : 01095943848
//  학번, 이름 : 30515 이서준전화번호 : 01045829328

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
// const analytics = getAnalytics();
// logEvent(analytics, "notification_received");
const db = getFirestore();
// // const auth = getAuth();
let BoothArray = [];

// // collection ref
const colRef = collection(db, "solbitgae");

const q = query(colRef, orderBy("createdAt"));
// const q1 = query(
//   colRef,
//   where("booth__1", "==", "쫄? (귀신의 집)"),
//   where("time__1", "==", "10:40 ~ 10:55 - 3층 학생회실"),
//   orderBy("createdAt")
// );
// 10:40 ~ 11:25 - 미술실2{
//  학번, 이름 : 30623 허소은전화번호 : 01088346894
//  학번, 이름 : 30618 이현서전화번호 : 010 2465 8074
//  학번, 이름 : 30115 윤세빈전화번호 : 010 8904 5932
//  학번, 이름 : 10318, 윤승준전화번호 : 01095943848
// }
const unsubCol = onSnapshot(q, (snapshot) => {
  let students = [];
  snapshot.docs.forEach((doc) => {
    students.push({ ...doc.data(), id: doc.id });
  });

  for (let i = 0; i < students.length; i++) {
    if (
      (students[i].booth__1 == "쫄? (귀신의 집)" ||
        students[i].booth__2 == "쫄? (귀신의 집)" ||
        students[i].booth__3 == "쫄? (귀신의 집)") &&
      (students[i].time__1 == "10:40 ~ 10:55 - 3층 학생회실" ||
        students[i].time__2 == "10:40 ~ 10:55 - 3층 학생회실" ||
        students[i].time__3 == "10:40 ~ 10:55 - 3층 학생회실")
    ) {
      // "학번, 이름 : " +
      //   students[i].students__number +
      //   "전화번호 : " +
      //   students[i].number
      let date = new Date(students[i].createdAt.seconds * 1000);
      console.log(date);
    }
  }
});
// const unsubCol1 = onSnapshot(q1, (snapshot) => {
//   let students = [];
//   snapshot.docs.forEach((doc) => {
//     students.push({ ...doc.data(), id: doc.id });
//     students1.push({ ...doc.data(), id: doc.id });
//   });
//   for (let i = 0; i < 5; i++) {
//     console.log(
//       "학번 이름 : " +
//         students[i].students__number +
//         " 전화번호 : " +
//         students[i].number
//     );
//   }
// });
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
  { v: "1", t: "부스를 선택하세요" },
  { v: "2", t: "쫄? (귀신의 집)" },
  { v: "3", t: "Escape From Prison(방탈출)" },
  { v: "4", t: "매직 큐브 달력" },
  { v: "6", t: "슬라임 만들기" },
  { v: "7", t: "석고 방향제" },
  { v: "8", t: "달고나 만들기" },
  { v: "9", t: "캐리컬쳐" },
  { v: "10", t: "실크 스크린" },
  { v: "11", t: "도전! 스포츠스태킹" },
  { v: "12", t: "도전! 다트 왕" },
  { v: "13", t: "더 주식 게임" },
  { v: "14", t: "오늘밤은 스윗드림(드림캐쳐)" },
  { v: "15", t: "비즈반지 만들기" },
];

let time1 = [{ v: "1", t: "시간을 선택하세요" }];

let time2 = [
  { v: "11", t: "10:40 ~ 10:55 - 3층 학생회실" },
  { v: "12", t: "10:55 ~ 11:10 - 3층 학생회실" },
  { v: "11", t: "11:10 ~ 11:25 - 3층 학생회실" },
  { v: "12", t: "11:35 ~ 11:50 - 3층 학생회실" },
  { v: "11", t: "11:50 ~ 12:05 - 3층 학생회실" },
  { v: "12", t: "12:05 ~ 12:20 - 3층 학생회실" },
];

let time3 = [
  { v: "21", t: "10:40 ~ 11:25 - 4층 기가실" },
  { v: "22", t: "11:30 ~ 12:10 - 4층 기가실" },
];

let time4 = [
  { v: "31", t: "10:40 ~ 11:00 - 3층 과학실험실1" },

  { v: "32", t: "11:30 ~ 11:50 - 3층 과학실험실1" },
];

let time5 = [
  { v: "41", t: "10:40 ~ 11:25 - 13반" },

  { v: "42", t: "11:35 ~ 12:20 - 13반" },
];

let time6 = [
  { v: "51", t: "10:40 ~ 11:25 - 3학년 13반" },

  { v: "52", t: "11:35 ~ 12:20 - 3학년 13반" },
];

let time7 = [
  { v: "61", t: "10:40 ~ 11:25 - 3학년 13반" },
  { v: "62", t: "11:35 ~ 12:20 - 3학년 13반" },
];

let time8 = [
  { v: "71", t: "10:40 ~ 11:25 - 2층 요가실" },
  { v: "72", t: "11:35 ~ 12:20 - 2층 요가실" },
];

let time9 = [
  { v: "81", t: "10:40 ~ 11:25 - 5층 미술실1" },
  { v: "82", t: "11:35 ~ 12:20 - 5층 미술실1" },
];

let time10 = [
  { v: "91", t: "10:40 ~ 11:25 - 미술실2" },
  { v: "92", t: "11:35 ~ 12:20 - 미술실2" },
];

let time11 = [
  { v: "101", t: "10:40 ~ 11:25 - 2층 홈베이스" },
  { v: "102", t: "11:35 ~ 12:20 - 2층 홈베이스" },
];

let time12 = [
  { v: "101", t: "10:40 ~ 11:25 - 2층 홈베이스" },
  { v: "102", t: "11:25 ~ 12:20 - 2층 홈베이스" },
];

let time13 = [
  { v: "121", t: "10:40 ~ 11:10 - 4층 영어실" },
  { v: "122", t: "11:15 ~ 11:45 - 4층 영어실" },
  { v: "122", t: "11:50 ~ 12:20 - 4층 영어실" },
];

let time14 = [
  { v: "121", t: "10:40 ~ 10:55 - 3층 과학실험실2" },
  { v: "122", t: "10:55 ~ 11:45 - 3층 과학실험실2" },
  { v: "122", t: "11:50 ~ 12:20 - 3층 과학실험실2" },
];

let time15 = [
  { v: "121", t: "10:40 ~ 11:00 - 4층 중국어실" },
  { v: "122", t: "11:05 ~ 11:25 - 4층 중국어실" },
  { v: "121", t: "11:30 ~ 11:50 - 4층 중국어실" },
  { v: "122", t: "11:55 ~ 12:15 - 4층 중국어실" },
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
      time1.forEach((item) => {
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
    document.querySelector("#inlineFormSelectPref1").innerHTML = h.join("");
  }
}
function loadReserve1() {
  let h = [];
  let reserve = document.querySelector("#inlineFormSelectPref2").value;
  if (reserve == "") {
  } else {
    if (reserve == "1") {
      time1.forEach((item) => {
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

    document.querySelector("#inlineFormSelectPref3").innerHTML = h.join("");
  }
}
function loadReserve2() {
  let h = [];
  let reserve = document.querySelector("#inlineFormSelectPref4").value;
  if (reserve == "") {
  } else {
    if (reserve == "1") {
      time1.forEach((item) => {
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
    document.querySelector("#inlineFormSelectPref5").innerHTML = h.join("");
  }
}

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

Doreserve();
loadReserve();
Doreserve1();
loadReserve1();
Doreserve2();
loadReserve2();
