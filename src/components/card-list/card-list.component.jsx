import { Component } from "react"
import "./card-list.styles.css";
import Card from "../card/card.component";

const CardList=(props)=>{
  const {filmonster}=props;
  return (
    <div className='card-list'>
        {
          filmonster.map((monster)=>{
            const {id,name,email}=monster
            return (
            
               <Card id={id} name={name} email={email}/>
              )
          })  
        }
            </div>
  )

  
}

export default CardList;

// class CardList extends Component{
//     render(){
//         // console.log('render from cardilst');
//         const {filmonster}=this.props;
//         return (
//             <div className='card-list'>
//         {
//           filmonster.map((monster)=>{
//             const {id,name,email}=monster
//             return (
            
//                <Card id={id} name={name} email={email}/>
//               )
//           })  
//         }
//             </div>
        
//     )}
// }

