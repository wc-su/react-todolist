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
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID,
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
