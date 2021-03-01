const body = document.body;

const div = document.createElement('div');
body.append(div)

const spanCreateHi = document.createElement('h1')
const spanCreateBye = document.createElement('h1')


spanCreateHi.innerText="Hi"
spanCreateBye.innerText = 'Bye'

spanCreateHi.setAttribute('id','hi')
spanCreateBye.setAttribute('id','bye')


div.append(spanCreateHi,spanCreateBye)



