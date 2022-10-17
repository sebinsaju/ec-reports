let Token;
if(typeof window !== "undefined"){
    if(localStorage.getItem('Token')){
        Token=localStorage.getItem('Token')
    }    
}
export const SUPERADMIN_CONFIG = {
    headers: {
        Authorization : `Bearer ${Token}`
        }
}