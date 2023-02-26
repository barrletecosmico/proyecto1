const m_info = document.getElementById("mas_info"); 
const v_mas = document.getElementById("v_mas");
const m_exp = document.getElementById("mas_exp"); 
const v_mas_exp = document.getElementById("v_mas_exp");


v_mas.addEventListener("click", function(){
    mostrar(m_info);
});

v_mas_exp.addEventListener("click", function(){
    mostrar(m_exp);
});


function mostrar(elemento){
    if(elemento.style.display === "block"){
        elemento.style.display = "none";    
    }else{
        elemento.style.display = "block";    
    }
}





