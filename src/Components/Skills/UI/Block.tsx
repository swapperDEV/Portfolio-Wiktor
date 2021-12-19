import React from 'react'
const Block = (props:any) => {
    const {number, type} = props
    const table = []
    for(let i=0; i < number; i++) {
        table.push('position')
    }
    return (
        <>
            {table.map((e:Object) => {
                return (
                    <div className={`block ${type === 'projects' ? 'projects' : 'years'
                    }`}>
                    </div>
                )
            })}
        </>
    )
}

export default Block