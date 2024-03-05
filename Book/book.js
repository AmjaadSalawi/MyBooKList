let bookTitle = document.getElementById('bookTitle');
let author = document.getElementById('author');
let price = document.getElementById('price');
let quantity = document.getElementById('quantity');
let submit = document.getElementById('submit');

let mood = 'create';
let tmp; // global

// create
// احفظ البيانات في مصفوفة
let dataPro;
if(localStorage.product != null){  // اخزن البيانات في لوكال وماتنحذف لو حدثت ,, انشا عنصر فيه واحفظ فيه البيانات اللي في المصفوفه
    dataPro = JSON.parse(localStorage.product) // 12 مرتبط مع 27
}else{
    dataPro = [];
}

submit.onclick = function(){
    // اجمع البيانات في اوبجكت ولها كل خصائص المنتج
    let newPro = {
        bookTitle: bookTitle.value,
        author: author.value,
        price: price.value,
        quantity: quantity.value,   
    }

    if(bookTitle.value != '' && author.value != '' && price.value != '' && quantity.value != ''){
    if(mood === 'create'){
        dataPro.push(newPro);

    }else{
            dataPro[tmp] = newPro;
            mood = 'create';
            submit.innerHTML = 'Add Book';
    }
}

    localStorage.setItem('product',  JSON.stringify(dataPro));
    clearData();
    showData();
}


// clear input
function clearData(){
    bookTitle.value = '';
    author.value = '';
    price.value = '';
    quantity.value = '';
}


// Read Data
function showData(){
    let table = '';
    for(let i = 0; i < dataPro.length; i++){
        table += `                             
        <tr>
        <td>${i+1}</td>
        <td>${dataPro[i].bookTitle}</td>
        <td>${dataPro[i].author}</td>
        <td>${dataPro[i].price}</td>
        <td>${dataPro[i].quantity}</td>
        <td> <button onclick="updateData(${i})" id="update">update</button></td>
        <td> <button onclick="deleteData(${i})" id="delete">delete</button></td>
        </tr>
        `
    }

    document.getElementById('tbody').innerHTML = table;
    let btnDelete = document.getElementById('deleteAll');
    if(dataPro.length > 0 ){  //    لوالمصفوفه فيه بيانات حط في ذا المكان الزر
        btnDelete.innerHTML = `
        <button onclick="deleteAll()"> delete All (${dataPro.length}) </button>
        `
    }else{
        btnDelete.innerHTML = '';
    }
}
showData();
// تعرض البيانات حتى لو سوينا تحديث للبيانات 


//deleteData
function deleteData(i){
    dataPro.splice(i,1); // يحذف من المصفوفة
    localStorage.product = JSON.stringify(dataPro); //  يحذف من اللوكال
    showData();
}


//deleteAll
function deleteAll(){
    localStorage.clear();
    dataPro.splice(0);
    showData();
}

displayData.onclick = function(){
    bookTitle.value = dataPro[i].bookTitle;
    author.value = dataPro[i].author;
    price.value = dataPro[i].price;
    quantity.value = dataPro[i].quantity;
    submit.innerHTML = 'Update';
    mood = 'update';
    tmp = i;
    scroll({
        top:0,
        behavior: 'smooth'
    })
}

// update
function updateData(i)
{
    bookTitle.value = dataPro[i].bookTitle;
    author.value = dataPro[i].author;
    price.value = dataPro[i].price;
    quantity.value = dataPro[i].quantity;
    submit.innerHTML = 'Update';
    mood = 'update';
    tmp = i;
    scroll({
        top:0,
        behavior: 'smooth'
    })
}


// search
let searchMood = 'bookTitle';

function getSearchMood(id){
    let search = document.getElementById('search');
    if(id == 'bookTitle'){
        searchMood = 'bookTitle';

    // }else if (id == 'bookId') {
    //     searchMood = 'bookId';

    }else {
        searchMood = 'searchAuthor';
    }
    // search.placeholder = 'Search By '+ searchMood;
    search.focus();
    console.log(searchMood);
}
