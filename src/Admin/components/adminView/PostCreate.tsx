import React, {useState} from 'react'

const PostCreate = () => {
    const [postValue, changeValue] = useState('')
    const [actView, changeView] = useState('create')
    const handleChangeValue = (e:any) => {
        changeValue(e.target.value)
        console.log(postValue);
    }
    const newLine = (e:any) => {
        if(e.key === 'Enter') {
            changeValue(postValue + '<br/>')
        }
    }
    const handleChangeView = (value:string) => {
        changeView(value)
    }
    const insertImg = () => {
        changeValue(postValue + '<img/>')
    }
    return (
        <div className='postCreate'>
            <div className='view'>
                {actView === 'create' && <div className='view_create'>
                    Create New Post

                    <label>
                    <p>Title</p><input/>
                    </label>
                    <label>
                    <p>Description</p><input/>
                    </label>
                    <label>
                    <p>Main img Link</p><input/>
                    </label>
                    <p>Content</p>
                    <textarea onKeyPress={newLine} onChange={handleChangeValue} value={postValue}/>
                    <label><p>Img</p><input placeholder='link'/><button onClick={insertImg}>insert</button></label>
                    <button onClick={() => handleChangeView('preview')}>Preview</button>
                </div>}
                {actView === 'preview' && <div className='view_preview'>
                    Preview
                    <button onClick={() => handleChangeView('create')}>Creation Tool</button>
                    <div contentEditable='true' className='preview' dangerouslySetInnerHTML={{ __html: postValue }}>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default PostCreate