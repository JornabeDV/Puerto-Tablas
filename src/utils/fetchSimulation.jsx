const fetchSimulation = (dataBase,time) => {
return new Promise((resolve, rejact) => {
    setTimeout (() => {
        resolve (dataBase);
        rejact(new Error("Algo Salió Mal"));
    }, time)
})

}

export default fetchSimulation;  
