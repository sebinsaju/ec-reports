let Token;
if(typeof window !== "undefined"){
    if(localStorage.getItem('S_Token')){
        Token=localStorage.getItem('S_Token')
    }    
}
export const SUPERADMIN_CONFIG = {
    headers: {
        Authorization : `Bearer ${Token}`
        }
}