import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  query,
  where,
  orderBy,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfAF_co0q9JxKpo4LIT34wNFksK6W1Oao",
  authDomain: "react-todolist-3cf03.firebaseapp.com",
  projectId: "react-todolist-3cf03",
  storageBucket: "react-todolist-3cf03.appspot.com",
  messagingSenderId: "679609966381",
  appId: "1:679609966381:web:db9224cccf51cbf43bfda4",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const DB = {
  listRef: collection(db, "list"),
  addData: async function (data) {
    try {
      const docRef = await addDoc(this.listRef, {
        id: data.id,
        note: data.note,
        date: data.date,
        time: data.time,
        createTime: data.createTime,
        checked: data.checked,
      });
      return docRef.id;
    } catch (e) {
      console.error("Error adding document: ", e);
      return null;
    }
  },
  getData: async function () {
    try {
      const querySnapshot = await getDocs(
        query(this.listRef, orderBy("createTime", "desc"))
      );
      let data = [];
      querySnapshot.forEach((doc) => {
        data.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      return data;
    } catch (e) {
      console.error("Error adding document: ", e);
      return null;
    }
  },
  deleteData: async function (id) {
    try {
      const questResult = query(this.listRef, where("id", "==", id));
      const querySnapshot = await getDocs(questResult);
      querySnapshot.forEach(async (document) => {
        await deleteDoc(doc(db, "list", document.id));
      });
      return true;
    } catch (e) {
      console.error("Error adding document: ", e);
      return false;
    }
  },
  updateData: async function (id, checked) {
    try {
      const questResult = query(this.listRef, where("id", "==", id));
      const querySnapshot = await getDocs(questResult);
      querySnapshot.forEach(async (document) => {
        const docRef = doc(db, "list", document.id);
        await updateDoc(docRef, {
          checked: checked,
        });
      });
      return true;
    } catch (e) {
      console.error("Error update document: ", e);
      return false;
    }
  },
};

export default DB;
