import React, {useState} from 'react'
import axios from 'axios'

const SingleUpload = () => {
    const [fileData, setFileData] = useState()

    const fileChangeHandler= (e) => {
        setFileData(e.target.files[0])
    }
    console.info(' file data ===>', fileData)
        
    const onSubmitHandler = async (e) => {
        try {
            const data = new FormData()
            data.append('image', fileData) // image key to use upload
            e.preventDefault()
            await axios.post('http://localhost:5000/single', {            
                body : data                
            })
            console.info('Succesfully uploaded')
            }catch(error){
            console.info('Something went wrong')
            
        }
    }

    return (
        <div className='container'>
            <h1>Single Upload using Multer</h1>
            <form onSubmit={onSubmitHandler}>
                <label> Upload Image </label>
                <input type="file" onChange={fileChangeHandler}/>
                <br />
                <button type='submit'>Send To Backend</button>
            </form>
        </div>
    )
}

export default SingleUpload
