const data = [ {
    title : "",
    paragraph : "",
}
];
const addbtn =document.querySelector('.add');
const title = document.getElementById("title");
const para = document.getElementById("para");
const mai = document.getElementById("mai");
const nav =document.querySelector('.nav');


addbtn.addEventListener("click", (e) => {
    addElement(title.value,para.value);
    console.log("al;jdf");
    });


function addElement(e,e1){
    let pa =document.createElement("div");
    pa.innerHTML =`<div id="buttons">    
    <button class="edit"><i class="fa-solid fa-wand-magic-sparkles"></i></button>
    <button class="remove"><i class="fa-solid fa-minus"></i></button>
    </div>
    <div id="content">
        <P  id= "title">${e}</p>
        <P id= "para">${e1}</p>
    </div>
</div>`;
addtonav(e);


pa.classList.add('list');
    mai.appendChild(pa);

    const removebtn = pa.querySelector(".remove");
    removebtn.addEventListener("click", function(e) {

        removeElement(e)
        e.currentTarget.parentNode.parentNode.remove();
    });
                    


    let editbtn = pa.querySelector(".edit"); 
    editbtn.addEventListener("click", function(e) {

        editele(e);
});

function editele(e){
    let s = e.currentTarget.parentNode.parentNode;
    s.innerHTML = `
    <div id="buttons">    
    <i class="fa-sharp fa-solid fa-check" style="color: #1d2025;"></i>
    </div>
    <div id="content">

        <input type="text" autocomplete="off"  id="title" placeholder="title"  >
        <input type="text" autocomplete="off"  id="para"   placeholder="writehere">
    </div>
</div>`;
const confrmbtn =s.querySelector(".fa-sharp");
confrmbtn.addEventListener("click",(e)=>{
    let a1=e.currentTarget.parentNode.parentNode;
    let a = e.currentTarget.parentNode.parentNode.parentNode;
            confirmelement("JKHALKFJHD",0,a,a1);
})

    };

}



function confirmelement (e,e1,a,c){
    let pra2 = document.createElement("div");
    pra2.innerHTML=`<div id="buttons">    
    <button class="edit"><i class="fa-solid fa-wand-magic-sparkles"></i></button>
    <button class="remove"><i class="fa-solid fa-minus"></i></button>
    </div>
    <div id="content">
        <P  id= "title">${e}</p>
        <P id= "para">${e1}</p>
    </div>
</div>`;
const removebtn = pra2.querySelector(".remove");
removebtn.addEventListener("click", function(e) {
    removeElement(e);
    let d = e.currentTarget.parentNode.parentNode.remove();
    });
    let editbtn = pra2.querySelector(".edit"); 
    editbtn.addEventListener("click", function(e) {
        editele(e);
});
    pra2.classList.add('list');
    c.remove();
    a.appendChild(pra2);

    function editele(e){
        let s = e.currentTarget.parentNode.parentNode;
        s.innerHTML = `
        <div id="buttons">    
        <i class="fa-sharp fa-solid fa-check" style="color: #1d2025;"></i>
        </div>
        <div id="content">
    
            <input  autocomplete="off" type="text"  id="title" placeholder="title"  >
            <input  autocomplete="off" type="text"  id="para"   placeholder="writehere">
        </div>
    </div>`;
    const confrmbtn =s.querySelector(".fa-sharp");
    confrmbtn.addEventListener("click",(e)=>{
        let a1=e.currentTarget.parentNode.parentNode;
        let a = e.currentTarget.parentNode.parentNode.parentNode;
        let  b = a.lastChild;
                console.log(b);
                confirmelement(b,0,a,a1);
    })
    
        };

}


function addtonav(e){
        let di = document.createElement("div");
        di.innerHTML =`<p>${e}</p>`;
        di.classList.add("di");
        nav.appendChild(di);
;}
function removeElement(e){
    let p =mai.children;
    let numlist =e.currentTarget.parentNode.parentNode;
    for (let i = 2; i < p.length; i++) {
        if (p[i].children.content.children.title===numlist.children.content.children.title) {
        nav.removeChild(nav.childNodes[i-2]);
        }
    }
}