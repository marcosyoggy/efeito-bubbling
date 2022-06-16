const div_Parent = document.querySelector('.parent_All')
const first_Child = document.querySelector('.first_Child')
const second_Child = document.querySelector('.second_Child')
const third_Child = document.querySelector('.third_Child')
const third_GrandChild = document.querySelector('.third_GrandChild')
const sub_Title = document.querySelector('.sub_Title')

const first_Event_Down_Up = () => {
  const new_2_Id = setTimeout(e => {
    third_Child.style.backgroundColor = 'crimson'
    third_GrandChild.style.color = 'white'

    console.log('Evento da 2º Child!!! - 1º eveto do fluxo `Down to Up`')
  }, 2000);
}

const second_Event_Down_Up = () => {
  const new_2_Id = setTimeout(e => {
    second_Child.style.backgroundColor = 'lime'

    console.log('Evento da 1º Child!!! - 2º eveto do fluxo `Down to Up`')
  }, 4000);
}

const third_Event_Down_Up = () => {
  const new_2_Id = setTimeout(e => {
    div_Parent.style.backgroundColor = 'turquoise'
    first_Child.style.backgroundColor = 'gray'

    sub_Title.style.color = 'white'
    sub_Title.style.textDecoration = 'underline'
    sub_Title.innerText = 'Leia o texto sobre Bubbling...'

    const new_H3 = document.createElement('h3')
    new_H3.innerText = 'Explicação sobre este Bubbling Event....'
    new_H3.setAttribute('class', 'new_H3')
    new_H3.style.border = '4px dotted black'
    new_H3.style.padding = '4px'
    new_H3.style.backgroundColor = 'white'
    new_H3.style.textAlign = 'center'

    const new_P = document.createElement('p')
    new_P.style.textIndent = '30px'
    new_P.style.textAlign = 'justify'
    new_P.style.padding = '8px'
    new_P.style.fontFamily = 'Franklin Gothic Medium'
    new_P.style.color = 'black'
    new_P.style.textDecoration = 'none'

    new_P.innerText = `*** Foi criada uma 'div_Parent' para receber os elementos que simularão o 'efeito Bubbling'; Três 'divs' foram aninhadas 'first > second > third'; Foram inseridos eventos de 'click' no Parent e nas divs child 'first' e 'second', a terceira child 'third' não têm nehum evento; Clicando na 3º child é disparado o evento bubbling 'Down to Up', então efeitos de estilização e a exibição na janela do browser indicarão o fluxo do processo.`

    div_Parent.append(new_H3)
    new_H3.append(new_P)

    console.log('Evento do Parent!!! - 3º eveto do fluxo `Down to Up`')
  }, 6000);
}

div_Parent.addEventListener('click', third_Event_Down_Up)

first_Child.addEventListener('click', second_Event_Down_Up)

second_Child.addEventListener('click', first_Event_Down_Up)
