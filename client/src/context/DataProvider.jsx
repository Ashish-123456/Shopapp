import { createContext, useState,React} from "react"

const DataContext=createContext(null);
const DataProvider=({children})=>{
    const [account,setAccount]=useState('');
     console.log("in dataprovider",account)
    return (
        <DataContext.Provider 
         value={{account,setAccount}}
        >
            {children}
        </DataContext.Provider>
      )
}
 export { DataProvider,DataContext };