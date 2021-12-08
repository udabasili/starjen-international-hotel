interface ImyLoader {
    src: string;
    width: number;
    quality: number;
}
const myLoader = (
    { 
        src, 
        width, 
        quality=75 
    } : ImyLoader) => {
  return ` https://images.unsplash.com/${src}?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=${width}&q=${quality}`

}




export default myLoader