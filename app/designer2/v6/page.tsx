import { redirect } from "next/navigation";

// v6 starts with the About page.
export default function V6Index() {
  redirect("/designer2/v6/about");
}
