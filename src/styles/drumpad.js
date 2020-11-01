const D = {
    margin: '10px',
    width: '160px',
    height: '160px',
    color: 'white',
    background: 'rgb(141, 141, 141)',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '25px',
    fontFamily: 'Lucida Sans',
    boxShadow: '5px 5px rgba(0, 0, 0, 0.5)',
    transition: '.2s',
}

const active = {
    margin: '10px',
    width: '160px',
    height: '160px',
    color: 'white',
    background: 'rgb(141, 141, 141)',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '25px',
    fontFamily: 'Lucida Sans',
    boxShadow: '0px 0px rgba(0, 0, 0, 0)',
    transform: 'translate(5px, 5px)'
}

const audioStyle = {
    display: 'none'
}

export { audioStyle, active, D };