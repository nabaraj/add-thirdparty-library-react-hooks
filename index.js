import { useEffect, useState } from 'react';

const useAddLibrary = (url, objectToFind) => {
  const [seccess, setSuccess] = useState(false);

  useEffect(() => {

    if(window[objectToFind]){
      return setSuccess(true);
    }else{
      let myScript = document.createElement("script");
      myScript.setAttribute("src", url);
      document.body.appendChild(myScript);
  
      myScript.addEventListener("load", scriptLoaded, false);
  
      return () => {
        myScript.removeEventListener("load", scriptLoaded);
      };
    }
    
  }, [url, objectToFind]);

  function scriptLoaded(){
    setSuccess(true)
  }

return [seccess]
}
export default useAddLibrary