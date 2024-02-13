const OfflinePage = () => {
    return (
        <>
            <div className="loadingContainer">
                <div>

                    <div className="avatar Offline bg-gradient-to-r from-red-500 via-red-500 via-red-500 to-red-500 p-4 avatar">
                        <img  src="https://static.vecteezy.com/system/resources/previews/005/556/711/non_2x/no-wifi-wireless-icon-no-wi-fi-connection-icon-no-wireless-connections-vector.jpg" alt="Avatar" />
                    </div>

                    <p>&nbsp;</p>
                    <p align="center" className="text-3xl"> <span className="font-bold text-blue-600 ">NO </span><span className="font-bold text-red-500">INTERNET </span></p>
                    <p>&nbsp;</p>
                    <div className="lineLoading"
                    >
                        <span className="text-sm px-2">Connecting...</span>
                        <div className="move bg-red-500"></div>
                        <div className="move bg-green-500"></div>

                    </div>

                    <footer>
                        <p>&nbsp;</p>
                        <div>

                            <p align="center" className="text-sm text-red-500 font-bold">You Are Offline.</p>
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
export default OfflinePage