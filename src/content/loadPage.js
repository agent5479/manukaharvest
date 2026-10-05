import { pageContent } from "./pageContent";

/**
 * All visible copy is loaded through this function.
 * Today it returns the local file. Later, return a Firestore document
 * with the same shape: { site, en, zh }.
 *
 *   import { doc, getDoc } from "firebase/firestore";
 *   import { db } from "../firebase";
 *   const snap = await getDoc(doc(db, "pages", "home"));
 *   if (snap.exists()) return snap.data();
 */
export async function loadPage() {
  return pageContent;
}
