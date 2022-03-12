let guess=0;
let btnGroup=document.querySelector(".btn-group");
for(let i=0;i<26;i++){
  let btn=document.createElement("button");
  btn.classList.add('alpha-btn');
  btn.innerText=String.fromCharCode(65+i);
  if(i!==0 && i%7===0){
    btnGroup.appendChild(document.createElement("br"));
  }
  btnGroup.appendChild(btn);
};

let ans=document.querySelector(".ans");
let alphaBtnGrp=document.querySelectorAll(".alpha-btn");

let lists=document.querySelectorAll(".entry");
let dict=[];
let j=0;
while(j<999){
  //console.log(lists[j].childNodes[1].textContent);
  let word={
    name:lists[j].childNodes[1].textContent,
    meaning:lists[j].childNodes[3].textContent
  };
  dict.push(word);
  j++;
}
document.querySelector("ol").innerHTML="";
//console.log(dict);
//document.querySelector("ol").innerHTML="";
//Math.floor(Math.random()*999);
let ind=Math.floor(Math.random()*999);
let word=dict[ind]['name'],meaning=dict[ind]['meaning'];
let n=word.length;
//console.log(word);
ans.innerHTML="";
for(let i=0;i<n;i++){
  let s1=document.createElement("span"),s2=document.createElement("span"),s3=document.createElement("span");
  s1.classList.add("lf");
  s2.classList.add("letter");
  s3.classList.add("fill");
  s3.innerText="_";
  s2.innerText="";
  s1.appendChild(s2);
  s1.appendChild(document.createElement("br"));
  s1.appendChild(s3);
  ans.appendChild(s1);
}
let clue=document.querySelector(".clue");
clue.addEventListener("click",()=>{
  if(clue.classList.length>1)
  return;
  guess++;
  document.querySelector("img").setAttribute("src","images/"+guess+".jpg");
  if(guess==10){
    setTimeout(()=>{
      alert("Game over,Try Again!!");
      window.location.reload();
    },100);
  }
  let hint=document.createElement("h3");
  hint.innerText=meaning;
  clue.classList.add("hide");
  document.querySelector(".c1-guess").insertBefore(hint,clue);
});
let lf=document.querySelectorAll(".lf");
let wordlen=n;
alphaBtnGrp.forEach(btn=>{
  btn.addEventListener("click",()=>{
    if(btn.classList.length>1){
      //console.log("already clicked");
      return;
    }
    let letter=btn.innerText;
    let f=true;
    for(let i=0;i<n;i++){
      if(word[i].toUpperCase()===letter){
        wordlen--;
        f=false;
        lf[i].childNodes[0].innerText=letter;
      }
    }
    if(f){
      //console.log("wrong guess");
      guess++;
      document.querySelector("img").setAttribute("src","images/"+guess+".jpg");
      if(guess==10){
        setTimeout(()=>{
          alert("Game over,Try Again!!");
          window.location.reload();
        },100);
      }
    }
    else{
      btn.classList.add('blur');
      if(wordlen==0){
        setTimeout(()=>{
          alert("Congratulations! You Won!!");
          window.location.reload();
        },100);
      }

    }
  });
});
