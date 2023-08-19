
const Button = document.querySelector('#btn');
const inputValue = document.querySelector('#input');
const showdata = document.getElementById("data");
const prevbutton = document.querySelector('#PrevButton');
const nextbutton = document.querySelector('#nextButton');
var repoData = [];
let pageSize = 10;
let currentPage = 1;

Button.onclick = function(){
  if(inputValue.value == ''){
    alert("plese Enter the name");
  }else{
    getRepository();
  }
};

async function getRepository(page=1){

  await getData(page);

  // create HTML Table Data
  var datatable = "";
  console.log(repoData);
 
  repoData.filter((row, index) => {
    
    let start = (currentPage - 1) * pageSize;
    let end = currentPage * pageSize;
    if(index >= start && index < end) return true;
    // console.log(end);
    
  }).forEach(repo => {
  // console.log(repo);
    
    //append the repository to the DataTable
    datatable += "<tr>"
    datatable += `<td>${(repo.name)} </td>`
    datatable += `<td>${(repo.language)} </td>`
    datatable += `<td>${(repo.size)} </td>`
    datatable += `<td>${(repo.stargazers_count)} </td>`
    datatable += `<td>${(repo.watchers_count)} </td>`
    datatable += `<td><a href=https://github.com/${inputValue.value}/${repo.name} target="_blank" class="btn btn-info bg-info hover text-center bordered">Go to the repo</a></td>`
    "<tr>"

    showdata.innerHTML = datatable;

  })

  if(page == 1){
    prevbutton.style.visibility = "hidden";
  }else{
    prevbutton.style.visibility = "visible";
  }

  var numberOfPages = repoData.length / pageSize;

  if(page == numberOfPages){
    nextbutton.style.visibility = "hidden";
  }else{
    nextbutton.style.visibility = "visible";
  }
}

//fetch DATA from The api
async function getData(page){
  // var Url = `https://api.github.com/users/${inputValue.value}/repos?page=${page}`;
  var Url = `https://api.github.com/users/${inputValue.value}/repos?page=${page}&per_page=100`;

  // /repos?page{1}&per_page=100
  const responce = await fetch(Url);
  const repo = await responce.json(); //format for storing data
  repoData = repo;
}

prevbutton.addEventListener('click', previousPage, false);
nextbutton.addEventListener('click', nextPage, false);

function previousPage(){
  if(currentPage > 1)
    currentPage--;
    getRepository(currentPage);
}

function nextPage(){
  if((currentPage * pageSize) < repoData.length)
    currentPage++;
    getRepository(currentPage);
}





















// const Button = document.querySelector('#btn');
// const inputValue = document.querySelector('#input');
// const showdata = document.getElementById("data");
// const prevbutton = document.querySelector('#PrevButton');
// const nextbutton = document.querySelector('#nextButton');
// var repoData = [];
// let pageSize = 10;
// let currentPage = 1;

// Button.onclick = function(){
//   if(inputValue.value == ''){
//     alert("plese Enter the name");
//   }else{
//     getRepository();
//   }
// };

// async function getRepository(page = 1){
//   await getData();

//   // create HTML Table Data
//   var datatable = "";
//   console.log(repoData);

//   repoData.filter((row, index) => {
    
//     let start = (currentPage - 1) * pageSize;
//     let end = currentPage * pageSize;
//     if(index >= start && index < end) return true;
//     // console.log(end);
    
//   }).forEach(repo => {
    
//     //append the repository to the DataTable
//     datatable += "<tr>"
//     datatable += `<td>${(repo.name)} </td>`
//     datatable += `<td>${(repo.language)} </td>`
//     datatable += `<td>${(repo.size)} </td>`
//     datatable += `<td>${(repo.stargazers_count)} </td>`
//     datatable += `<td>${(repo.watchers_count)} </td>`
//     datatable += `<td><a href=https://github.com/${inputValue.value}/${repo.name} target="_blank" class="btn btn-info bg-info hover text-center bordered">Go to the repo</a></td>`
//     "<tr>"

//     showdata.innerHTML = datatable;

//   })

//   if(page == 1){
//     prevbutton.style.visibility = "hidden";
//   }else{
//     prevbutton.style.visibility = "visible";
//   }

//   var numberOfPages = repoData.length / pageSize;

//   if(page == numberOfPages){
//     nextbutton.style.visibility = "hidden";
//   }else{
//     nextbutton.style.visibility = "visible";
//   }
// }

// //fetch DATA from The api
// async function getData(){
//   var pages = 1000;
//   var Url = `https://api.github.com/users/${inputValue.value}/repos?page{1}&per_page=${pages}`;
//   // /repos?page{1}&per_page=100
//   const responce = await fetch(Url);
//   const repo = await responce.json(); //format for storing data
//   repoData = repo;
// }

// prevbutton.addEventListener('click', previousPage, false);
// nextbutton.addEventListener('click', nextPage, false);

// function previousPage(){
//   if(currentPage > 1)
//     currentPage--;
//     getRepository(currentPage);
// }

// function nextPage(){
//   if((currentPage * pageSize) < repoData.length)
//     currentPage++;
//     getRepository(currentPage);
// }

























// const Button = document.querySelector('#btn');
// const inputValue = document.querySelector('#input');
// const showdata = document.getElementById("data");
// const prevbutton = document.querySelector('#PrevButton');
// const nextbutton = document.querySelector('#nextButton');
// var repoData = [];
// let pageSize = 10;
// let currentPage = 1;

// Button.onclick = function(){
//   if(inputValue.value == ''){
//     alert("plese Enter the name");
//   }else{
//     getRepository();
//   }
// };

// async function getRepository(page = 1){
//   await getData(page);

//   // create HTML Table Data
//   var datatable = "";
//   console.log(repoData);

//   repoData.filter((row, index) => {
    
//     let start = (currentPage - 1) * pageSize;
//     let end = currentPage * pageSize;
//     if(index >= start && index < end) return true;
//     // console.log(end);
    
//   }).forEach(repo => {
//   // console.log(repo);

    
//     //append the repository to the DataTable
//     datatable += "<tr>"
//     datatable += `<td>${(repo.name)} </td>`
//     datatable += `<td>${(repo.language)} </td>`
//     datatable += `<td>${(repo.size)} </td>`
//     datatable += `<td>${(repo.stargazers_count)} </td>`
//     datatable += `<td>${(repo.watchers_count)} </td>`
//     datatable += `<td><a href=https://github.com/${inputValue.value}/${repo.name} target="_blank" class="btn btn-info bg-info hover text-center bordered">Go to the repo</a></td>`
//     "<tr>"

//     showdata.innerHTML = datatable;

//   })

//   if(page == 1){
//     prevbutton.style.visibility = "hidden";
//   }else{
//     prevbutton.style.visibility = "visible";
//   }

//   var numberOfPages = repoData.length / pageSize;

//   if(page == numberOfPages){
//     nextbutton.style.visibility = "hidden";
//   }else{
//     nextbutton.style.visibility = "visible";
//   }
// }

// //fetch DATA from The api
// async function getData(page){
//   var Url = `https://api.github.com/users/${inputValue.value}/repos?page=${page}`;
//   // /repos?page{1}&per_page=100
//   const responce = await fetch(Url);
//   const repo = await responce.json(); //format for storing data
//   repoData = repo;
// }

// prevbutton.addEventListener('click', previousPage, false);
// nextbutton.addEventListener('click', nextPage, false);

// function previousPage(){
//   if(currentPage > 1)
//     currentPage--;
//     getRepository(currentPage);
// }

// function nextPage(){
//   if((currentPage * pageSize) < repoData.length)
//     currentPage++;
//     getRepository(currentPage);
// }