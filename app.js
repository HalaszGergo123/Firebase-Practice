const cafeList = document.querySelector('#cafe-list')
const form = document.querySelector('#add-cafe-form')
//create element and render cafe
function renderCafe(doc) {
    
    let li = document.createElement('li');
    let name = document.createElement('span');
    let city = document.createElement('span');
    let cross = document.createElement('div');

    li.setAttribute('data-id' ,doc.id)
    name.innerText = doc.data().name;
    city.innerText = doc.data().city;
    cross.textContent = 'x';


    li.append(name,city);
    cafeList.append(li);
    li.append(cross)

    //deleting data
    cross.addEventListener('click',(e) =>{
        let id=e.target.parentElement.getAttribute('data-id')
        db.collection('cafes').doc(id).delete();
    })
}
//getting data
//where('city','==','Oradea')
//orderBy('name')
// db.collection('cafes').get().then((snapshot) => {
//     snapshot.docs.forEach(doc => {
//         renderCafe(doc)
//     })
// })

//saving data
form.addEventListener('submit',(e) => {
    e.preventDefault();
    db.collection('cafes').add({
        name: form.name.value,
        city:form.city.value
    })
    form.name.value = ''    
    form.city.value = ''
})
//real time listener
db.collection('cafes').orderBy('city').onSnapshot(snapshot =>{
    let changes = snapshot.docChanges();
    changes.forEach(change =>{
        if(change.type === 'added'){
            renderCafe(change.doc)
        } else if(change.type === 'removed'){
            let li = cafeList.querySelector('[data-id='+ change.doc.id+']')
            li.remove()
        }
    })
})