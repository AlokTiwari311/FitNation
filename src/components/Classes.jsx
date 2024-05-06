
import React, { useEffect } from 'react';

const Classes = () => {
    useEffect(() => {
        const projectAnimation = () => {
            const container = document.querySelector(".elem-container");
            const fixed = document.querySelector(".fixed-image");

            const handleMouseEnter = () => {
                fixed.classList.remove("hidden");
                fixed.classList.add("block");
            };

            const handleMouseLeave = () => {
                fixed.classList.remove("block");
                fixed.classList.add("hidden");
            };

            const handleElemMouseEnter = (e) => {
                const image = e.getAttribute("data-image");
                fixed.style.backgroundImage = `url("${image}")`;
            };

            container.addEventListener("mouseenter", handleMouseEnter);
            container.addEventListener("mouseleave", handleMouseLeave);

            const elems = document.querySelectorAll(".elem");
            elems.forEach((e) => {
                e.addEventListener("mouseenter", () => handleElemMouseEnter(e));
            });

            // Cleanup event listeners on unmount
            return () => {
                container.removeEventListener("mouseenter", handleMouseEnter);
                container.removeEventListener("mouseleave", handleMouseLeave);
                elems.forEach((e) => {
                    e.removeEventListener("mouseenter", handleElemMouseEnter);
                });
            };
        };

        projectAnimation();
    }, []);

    const projects = [
        {
            name: "Yoga",
            image: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1644_Copy%20of%20DSC04084.webp"
        },
        {
            name: "Mind Body",
            image: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16f5_Copy%20of%20Nike_Soho_50th_SU22_FL1_6252.webp"
        },
        {
            name: "Body Shape",
            image: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b16cb_Copy%20of%20Nike_Soho_AMD21_0772_LORES.webp"
        },
        {
            name: "Dance Mix",
            image: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1732_Nike_HOI_50th_SU22_FL1_5393.webp"
        },
        {
            name: "Workout ",
            image: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1694_Copy%2520of%2520211023_NikeCHI_PlayNewKids_Beauty-26-p-1080.webp"
        },
        {
            name: "WarmUp",
            image: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b163a_Copy-of-IMG_1179.webp"
        },
        {
            name: "NYFC Popup",
            image: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1712_AM704009.webp"
        }
    ];


    return (
        <div className="w-full min-h-[210vh] class_image">
            <div className="fixed-image hidden group bg-inherit"></div>

            <section className="h-4/5 pt-40 w-full relative pb-16 bg-inherit" id="projectSection">
                <div className="border-t-2 border-gray-400 flex items-center py-0 px-8">
                    <p className="text-uppercase font-light text-lg w-full inline-block text-right">featured projects</p>
                </div>

                <ul className="elem-container w-8/12 absolute bg-transparent right-0">
                    <p className='text-2xl text-white mb-4 ml-10'>Hello guys</p>
                    {projects.map((project, index) => (
                        <li key={index} className="elem border-b-2 border-white" data-image={project.image}>
                            <div className="overlay absolute h-full w-full bg-orange-500 top-[-100%] left-0 transition-all duration-300 group-hover:top-0"></div>
                            <a href="#" className="text-4xl font-bold text-white z-10 w-full group-hover:underline">
                                {project.name}
                            </a>
                            <div className=' mx-auto w-full flex  justify-between alok'>
                                <span className='text-center '>
                                    <p className='text-xl font-medium text-gray-600 '>GOAL</p>
                                    <p className='text-xl font-medium text-white '>Fit</p>
                                </span>
                                <span className='text-center'>
                                    <p className='text-xl font-medium text-gray-600 '>GOAL</p>
                                    <p className='text-xl font-medium text-white '>Fit</p>
                                </span>
                                <span className='text-center'>
                                    <p className='text-xl font-medium text-gray-600 '>GOAL</p>
                                    <p className='text-xl font-medium text-white '>Fit</p>
                                </span>



                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Classes;