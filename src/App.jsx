import React from "react"
import Header from "./Header"
import Table from "./Table"
import Piechart from "./Piechart"



function App(){
    
    const [value,setValue]=React.useState(true);

    function setiValue(){
        setValue(!value);
    }

    return <div><Header />
                <div class="middle"><div class="btn btn1"><button onClick={setiValue}>{value? "Next Page":"Previous Page"}</button></div></div>
                {value? <Table />:<Piechart/>}
            </div>
}

export default App