import './NewSubscription.css';
import {useState} from 'react';
import FormSubscription from './FormSubscription';
const NewSubscription =(props) =>{
    const [showForm,setShowForm]=useState(false)
   const onSaveHandler = (data) =>{
        const subscriptionData={...data,id:Math.random().toString()};
        props.onAddSubscription(subscriptionData)
        console.log("on save", subscriptionData);
        setShowForm(false);
    }
    const showFormHandler=()=>{
        setShowForm(true)
        console.log('show form', showForm)
    }
    const hideFormHandler=()=>{
        setShowForm(false);
    }
    return <div className="new_subscription">
       {showForm && <FormSubscription onSave={onSaveHandler} onCancel={hideFormHandler} /> } 
        <button type="button" onClick={showFormHandler}>Add New</button>
        </div>
       
}
export default NewSubscription