import React from "react";

const About = () => {
  return (
    <section className="w-full h-full py-8" name="About">
      <div
        className="container flex flex-col justify-center w-full min-h-screen px-6 mx-auto lg:h-screen"
        data-aos="fade-down-left"
      >
        <h1 className="inline text-4xl font-bold underline underline-offset-4 decoration-4 decoration-gray-50">
          About
        </h1>

        <div className="">
          <p className="mt-5 text-2xl">
            I'm Orizu Duziem ChijeMEZU, I love building creative and dynamic web
            applications from start to finish, For start-up and small to
            enterprise level businesses and companies. I also love building web
            applications to make live easier for people.
          </p>
          <br />
          <p className="text-xl">
            Core skills and strengths: =======================
            <br />✔ WAMP(Windows, Apache, MySQL, PHP8)
            <br />✔ Laragon
            <br />✔ Frameworks like Laravel, React.js
            <br /> ✔ eCommerce: Laravel Ecommerce
            <br /> ✔ JavaScript, jQuery, Alpinejs
            <br /> ✔ Databases design, programming and optimization <br />✔
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
