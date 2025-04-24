import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import Newsletterbox from "../components/NewsletterBox";

const About = () => {
  return (
    <div className="text-2xl text-center pt-8 border-t">
      <Title text1={"About"} text2={"US"} />
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            At FOREVER, we believe in elevating your style with luxury and
            sophistication. Offering a curated collection of premium fashion,
            our mission is to bring you timeless, high-quality pieces that make
            every outfit a statement. Whether you’re dressing for a special
            occasion or everyday elegance, FOREVER delivers exclusive designs
            that embody both comfort and class. Transform your wardrobe into a
            collection of true luxury with us.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            At FOREVER, our mission is to redefine luxury fashion by offering
            curated, high-quality pieces that inspire confidence and elegance.
            We aim to provide timeless style solutions that cater to the modern
            individual, ensuring every wardrobe is as unique and refined as its
            owner
          </p>
        </div>
      </div>

      <div className=" text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className=" text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className=" text-gray-600">
            With our user-friendly interface and hassle- free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className=" text-gray-600">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
      <Newsletterbox />
    </div>
  );
};

export default About;
