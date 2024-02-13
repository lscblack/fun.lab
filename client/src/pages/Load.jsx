import React, { useState, useEffect } from "react";
import '../assets/styles/Loading.css'
function Load() {

    return (
        <>
   
            <div className="loadingContainer">
                <div>

                    <div className="avatar bg-gradient-to-r from-blue-500 via-red-500 via-blue-500 to-green-500 p-4 avatar">
                        <img src="../../images/trans.png" alt="Avatar" />
                    </div>

                    <p>&nbsp;</p>
                    <p align="center" className="text-3xl">Welcome To <span className="font-bold text-blue-600 ">FUN </span><span className="font-bold text-red-500">LAB </span></p>
                    <p>&nbsp;</p>
                    <div className="lineLoading"
                    >
                        <span className="text-sm px-2">Loading...</span>
                        <div className="move bg-blue-500"></div>
                        <div className="move bg-blue-500"></div>
                        <div className="move bg-green-500"></div>
                        <div className="move bg-green-500"></div>
                        <div className="move bg-red-500"></div>
                        <div className="move bg-red-500"></div>

                    </div>

                    <footer>
                        <p>&nbsp;</p>
                        <div>
                            <div className="flex justify-between">
                                <a href="https://lscblack.github.io/portfolio/" className="text-sm hover:text-blue-600"><i className="fa fa-user-circle"></i> Author  </a>
                                <a href="#" className="text-sm hover:text-blue-600"><i className="fa fa-info-circle"></i> About </a>
                                <a href="#" className="text-sm hover:text-blue-600"><i className="fa fa-phone"></i> Contact</a>
                            </div>
                            <p>&nbsp;</p>
                            <p align="center" className="text-sm">Copyright © 2023. All rights reserved.</p>
                        </div>
                        <div className="down-future"><span className="font-bold text-blue-400">Developer </span><span className="font-bold text-red-400"> lscblack</span></div>
                    </footer>
                </div>
            </div> 

        </>
    )
}
export default Load