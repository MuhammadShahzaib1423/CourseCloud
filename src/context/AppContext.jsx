import { createContext, useEffect,useState } from "react";
import { dummyCourses } from "../Component/Assets/assets";

export const AppContext = createContext();

export const AppContextProvider = (props) => {

    const currency = import.meta.env.VITE_CURRENCY;
    const [allCourses,SetAllCourses] = useState([]);

    const fetchAllCourses = async () =>{
        SetAllCourses(dummyCourses);
    }
    useEffect(()=>{
        fetchAllCourses();
    },[])

    const value = {
        currency,
        allCourses
    }
  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
