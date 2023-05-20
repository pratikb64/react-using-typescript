import { ChangeEvent, FormEvent, useRef, useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Layout from "./components/Layout";

function App() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    buttonRef.current?.setAttribute("disabled", "true");
    // Fake delay to mimic server request
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
        alert(JSON.stringify(form, null, 2));
        setForm({
          first_name: "",
          last_name: "",
          email: "",
        });
      }, 500);
    });

    buttonRef.current?.removeAttribute("disabled");
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <Layout>
        <div className="text-center mt-6">
          <h1 className="text-4xl font-semibold">Register</h1>
        </div>
        <form onSubmit={submitHandler} className="mt-4">
          <Input
            value={form.first_name}
            type="text"
            name="first_name"
            id="first_name"
            onChange={onChange}
            placeholder="Text input"
            required
            label={{
              title: "First Name",
            }}
            wrapper={{
              className: "my-2",
            }}
          />
          <Input
            value={form.last_name}
            type="text"
            name="last_name"
            id="last_name"
            onChange={onChange}
            placeholder="Text input"
            required
            label={{
              title: "Last Name",
            }}
            wrapper={{
              className: "my-2",
            }}
          />
          <Input
            value={form.email}
            type="email"
            name="email"
            id="email"
            onChange={onChange}
            placeholder="Text input"
            required
            label={{
              title: "Email",
            }}
            wrapper={{
              className: "my-2",
            }}
          />
          {/* <div className="my-2">
            <label className="text-sm" htmlFor="last_name">
              Last Name
            </label>
            <Input
              value={form.last_name}
              onChange={onChange}
              type="text"
              name="last_name"
              id="last_name"
              placeholder="Text input"
              required
            />
          </div>
          <div className="my-2">
            <label className="text-sm" htmlFor="email">
              Email
            </label>
            <Input
              value={form.email}
              onChange={onChange}
              type="email"
              name="email"
              id="email"
              placeholder="jon@doe.com"
              required
            />
          </div> */}
          <button
            ref={buttonRef}
            className="px-12 p-2 rounded-md disabled:bg-gray-500 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white "
          >
            Submit
          </button>
        </form>
      </Layout>
    </div>
  );
}

export default App;
