import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [status, setStatus] = useState("");
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_p92es8s",
        "template_zirlhfi",
        form.current,
        "MZOTysJN7EkXt-w54"
      )
      .then(
        () => {
          setStatus("✅ Email sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("❌ Email failed:", error);
          setStatus("⚠️ Failed to send email.");
        }
      );
  };

  return (
    <div className=" text-black mycontainer">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-size-[6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>{" "}
      <div>
        <div>
          <h2 className=" text-2xl  xs:text-5xl md:text-4xl lg:text-5xl font-bold pt-10 uppercase">
            my <span className="text-purple-800">Contact</span> Info
          </h2>
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 xs:gap-10 md:gap-7">
          <div className="pt-5 xs:pt-20 md:pt-10 lg:pt-15">
            <h1 className="text-2xl text-purple-700 font-semibold">
              Have a question, feedback, or just want to say hello? We'd love to
              hear from you
            </h1>
            <p className="text-2xl font-semibold pt-5 xs:pt-20 md:pt-20 lg:pt-20">
              Call me: 0333-0683570
            </p>
            <p className="text-2xl font-semibold">
              Say Hi: hamza.slysol@gmail.com
            </p>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="pt-10 xs:pt-20 md:pt-20 lg:pt-10"
          >
            <div className="p-4 text-xl">
              <input
                name="user_name"
                type="text"
                placeholder="Name"
                required
                className="p-2 w-full border border-purple-800 rounded-2xl"
              />
            </div>

            <div className="p-4 text-xl">
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
                className="border border-purple-800 p-2 w-full rounded-2xl"
              />
            </div>

            <div className="p-4 text-xl">
              <textarea
                name="message"
                rows={5}
                placeholder="Message"
                required
                className="border border-purple-800 p-2 rounded-2xl resize-none w-full"
              ></textarea>
            </div>

            <div className="flex justify-between gap-3 pb-10">
              <div className="pt-2 pl-3 text-sm">
                <p>
                  All the fields are required. By sending the form you agree to
                  the
                  <span className="underline"> Terms and Condition</span> and
                  <span className="underline"> Privacy Policy.</span>
                </p>
              </div>

              <div className="pt-2 flex justify-end xs:justify-center md:justify-center lg:justify-end pr-3">
                <button
                  type="submit"
                  className="bg-purple-500 px-4 py-1 rounded-xl hover:bg-purple-700 hover:font-bold"
                >
                  Send
                </button>
              </div>
            </div>

            {status && <p className="text-center pt-4">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
