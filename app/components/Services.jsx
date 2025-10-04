import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Services = () => {
    return (
        <div id="services" className="w-full px-[8%] py-20 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-ovo">What I offer</h4>
            <h2 className="text-center text-5xl font-ovo">My Services</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
                perspiciatis velit dolor veniam maiores saepe mollitia maxime, natus,
                recusandae labore ducimus delectus. Saepe enim magni ea neque
            </p>




            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-10 ">
                {serviceData.map(({ icon, title, description, link }, index) => (
                    <div key={index} className="border border-gray-700 rounded-lg px-8 py-12 cursor-pointer hover:-translate-y-3 duration-500  flex flex-col  justify-center">
                        <Image src={icon} alt="" className="w-10" />
                        <h3 className="text-lg my-4 text-gray-700">{title}</h3>
                        <p className="text-sm text-gray-600 leading-5">{description}</p>
                        <a href={link} className="flex items-center gap-2 text-sm mt-5">Read more <Image src={assets.right_arrow} alt="" className="w-4" /></a>
                    </div>
                ))}
            </div>
             <a href="" className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px]  border-gray-700 rounded-full  px-10 mx-auto my-20 py-3 hover:bg-gray-600 hover:text-white duration-500">
                            Show more <Image src={assets.right_arrow_bold} alt="Right arrow" className="w-4"/>
                        </a>
        </div>
    );
};

export default Services;
