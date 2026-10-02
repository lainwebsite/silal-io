import { redirect } from "next/navigation";

// v7 starts with the About page.
export default function V7Index() {
  redirect("/designer2/v7/about");
}
