import './FormSubscription.css';
import { useState, useEffect, useReducer } from 'react';

const formReducerFn = (latestState, action) => {
    console.log("in form reducer fn:", latestState, action)
    if (action.type === 'TITLE') {
        return { ...latestState, userTitle: action.val }
    }
    else if (action.type === 'DATE') {
        return { ...latestState, userDate: action.val }
    }
    else if (action.type === 'AMOUNT') {
        return { ...latestState, userAmount: action.val }
    }
    return { userTitle: 'Enter Subscription Title', userDate: '', userAmount: 'Enter Amount' }
}
const FormSubscription = (props) => {
    // const [userTitle,setUserTitle]=useState("");
    // const [userDate,setUserDate]=useState("");
    // const [userAmount,setUserAmount]=useState("");
    const [formReducer, setFormReducer] = useReducer(formReducerFn, { userTitle: 'Enter Subscription Title', userDate: '', userAmount: 'Enter Amount' })
    // const [form, setForm] = useState({ userTitle: 'Enter Subscription Title', userDate: '', userAmount: 'Enter Amount' })
    const [isValid, setIsValid] = useState(true)
    const { userTitle: titleReducer } = formReducer
    useEffect(() => {
        setTimeout(() => {
            console.log("using Effect")
            if (titleReducer.trim().length > 0) {
                setIsValid(true)
            }
        }, 500)
        return () => { console.log("cleanup function") }
    }, [titleReducer])
    const titleChangeHandler = (events) => {
        //   setUserTitle(events.target.value)
        //   setForm({...form,userTitle:events.target.value})
        // if (events.target.value.trim().length > 0) {
        //     setIsValid(true)
        // }
        setFormReducer({ type: 'TITLE', val: events.target.value })
        // setForm((prevState) => {
        //     return { ...prevState, userTitle: events.target.value }
        // })

    }
    const dateChangeHandler = (events) => {
        // setForm({...form,userDate:events.target.value})
        setFormReducer({ type: 'DATE', val: events.target.value })
        // setForm((prevState) => {
        //     return { ...prevState, userDate: events.target.value }
        // })
        // setUserDate(events.target.value);
    }
    const amountChangeHandler = (events) => {
        // setForm({...form,userAmount:events.target.value}) 
        setFormReducer({ type: 'AMOUNT', val: events.target.value })
        // setForm((prevState) => {
        //     return { ...prevState, userAmount: events.target.value }
        // })

        // setUserAmount(events.target.value);
    }
    const submitHandler = (events) => {
        events.preventDefault();
        if (formReducer.userTitle.trim().length === 0) {
            setIsValid(false)
            return
        }
        const Subscription = { title: formReducer.userTitle, amount: formReducer.userAmount, date: new Date(formReducer.userDate) };
        props.onSave(Subscription);
        console.log("on submit", Subscription)
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new_subscription_controls">
                <div className={`new_subscription_control ${!isValid ? 'invalid' : ''}`}>
                    {/* {style={{ color: !isValid ? 'red' : 'black' }}} */}
                    {/* {style={{ borderColor: !isValid ? 'red' : 'black' }}} */}
                    <label>Title</label>
                    <input type="text" value={formReducer.userTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className="new_subscription_control">
                    <label>Date</label>
                    <input type="date" value={formReducer.userDate} onChange={dateChangeHandler}></input>
                </div>
                <div className="new_subscription_control">
                    <label>Amount</label>
                    <input type="text" value={formReducer.userAmount} onChange={amountChangeHandler}></input>
                </div>
            </div>
            <div className="new_subscription_actions">
                <button type="button" className="danger" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Save</button>
            </div>
        </form>
    )
}
export default FormSubscription