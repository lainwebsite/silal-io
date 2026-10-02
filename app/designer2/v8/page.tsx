import { redirect } from "next/navigation";

// v8 starts with the About page.
export default function V8Index() {
  redirect("/designer2/v8/about");
}
