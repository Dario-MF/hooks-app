import React, {memo} from 'react'


// memo: memoriza el estado de las props y solo se vuelve a renderizar
// cuando detecta un cambio, evitando renders innecesarios.
const Small = memo(({value}) => {
    console.log('Me volvi a llamar :(')
    return (
        <small>{value}</small>
    )
})

export default Small
