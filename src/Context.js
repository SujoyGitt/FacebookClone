import { createContext, useContext, useState } from "react";
const postContext = createContext();
export const usePostContext = () => useContext(postContext);
export const postProvider = ({children}) =>{

}
