import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import Form from "../islands/Form.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <>
      <Head>
        <title>Event Link Generator | Ggl Clndr</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <img
          src="https://lh3.googleusercontent.com/K0vgpnn9Vour8ByU3htR3ou5Cx70Me-lW_51VEAIS5dfzXCQ0otXakVuPiQVc0V6qcf9aP_vkVul59airN27m3mttf4zQ1TPv4MVrw"
          class="w-32 h-32 inline"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <h2 class="inline text-4xl dark:text-white">
          Event Link Generator
        </h2>
        <p class="my-6">
          Easy to ceate event calender links for Google Calendar. everyone
          registrate their calenders!
        </p>
        <Form />
      </div>
    </>
  );
}
