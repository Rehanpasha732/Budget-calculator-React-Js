import React, { useState } from "react";
import "./budget.css"

function Budget() {

    const [data, setdata] = useState([])
    const [charge, setCharge] = useState("")
    const [amount, setAmount] = useState("")
    const [num, setNum] = useState(0)
    const [index, setIndex] = useState(0)
    const [showbtn, setShowbtn] = useState("hide")
    const [disabled, setDisabled] = useState("show")




    const addData = () => {
        if (charge === "" || amount === "") {
            alert("FILL IT")
        }
        else {

            let obj = {
                charge: charge,
                amount: amount,
            }
            setdata(data.concat([obj]))
            console.log(data, "array of object")
            let con = +amount
            setNum(con + num)
            setCharge("")
            setAmount("")
        }
    }
    // remove data function
    const removeData = () => {
        setdata([])
        setNum(0)
    }

    const editData = () => {
        data[index].charge = charge
        data[index].amount = amount
        setAmount("")
        setCharge("")
        setShowbtn("hide")
        setDisabled("show")
        setNum(+amount + num)



    }

    //  total spent
    return (
        <>
            <main class="app">
                <div class="boxes">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div className="budget">
                    <h1>Budget Calculator</h1>
                    <div className="data">
                        <span className="charge"><b >Charge</b><input className="input1" placeholder="eg.Rent" value={charge} onChange={(e) => { setCharge(e.target.value) }} /></span>
                        <b>Amount</b><input className="input2" type="number" step="0.01" placeholder="eg.400" value={amount} onChange={(e) => { setAmount(e.target.value) }} /><br />

                        {
                            showbtn === "hide" ?
                                <button className="add" onClick={addData}>ADD DATA</button>
                                : <button className="add" onClick={editData}>update</button>
                        }

                        <table>
                            <tr >
                                <th></th>
                                <th></th>
                            </tr>
                            {data.map((v, i) => {
                                return (
                                    <div>
                                        <tr>

                                            <td >{v.charge}</td>
                                            <td >{v.amount}</td>

                                            {
                                                disabled === "show"
                                                    ?

                                                    <>

                                                        <button className="dlt" onClick={() => {
                                                            let editone = data[i].charge
                                                            let editwo = data[i].amount

                                                            setCharge(editone)
                                                            setAmount(editwo)
                                                            setShowbtn("show")
                                                            setNum(num - data[i].amount)
                                                            setIndex(i)

                                                            setDisabled("hide")


                                                        }} >{editData}Edit</button>


                                                        <button className="edit" onClick={() => {
                                                            let dltnumber = data[i].amount
                                                            setNum(num - dltnumber)
                                                            let deleteone = data.filter((value, index) => {
                                                                return i != index
                                                            })
                                                            setdata(deleteone)
                                                            setShowbtn("hide")
                                                            setNum(num)
                                                        }}> Delete</button>


                                                    </>
                                                    : <>

                                                        <button className="dltdis" >{editData}Edit</button>


                                                        <button className="dltdis" > Delete</button>
                                                    </>
                                            }
                                        </tr>

                                    </div>


                                )

                            })
                            }
                        </table>
                        {data.length ?
                            <>
                                <h1>sum {num}</h1>
                                <button onClick={removeData} className="remove">REMOVE ALL</button>
                            </>
                            :
                            null
                        }


                        {/* <button className="total" onClick={totalSpent} >total</button> */}
                    </div>

                </div>
            </main>


        </>
    );

}
export default Budget