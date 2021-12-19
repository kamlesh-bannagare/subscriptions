import './Container.css'
// import styled from 'styled-components'
 const Container = (props) => {
    const classes="container " + props.className
 return <div className={classes}> {props.children}</div>
}
// const Container = styled.div`{
//    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
//    border-radius: 12px;
// }`;
export default Container