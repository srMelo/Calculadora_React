import React from "react";


function Botoes (props){
    const {sendValue, clear, makeSum, makeSub, makeMult, makeDivid, response} = props


    return (
        <div id="containerBtn">
            <div id="colum">
                <div id="btn" onClick={()=> sendValue(7)}>7</div>
                <div id="btn" onClick={()=> sendValue(8)}>8</div>
                <div id="btn" onClick={()=> sendValue(9)}>9</div>
                <div id="operator" onClick={() => clear()}>c</div>
            </div>
            <div id="colum">
                <div id="btn" onClick={()=> sendValue(4)}>4</div>
                <div id="btn" onClick={()=> sendValue(5)}>5</div>
                <div id="btn" onClick={()=> sendValue(6)}>6</div>
                <div id="operator" onClick={()=> makeDivid()} >/</div>
            </div>
            <div id="colum">
                <div id="btn" onClick={()=> sendValue(1)}>1</div>
                <div id="btn" onClick={()=> sendValue(2)}>2</div>
                <div id="btn" onClick={()=> sendValue(3)}>3</div>
                <div id="operator" onClick={()=> makeSub()}>-</div>
            </div>
            <div id="colum">
                <div id="btn" onClick={()=> sendValue(0)}>0</div>
                <div id="btn" onClick={()=> sendValue('.')}>.</div>
                <div id="operator" onClick={()=> makeSum()}>+</div>
                <div id="operator" onClick={()=> makeMult()}>*</div>
            </div>
            <div id="colum">
                <div id="iqual" onClick={()=> response()}>=</div>
            </div>
        </div>
    )
}

export default Botoes