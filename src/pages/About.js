import React from "react";

const About = () => {
  return (
    <section className="w-full h-full py-8" name="About">
      <div
        className="container flex flex-col justify-center w-full min-h-screen px-6 mx-auto lg:h-screen"
        // data-aos="fade-down-left"
      >
        <h1 className="inline text-4xl font-bold underline underline-offset-4 decoration-4 decoration-gray-50">
          About
        </h1>

        <div className="" data-aos="fade-down-left">
          <p className="mt-5 text-2xl">
            I am a Software developer with 4+ years of experience building
            websites and web applications. I have professional experience
            working with Laravel and ReactJs. I also have experience developing
            range of web applications for start-up and small to enterprise level
            web applications.
          </p>
          <br />
          <p className="text-xl">
            Core skills and strengths: =======================
            <br />✔ WAMP(Windows, Apache, MySQL, PHP8)
            <br />✔ Laragon
            <br />✔ Frameworks like Laravel, React.js
            <br /> ✔ eCommerce: Laravel Ecommerce
            <br /> ✔ JavaScript, jQuery, Alpinejs
            <br /> ✔ Databases design, programming and code optimization <br />✔
            PHP8, MySQL5, HTML5, Laravel Livewire and UI integration
            <br /> ✔ Code versioning using Git ✔ Payment gateway
            integration(Paystack , Stripe, PayPal)
            <br />✔ Mailing API (Sendpulse, Sendinblue)
            <br /> ✔ REST API development and integration
            <br />
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
