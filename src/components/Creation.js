import React, { useState } from "react";
import { db } from "../Firebase";

function Creation() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [date, setDate] = useState("");
  const [expense, setExpense] = useState(0);

  const handleClick = (event) => {
    event.preventDefault(); // prevent the default form submission behavior

    // create a new object with the form data
    const formData = {
      title,
      type,
      description,
      link,
      date,
      expense,
    };

    // save the form data to the database
    db.collection("adverts")
      .add(formData)
      .then(() => {
        console.log("Form data saved successfully!");
        // reset the form
        setTitle("");
        setType("");
        setDescription("");
        setLink("");
        setDate("");
        setExpense(0);
      })
      .catch((error) => {
        console.error("Error saving form data: ", error);
      });
  };




  return (
     <section className="text-gray-600 body-font relative bg-white m-0.5">
      <div className="container px-5 py-4 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Apply for Adverts
          </h1>
        </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2 mb-5">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="title"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={title} // bind the value of the input to the state variable
                    onChange={(event) => setTitle(event.target.value)} // update the state variable on input change
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required // add required validation
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="type"
                    className="leading-7 text-sm text-gray-600">
                  Type
                </label>
                <select
                  id="type"
                  name="type"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2.5 px-3 leading-8 transition-colors duration-200 ease-in-out"
                >
                  <option onSelect={setType('Quiz')} value="volvo">Quiz</option>
                  <option onSelect={setType('Mini-Game')} value="saab">Mini-Game</option>
                  <option onSelect={setType('Task')} value="fiat">Task</option>
                </select>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  for="description"
                  className="leading-7 text-sm text-gray-600"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  onChange={(event) => setTitle(event.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="name" className="leading-7 text-sm text-gray-600">
                  Link
                </label>
                <input
                  type="url"
                  id="link"
                  name="link"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(event) => setLink(event.target.value)}
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="name" className="leading-7 text-sm text-gray-600">
                  Upload File
                </label>
                <input
                  type="file"
                  id="drive"
                  name="drive"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="name" className="leading-7 text-sm text-gray-600">
                  Expense (in $)
                </label>
                <input
                  type="number"
                  id="money"
                  name="money"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(event) => setExpense(event.target.value)}
              />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="name" className="leading-7 text-sm text-gray-600">
                  Starting
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={(event) => setDate(event.target.value)}
                />
              </div>
            </div>

            <div className="p-2 w-full">
              <button
                className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-2"
                onClick={handleClick}
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Creation;
