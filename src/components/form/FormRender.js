import React from 'react'

function FormRender(props) {
    return(
        <div className="form_block">
            <form className="form" methos="POST" onSubmit={props.handleSubmit}>
                <input 
                    type="text"
                    name="firstName"
                    value={props.firstName}
                    onChange={props.handleInput}
                    placeholder="First Name"
                /><br/>
                <input 
                    type="text" 
                    name="surName"
                    value={props.surName}
                    onChange={props.handleInput}
                    placeholder="SurName"
                /><br/>
                <input 
                    type="text"
                    name="location"
                    value={props.location}
                    onChange={props.handleInput}
                    placeholder="Home Adress"
                /><br/>
                <textarea 
                    name="prgLng"
                    value={props.prgLng}
                    onChange={props.handleInput}
                    placeholder="Known Programming Languages"
                />
                <label>Are you Married?
                    <input 
                        type="checkbox"
                        name="isMarried"
                        value={props.isMarried}
                        onChange={props.handleInput}
                    />
                </label><br/>
                <label>
                    <input 
                        type="radio"
                        name="sex"
                        value="Male"
                        onChange={props.handleInput}
                    />Male
                </label>
                <label>
                    <input 
                        type="radio"
                        name="sex"
                        value="Female"
                        onChange={props.handleInput}
                    />Female
                </label>
                <select 
                    name="area"
                    value={props.area}
                    onChange={props.handleInput}
                >
                    <option 
                        value="">Choose your area
                    </option>
                    <option 
                        value="Web">Web
                    </option>
                    <option 
                        value="Sofware Dev">Sofware Dev
                    </option>
                    <option 
                        value="DevOps">DevOps
                    </option>
                    <option
                        value="Quality Control">Quality Control
                    </option>
                </select>
                <button 
                    type="submit"
                    className="sbm_btn"
                    value="submit">{"Log "+(!props.isLoggedin ? "In" : "Out")}
                </button>
            </form>
            <h1>{"You're logged "+(props.isLoggedin ? "in as "+(props.firstName)+" "+(props.surName) : "out")}</h1>
        </div>
    )
}

export default FormRender;