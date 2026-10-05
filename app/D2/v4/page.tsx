import { redirect } from "next/navigation";

// v4 starts with the About page.
export default function V4Index() {
  redirect("/D2/v4/about");
}
