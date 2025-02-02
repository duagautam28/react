function customRender(reactElemet,container)
{
    const domElemet= document.createElement(reactElemet.type)
    domElemet.innerHTML=reactElemet.children
    domElemet.setAttribute('href',reactElemet.props.href)
    domElemet.setAttribute('target',reactElemet.props.target)

    container.appendChild(domElemet)
}



const reactElemet= {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: 'blank'
    },
    children: 'click me to visist google'
}

const mainContainer= document.querySelector('#root')

customRender(reactElemet,mainContainer)