export const API_RICKMORTY = {
    URL:"https://rickandmortyapi.com/api",
    
     CHARACTER : function (){
        return `${this.URL}/character`
     },

     CHARACTER_BY_ID :  function (id) {
        return `${this.URL}/character/${id}`
     }

}