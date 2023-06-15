import React from "react";

const InfoSection = () => {
  return (
    <section className="bg-white py-10 flex flex-col md:flex-row gap-4 justify-center items-center">
      <div className="container md:w-1/2 mx-auto flex flex-col items-center">
        
        <div className="flex flex-col justify-start items-start text-left">
          <p className="text-xl font-bold mb-2 text-blue-600 border-l-2 h-auto border-blue-600">ABOUT COMPANY</p>
          <p className="text-lg mb-2 font-bold">Who We Are</p>
          <p className="text-lg">Over <span className="text-blue-600 font-bold">2,500+</span> Customers</p>
        </div>
      
        <hr className="my-8 w-full bg-blue-600" />
      <p className="container mx-auto text-center text-lg">
        We are a team of passionate IT professionals dedicated to delivering
        cutting-edge solutions to businesses of all sizes. Our expertise spans
        across a range of industries, and we are committed to providing
        customized services to suit your unique needs
      </p>
        
      </div>

      <div className="md:w-1/2 flex justify-end py-4">
          <img
            src="https://qreliance.com.ng/static/assets/images/home1/about-right-image-1.jpg"
            alt="Image"
            className="max-w-full h-auto rounded-lg"
          />
        </div>


     
    </section>
  );
};

export default InfoSection;
