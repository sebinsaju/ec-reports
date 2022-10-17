export const FormatAnsType= (type)=>{
   switch(type){
    case "single_choice":return "Single Choice";
     break;
     case "multi_choice":return "Multi Choice";
     break;
     case "text":return "Text";
     break;
     case "image":return "Image";
     break;
    default : return "Not defined"
   }
}