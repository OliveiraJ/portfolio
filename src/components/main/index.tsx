import styled from "styled-components";
import { ComponentContainer } from "../../elements/containers";
import { Outlet } from "react-router-dom";

function Page(){
   return (
       <ComponentContainer>
           <Outlet/>
       </ComponentContainer>
   )
}


export {Page}