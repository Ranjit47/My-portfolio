import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Work = () => {
    return (
        <div id="work" className="w-full px-[8%] py-20  scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-ovo">My portfolio</h4>
            <h2 className="text-center text-5xl font-ovo">My Work</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
                Welcome to my portfolio section! Here, you'll find a curated selection
                of my recent projects that showcase my skills and expertise in web
                development. Feel free to explore and see the diverse range of work I've accomplished.
            </p>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-10 max-w-7xl mx-auto">
                {workData.map((project, index) => (
                    <div className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group" key={index} style={{ backgroundImage: `url(${project.bgImage})` }} >
                        <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                            <div>
                                <h2 className="font-semibold text-gray-500">{project.title}</h2>
                                <p className="text-sm text-gray-700">{project.description}</p>
                            </div>
                            <div className="border border-black  w-9 rounded-full aspect-square flex items-center justify-center">
                                <Image src={assets.send_icon} alt="" className="w-5" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <a href="" className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px]  border-gray-700 rounded-full  px-10 mx-auto my-20 py-3 hover:bg-gray-600 hover:text-white duration-500">
                Show more <Image src={assets.right_arrow_bold} alt="Right arrow" className="w-4"/>
            </a>
        </div>
    );
};

export default Work;
