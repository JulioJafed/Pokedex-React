 import React, { Component } from 'react'
 import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import PokemonPic from '../assets/pikachu.png'
import LocationPic from '../assets/pointer.png'
import ItemsPic from '../assets/pokeball.png'




 export class Footer extends Component {
   render() {
     return (
       <footer className={styles.footer}> 
         <Link className={styles.footerLink} to ="/pokemons">
            <img className={styles.footerIcon} src={PokemonPic}  alt="PokeBall "/>
            Pokemon
         </Link> 
        
         <Link className={styles.footerLink} to ="/map">
            <img className={styles.footerIcon} src={LocationPic}  alt="PokeBall "/>
            Map
         </Link> 
         
         <Link className={styles.footerLink} to ="/items">
            <img className={styles.footerIcon} src={ItemsPic}  alt="PokeBall "/>
            Items
         </Link> 

       </footer>
     )
   }
 }
 
 export default Footer