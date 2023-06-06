import { API_RICKMORTY } from "../constants/Api.constans";


class RickandMortiservice {

   async getAllCharacter(){
    
    const response = await fetch(API_RICKMORTY.CHARACTER());
    console.log(response)
    return response.json();

   }

   async getCharacterById(id){
    const response = await fetch(API_RICKMORTY.CHARACTER_BY_ID(id));
    return response.json();

   }



}

export default new RickandMortiservice();