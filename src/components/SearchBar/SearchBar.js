import { useSearchParams } from "react-router-dom";
import { SearchButton, SearchForm, SearchInput } from "./SearchBar.styled.js";




export const Searchbar = ({ onSubmitForm }) => {
   
  
   return <header>
     <SearchForm onSubmit={evt => {
       
         evt.preventDefault();
               onSubmitForm(evt.target[1].value)
       }}  >
       <SearchButton type="submit" >
      Search
    </SearchButton>
       <SearchInput 
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
     </SearchForm>
    
</header>
}