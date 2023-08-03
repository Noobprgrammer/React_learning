function Message(){
    const name = 'Kamal'
    if (name){
        return (
            <h1 className = "pepepopo " >
                Hello {name}
            </h1>
        )
    }else{
        return(
            <h1>
                Hello World
            </h1>
        )
    }
}

export default Message;
/*  
    >created a constant variable which contains a name 
    >the variable is being used in the <h1> element
*/