import { redirect } from "next/navigation";

// v2 starts with the About page; Home follows.
export default function V2Index() {
  redirect("/designer2/v2/about");
}
