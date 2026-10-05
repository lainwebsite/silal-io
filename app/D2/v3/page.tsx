import { redirect } from "next/navigation";

// v3 starts with the About page.
export default function V3Index() {
  redirect("/D2/v3/about");
}
