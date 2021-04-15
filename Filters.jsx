import React ,{useState,useReducer} from "react"
import CollapsablePanel from "./CollapsablePanel"
import { labels } from "../utils"
import {FiltersStyled} from "./"
import {lang} from "../utils"
import Styled from "styled-components"

//import arrowBlue from "../img/arrow-blue.svg";


const Li = Styled.li`
cursor: pointer !important;
list-style: none !important;
padding-left: 15px !important;
    font-size: 14px !important;
    line-height: 18px !important;
    font-family: Open_Sans !important;
`;

const P  = Styled.li`
cursor: pointer;
`;
const Anc = Styled.a`
list-style: none;
padding: 0px 0px 0px 15px;
line-height: 1.5;
font-size: 14px;
font-family: Open_Sans;
color: #00a3d8 !important;
font-weight: 400;
}
`
const ClearAllBtn = Styled.button`
    padding: 0.5rem;   
    margin: 0.3rem;
    width: 100%;
    border: 1px solid #00a3d8;
    color: #00a3d8;
    background-color: #fff;
    &:hover{
      background-color: #00a3d8;
      color:#fff;
    }
}
`

const Constants ={
  ActionUniqueBranchMoreOrLess :        'UNIQUE_BRANCH_MORE_LESS_CLICK',
  ActionUniqueGrpCibleMoreOrLess :      'UNIQUE_GROUP_CIBLE_MORE_LESS_CLICK',
  ActionUniqueGrpDeProduitMoreOrLess :  'UNIQUE_GROUP_DE_PRODUIT_MORE_LESS_CLICK'
}


export default function Filters({ faqs, onFilterClick ,displayFilters}) {

const[isSomeFilterClicked,setIsSomeFilterClicked] = useState(false)
let arrowBlue ="/Documents/Qna/Img/arrow-blue.svg";

  const reducerFx = (state,action)=>{
    switch(action.type){

      case Constants.ActionUniqueBranchMoreOrLess:      
          return {
              ...state, 
              activeClassUnqBranch: state.activeClassUnqBranch ? "":"open",
              countPropsUnqBranch: state.countPropsUnqBranch===6? 200:6
              }

      case Constants.ActionUniqueGrpCibleMoreOrLess:      
          return {
            ...state, 
            activeClassGrpCible: state.activeClassGrpCible ? "":"open",
            countPropsGrpCible: state.countPropsGrpCible===6? 200:6
          }

      case Constants.ActionUniqueGrpDeProduitMoreOrLess:      
          return {
            ...state, 
            activeClassGrpDeProduit: state.activeClassGrpDeProduit ? "":"open",
            countPropsGrpDeProduit: state.countPropsGrpDeProduit===6? 200:6
          }
          default:
    }
  }

  const [state, dispatch] = useReducer(reducerFx,  { 
                                                      activeClassUnqBranch: "",
                                                      activeClassGrpCible:"", 
                                                      activeClassGrpDeProduit:"",
                                                      countPropsUnqBranch:6,
                                                      countPropsGrpCible:6,
                                                      countPropsGrpDeProduit:6,
                                                    });


  const getCount = (key, category) => {
  let count = 0;
  faqs.forEach((f) => {
    let props = f[category];
    props.forEach((p) => {
      if (p === key) {
        count++;
      }
    });
  });
  return count;
  }
  //#region filterUniqueValues
  const getUniqueValues = (key) => {
    let all = [];
    faqs.forEach((f) => {
      if(f[key]!=null)
        all.push(...f[key]);
    });
    let unique = [...new Set(all)];
    return unique;
  };

  let uniqueBranches = getUniqueValues(labels.colbranch)
  uniqueBranches.sort((a,b) => getCount(b,labels.colbranch)-getCount(a,labels.colbranch))
  
  let uniqueGroupCible = getUniqueValues(labels.colgroupCible)
  uniqueGroupCible.sort((a,b) => getCount(b,labels.colgroupCible)-getCount(a,labels.colgroupCible))

  let uniqueGroupDeProduit = getUniqueValues(labels.colgroupeDeProduit)
  uniqueGroupDeProduit.sort((a,b) => getCount(b,labels.colgroupeDeProduit)-getCount(a,labels.colgroupeDeProduit)) 

  let uniqueProduct = getUniqueValues(labels.colproduct)
  uniqueProduct.sort((a,b) => getCount(b,labels.colproduct)-getCount(a,labels.colproduct)) 

  let uniqueTagLibre = getUniqueValues(labels.coltagsLibre)
  uniqueTagLibre.sort((a,b) => getCount(b,labels.coltagsLibre)-getCount(a,labels.coltagsLibre)) 
 
  const clearAllFilters = ()=>{
    window.location.reload() 
  }

  //#endregion
  
   const onFilterPress = (e)=>{
      setIsSomeFilterClicked(true) 
      onFilterClick(e);
   }


  return ( 
    <>
   
    <FiltersStyled displayFilters={displayFilters}  id="clpID">

    {isSomeFilterClicked && <ClearAllBtn onClick={clearAllFilters}> {labels.clearAllFilters[lang]} </ClearAllBtn>}
      

      {/* branche filter */}
      {uniqueBranches.length > 0 && (
        <CollapsablePanel filterSection ={true} name={labels.branch[lang]} initialCollapse={false}  className="test-case">
          <P
            data-aglivalue={labels.allFilter}
            data-aglicategory={labels.colbranch}
            onClick={onFilterPress}
            key={1}
          >
            {labels.allText[lang]}
          </P>

          {uniqueBranches.map((f, ind) =>
            {
              if( ind > state.countPropsUnqBranch-1)
                  return null
              else              
              return ( 
              <Li
                data-aglivalue={f}
                data-aglicategory={labels.colbranch}
                onClick={onFilterPress}
                key={ind}             
              >
                {f} ({getCount(f, labels.colbranch)})
              </Li>                     
            )
            }        
          )}
          
         <Anc href="#" onClick={()=>dispatch({type:Constants.ActionUniqueBranchMoreOrLess})}>
                {state.activeClassUnqBranch?labels.showLess[lang]:labels.showMore[lang] } 
                <img  alt="arror" className={`ms-searchref-moreicon ${state.activeClassUnqBranch}`} src={arrowBlue} hspace="5" />
         </Anc>

        </CollapsablePanel>
      )}

      {/* groupe cible filter */}
      {uniqueGroupCible.length > 0 && (
        <CollapsablePanel filterSection ={true} name={labels.groupCible[lang]} initialCollapse={false} className="test-case">
          <P
            data-aglivalue={labels.allFilter}
            data-aglicategory={labels.colgroupCible}
            onClick={onFilterPress}
            key={1}
          >
            {labels.allText[lang]}
          </P>

          {uniqueGroupCible.map((f, ind) => 
           {
            if( ind > state.countPropsGrpCible-1)
              return null
            else             
              return (
                <Li               
                  data-aglivalue={f}
                  data-aglicategory={labels.colgroupCible}
                  onClick={onFilterPress}
                  key={ind}
                >
                  {f} ({getCount(f, labels.colgroupCible)})
                </Li>
           )})
        }
                  
         <Anc href="#" onClick={()=>dispatch({type:Constants.ActionUniqueGrpCibleMoreOrLess })}>
             {state.activeClassGrpCible?labels.showLess[lang]:labels.showMore[lang] } 
          <img alt="active" className={`ms-searchref-moreicon ${state.activeClassGrpCible}`} src={arrowBlue}></img>
         </Anc>
        </CollapsablePanel>
      )}

      {/* GroupeDeProduit */}
      {uniqueGroupDeProduit.length > 0 && (
        <CollapsablePanel
         filterSection ={true} 
          name={labels.groupDeProduit[lang]}
          className="test-case" initialCollapse={false}
        >
          <P
            data-aglivalue={labels.allFilter}
            data-aglicategory={labels.colgroupeDeProduit}
            onClick={onFilterPress}
            key={1}
          >
            {labels.allText[lang]}
          </P>

          {uniqueGroupDeProduit.map((f, ind) =>{
             if( ind > state.countPropsGrpDeProduit-1)
             return null
           else             
             return (
            <Li
              data-aglivalue={f}
              data-aglicategory={labels.colgroupeDeProduit}
              onClick={onFilterPress}
              key={ind}
            >
              {f} ({getCount(f, labels.colgroupeDeProduit)})
            </Li>
          )})}
                   
           <Anc href="#" onClick={()=>dispatch({type:Constants.ActionUniqueGrpDeProduitMoreOrLess})}>
              {state.activeClassGrpDeProduit?labels.showLess[lang]:labels.showMore[lang] }   
           <img alt="active" className ={`ms-searchref-moreicon ${state.activeClassGrpDeProduit}`} src={arrowBlue}></img></Anc>
        </CollapsablePanel>
      )}
    </FiltersStyled>
    </>
  );
}
