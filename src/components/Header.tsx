import styles from "./header.module.css"

type HeaderPros ={
    query: string; 
    setQuery: (query: string)=>void; 
};
const Header = ({query, setQuery}: HeaderPros) =>{
  
    return (
        <header className={styles.header}> 
            <input className={styles.input} 
            placeholder="Serch a Pokemon" 
            type="text" 
            value={query}
            onChange={(event)=> setQuery(event.target.value)}
            />
        </header> 
    )
}

export default Header