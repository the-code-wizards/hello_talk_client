import React from "react";
const SendEmail = () => {
  const newsLetterHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const comment = { email };
    fetch(`https://hello-talk-webserver.vercel.app/notifyblog`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(comment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          form.reset();
          console.log(data);
        }
      });
  };

  return (
    <div className="lg:md:px-0 px-6" onSubmit={newsLetterHandler}>
      <div className=" card lg:md:max-w-[800px] border-[2px] border-[#61B800] shadow-xl mx-auto text-[#3C3C3C] my-10">
        <div className="card-body ">
          <h2 className="text-center font-featherBold lg:md:text-3xl text-2xl">
            Join our community and Sign up now for getting upcoming blogs
          </h2>
          <form>
            <div className="flex justify-center my-4">
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                className="input w-full lg:md:max-w-xl bg-[#F7F7F7] border-[2px] border-[#e5e3e3] focus:border-[2px] focus:border-[#e5e3e3] mb-[10px]"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="mt-[15px] bg-[#58cc02] border-[#61B800] border-t-[2px] border-b-[5px] border-l-[2px] border-r-[2px] py-[10px] rounded-xl text-white font-bold text-[14px] focus:border-b-[2px] w-[80%] lg:w-[50%] hover:bg-[#61E002]"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SendEmail;
