import React from "react";
import pana from "../assets/pana.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import Right from "../assets/Right.png";
import triangle from "../assets/triangle.png";

const Products = () => {
    return (
        <>
            {/* about text */}
            <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="product">
                <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center">
                    <div>
                        <img src={pana} alt="aboutImg" />
                    </div>
                    <div className="md:w-3/5">
                        <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/6">
                            How to design your site footer like we did
                        </h2>
                        <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
                            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
                            augue nec tincidunt molestie, massa nunc varius arcu, at
                            scelerisque elit erat a magna. Donec quis erat at libero ultrices
                            mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
                            dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
                            ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
                            commodo faucibus efficitur quis massa. Praesent felis est, finibus
                            et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
                            ipsum id gravida.{" "}
                        </p>
                        <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralGrey">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            {/* 2nd part */}
            <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="md:w-1/3">
                        <img src={triangle} alt="image9" />
                    </div>
                    <div className="md:w-2/3 mx-auto">
                        <div>
                            <p className="md:w-4/5 text-sm text-neutralGrey mb-8 leading-7">
                                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                                laoreet elit at ligula molestie, nec molestie mi blandit.
                                Suspendisse cursus tellus sed augue ultrices, quis tristique
                                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                                eget efficitur libero condimentum id. Curabitur id nibh id sem
                                dignissim finibus ac sit amet magna.
                            </p>
                            <h5 className="text-brandPrimary text-xl font-semibold mb-2">
                                Tim Smith
                            </h5>
                            <p className="text-base text-neutralGrey mb-8">
                                British Dragon Boat Racing Association
                            </p>
                            <div>
                                <div className="flex items-center gap-8 flex-wrap">
                                    <img src={icon1} alt="icon1" className="cursor-pointer" />
                                    <img src={icon2} alt="icon2" className="cursor-pointer" />
                                    <img src={icon3} alt="icon3" className="cursor-pointer" />
                                    <img src={icon4} alt="icon4" className="cursor-pointer" />
                                    <img src={icon5} alt="icon5" className="cursor-pointer" />
                                    <img src={icon6} alt="icon6" className="cursor-pointer" />
                                    <div>
                                        <a
                                            href="/"
                                            className="font-bold text-brandPrimary hover:text-neutral-700 flex items-center "
                                        >
                                            Meet all customers
                                            <img src={Right} alt="" className="inline-block ml-2" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Products;
