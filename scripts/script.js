const counters =document.querySelectorAll(".counter")

counters.forEach(counter=>{
    counter.innerText="0"
    const updateCounter =()=>{
        const target = counter.getAttribute("data-target")//1200 5000 2000
        // console.log(typeof target,target)
        const c =+counter.innerText;
        // console.log("c",c)
        const increment =target / 200;
        console.log("increment",increment)
        if(c < target){
            counter.innerText=`${Math.ceil(c+increment)}`
            setTimeout(updateCounter,1)
        }
        
    }
    updateCounter()
})