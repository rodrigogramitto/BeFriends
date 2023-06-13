
function DiscoverButtons () {
    return (

        <div id="disvoerBtns" className="flex justify-center gap-20">
            <button id="rejectbtn" className="btn btn-square">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <button id="acceptbtn" className="btn btn-square">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" >
                    <polyline points="20 6 9 17 4 12" />
                </svg>
            </button>
        </div>
    )
}

export default DiscoverButtons;