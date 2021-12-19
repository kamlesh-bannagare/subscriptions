import './App.css';
import {useState} from 'react';
import Container from './templates/Container'
// import Subscription from './Subscription/Subscription';
import NewSubscription from './Subscription/NewSubscription/NewSubscription'
import Filter from './Subscription/Filter';
import SubscriptionList from'./Subscription/SubscriptionList';
import SubscriptionChart from './Subscription/SubscriptionChart';
const INITIAL_SUBSCRIPTION=[{
  id:"1",
  date:(new Date('2021','03','23')),
  title:"Monthly Subscription",
  amount:"125.60"
},
{
 id:"2",
 date:(new Date('2020','06','28')),
 title:"Annual Subscription",
 amount:"1125.00"
},
{
id:"3",
date:(new Date('2021','09','05')),
title:"Quarterly Subscription",
amount:"425.50"
}]
const App = () => {
const [subscriptions,setSubscriptions]=useState(INITIAL_SUBSCRIPTION)
const [filteredYear,setFilteredYear]=useState('2020');
const addSubscriptionHandler=(data)=>{
  //  subscriptions.push(data);
   setSubscriptions(prevState=>{return [data,...subscriptions]})
   console.log("on add Subscription",subscriptions)
}
const filterChangeHandler =(data)=>{
  setFilteredYear(data);
   console.log('filter Change handler', data)
}
const filteredSubscriptions=subscriptions.filter((item)=>{
  return item.date.getFullYear().toString() === filteredYear
})

// let content=<h3>No data found</h3>;
// if(filteredSubscriptions.length!==0){
//   content= filteredSubscriptions.map((subscription) =>
//   <Subscription key={subscription.id} date={subscription.date}  
//   title={subscription.title} amount={subscription.amount} />)
// }
  return (
  <Container>
    <NewSubscription onAddSubscription={addSubscriptionHandler}/>
        <Filter onFilterChange={filterChangeHandler} selectedFilter={filteredYear}/>
      <SubscriptionChart  filteredSubscriptions ={filteredSubscriptions}/>
        <SubscriptionList subscriptions={filteredSubscriptions} />
        
        {/* {content} */}

        {/* {filteredSubscriptions.length===0 && <h3>No data found</h3>}
        {filteredSubscriptions.length !== 0 &&
         filteredSubscriptions.map((subscription) =>
         <Subscription key={subscription.id} date={subscription.date}  
         title={subscription.title} amount={subscription.amount} />) } */}
       
        {/* {filteredSubscriptions.length===0 ? <h3>No data found</h3>:
         filteredSubscriptions.map((subscription) =>
         <Subscription key={subscription.id} date={subscription.date}  
         title={subscription.title} amount={subscription.amount} />)
        } */}
        
        {/* {filteredSubscriptions.map((subscription) =>
        <Subscription key={subscription.id} date={subscription.date}  
        title={subscription.title} amount={subscription.amount} />)} */}
        
        {/* <Subscription date={subscriptions[0].date} title={subscriptions[0].title} amount={subscriptions[0].amount}/>
        <Subscription date={subscriptions[1].date} title={subscriptions[1].title} amount={subscriptions[1].amount}/>
        <Subscription date={subscriptions[2].date} title={subscriptions[2].title} amount={subscriptions[2].amount}/> */}
      </Container>
  );
}

export default App;
