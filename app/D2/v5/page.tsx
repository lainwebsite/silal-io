import { redirect } from "next/navigation";

// v5 starts with the About page.
export default function V5Index() {
  redirect("/D2/v5/about");
}
