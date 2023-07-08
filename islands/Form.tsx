import { useSignal } from "@preact/signals";
import { format, parse } from "https://deno.land/std@0.193.0/datetime/mod.ts";

const MockForm = () => {
  const title = useSignal("");
  const startDate = useSignal(new Date());
  const endDate = useSignal(new Date());
  const place = useSignal("");
  const description = useSignal("");
  const urlEvent = useSignal("");

  const handleTitleChange = (event: any) => {
    title.value = event.target.value;
  };

  const handleStartDateChange = (event: any) => {
    console.log(`typeof ${typeof (event.target.value)}`);
    console.log(`value ${event.target.value}`);
    startDate.value = event.target.value;
  };

  const handleEndDateChange = (event: any) => {
    endDate.value = event.target.value;
  };

  const handlePlaceChange = (event: any) => {
    place.value = event.target.value;
  };

  const handleDescriptionChange = (event: any) => {
    description.value = event.target.value;
  };

  const onCopy = () => {
    navigator.clipboard
      .writeText(urlEvent.value).then(() => {
        alert("Copied!");
      });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    console.log(`whoa whoa${format(new Date(), "yyyyMMdd'T'HHmmss")}`);
    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${
      encodeURIComponent(
        title.value,
      )
    }&dates=${format(new Date(startDate.value), "yyyyMMdd'T'HHmmss")}/${
      format(new Date(endDate.value), "yyyyMMdd'T'HHmmss")
    }&location=${place.value}&details=${
      encodeURIComponent(description.value)
    }&sf=true&output=xml`;
    urlEvent.value = url;
    onCopy();
  };

  return (
    <div class="w-full max-w-xs">
      <form onSubmit={handleSubmit} class="w-full max-w-sm">
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="title"
            >
              Title
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="title"
              type="text"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="start-date"
            >
              Start Date
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="start-date"
              type="datetime-local"
              value={startDate}
              onChange={handleStartDateChange}
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="end-date"
            >
              End Date
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="end-date"
              type="datetime-local"
              value={endDate}
              onChange={handleEndDateChange}
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="place"
            >
              Place
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="place"
              type="text"
              value={place}
              onChange={handlePlaceChange}
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="description"
            >
              Description
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="description"
              type="text"
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <button
              class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Generate Link!
            </button>
          </div>
        </div>
      </form>
      <br />
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="place"
          >
            Event URL
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="place"
            type="text"
            disabled
            value={urlEvent}
          />
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="place"
          >
            copy & go!
          </label>
        </div>
        <div class="md:w-2/3">
          <button
            class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={onCopy}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-clipboard"
              viewBox="0 0 16 16"
            >
              <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
              <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MockForm;
