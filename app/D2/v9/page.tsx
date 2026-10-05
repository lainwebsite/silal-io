import { redirect } from "next/navigation";

// v2 starts with the About page; Home follows.
export default function V2Index() {
  redirect("/D2/v2/about");
}
