import { Component } from 'react';
import { useState,useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';


const App=()=>{
  const [searchfield,setsearchfield]=useState('')
  const [monsters,setmonsters]=useState([])
  const [filmonster,setfilterMonster]=useState(monsters)
  const onSearchChange=(event)=>{
    //what we type is we get value using event.target.value  // console.log(event.target.value);
  let searchfieldString=event.target.value.toLocaleLowerCase();
   setsearchfield(searchfieldString)
  }
  // console.log('render');
  ///only runs once
  useEffect(()=>{
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) =>setmonsters(users));
  },[]);

  ///only runs if state of monster or filtermonster changes
  useEffect(()=>{
    
    const newfilmonster=monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchfield)
    })
  setfilterMonster(newfilmonster)
  console.log('effect side');
  },[searchfield,monsters])
  
  return (
    <div className="App">
         <h1 className='app-title'> MONSTER ROLODEX</h1>
        <SearchBox 
        className='search-box' 
        onchangeHandler={onSearchChange} 
        placeholder='search monster'
        />
        <CardList filmonster={filmonster}/>
      </div>

  )
}

export default App;

// class App extends Component {
//   constructor(){
    
//     super();

//     this.state={
//       m:[],
//       searchfield:''
//     };
//   }

//   componentDidMount(){
    
//     fetch('https://jsonplaceholder.typicode.com/users')
//      .then((response)=>response.json())
//      .then((users)=>
//       this.setState(
//         ()=>{
//           return {m:users}
//         }
//         )
//      );

//   }

//    onSearchChange=(event)=>{
//     //what we type is we get value using event.target.value
//   // console.log(event.target.value);
//   let searchfield=event.target.value.toLocaleLowerCase();

//   this.setState(()=>{
//     return {searchfield} ///updates the state object with same name and assosiated value
//   })
//   }

//   render(){
//     console.log('render from appjs');
//     const {m,searchfield}=this.state
//     const {onSearchChange}=this
//     //what we type is searched and rendered using search field
//     const filmonster=m.filter(
//       (monster)=>{
//         return monster.name.toLocaleLowerCase().includes(searchfield)
//       })
//     return (
//       <div className="App">
//          <h1 className='app-title'> MONSTER ROLODEX</h1>
//         <SearchBox 
//         className='search-box' 
//         onchangeHandler={onSearchChange} 
//         placeholder='search monster'
//         />
//         <CardList filmonster={filmonster}/>
//       </div>
//     );
//   }
  
// }


