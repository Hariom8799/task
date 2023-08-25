let radiobtn = document.querySelectorAll("input[name='product']");

findSelect = () =>{
    let selected = document.querySelector("input[name='product']:checked").value;
    console.log(selected)
    let pair1 = document.querySelector(".hidden-1")
    let pair2 = document.querySelector(".hidden-2")
    let pair3 = document.querySelector(".hidden-3")
    if(selected === "product-1"){
        pair1.style.display = "block"
        document.querySelector("#card-2").classList.remove("active")
        document.querySelector("#card-3").classList.remove("active")
        document.querySelector("#card-1").classList.add("active")
        pair2.style.display = "none"
        pair3.style.display = "none"
    }else if(selected === "product-2"){
        pair1.style.display = "none"
        pair2.style.display = "block"
        document.querySelector("#card-3").classList.remove("active")
        document.querySelector("#card-1").classList.remove("active")
        document.querySelector("#card-2").classList.add("active")
        pair3.style.display = "none"
    }else{
        pair1.style.display = "none"
        pair2.style.display = "none"
        pair3.style.display = "block"
        document.querySelector("#card-1").classList.remove("active")
        document.querySelector("#card-2").classList.remove("active")
        document.querySelector("#card-3").classList.add("active")
    }
}

radiobtn.forEach((btn) =>{
    btn.addEventListener("change",findSelect)
})