// import { useState } from "react"

export default function UserInput({userInputData, handleChangefx}){
    

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                <label>Initial Investment</label>
                <input type="number" required 
                value={userInputData.initialInvestment}
                onChange={(event)=>handleChangefx('initialInvestment',event.target.value)}
                />
                </p>
                <p>
                <label>Annual Investment</label>
                <input type="number" required 
                value={userInputData.annualInvestment}
                onChange={(event)=>handleChangefx('annualInvestment',event.target.value)}
                />
                </p>
            </div>
            <div className="input-group">
                <p>
                <label>expected Return</label>
                <input type="number" required
                value={userInputData.expectedReturn}
                onChange={(event)=>handleChangefx('expectedReturn',event.target.value)}
                />
                </p>
                <p>
                <label>Duration</label>
                <input type="number" required 
                value={userInputData.duration}
                onChange={(event)=>handleChangefx('duration',event.target.value)}
                />
                </p>
            </div>


        </section>
    )
}