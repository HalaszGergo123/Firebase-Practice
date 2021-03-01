

var firebaseConfig = {
    apiKey: "AIzaSyAPEM6BGCQm6R8ixxEFMdBUsrhLAnURQDc",
    authDomain: "hgfingerstyle.firebaseapp.com",
    databaseURL: "https://hgfingerstyle-default-rtdb.firebaseio.com",
    projectId: "hgfingerstyle",
    storageBucket: "hgfingerstyle.appspot.com",
    messagingSenderId: "388638717796",
    appId: "1:388638717796:web:1c694168bf5e09745f6c71",
    measurementId: "G-NR1ZDY23XW"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();



let list = document.createElement('ul');

const body = document.body;
body.append(list)
let listItemsTest = document.createElement('li');
let testItem = document.createElement('span');
let testItem2 = document.createElement('span');

listItemsTest.innerText='asd'
testItem.innerText='1'
testItem2.innerText='2'



function renderCafe(doc) {

    let listItems = document.createElement('li');
    let spansInListItems1 = document.createElement('span');
    let spansInListItems2 = document.createElement('span');
    
    listItems.setAttribute('data-id',doc.id)
    spansInListItems1.innerText = doc.data().name
    spansInListItems2.innerText = doc.data().city

    list.append(listItems)
    listItems.append(spansInListItems1,spansInListItems2)

}

function renderAtLast() {
    list.append(listItemsTest)
listItemsTest.append(testItem,testItem2)

}



function renderAtFirst(callback) {
    return new Promise((resolve,reject) => {
        const error = false;
        db.collection('cafes').get().then(snapshot =>{
            snapshot.docs.forEach(doc => {
                renderCafe(doc);
            })   
        if(!error)
        resolve();
        else reject();

    })
    
    
})
}

renderAtFirst().then(renderAtLast)



