const uploadBtn = document.querySelector('.upload-btn')
const message = document.querySelector('.message')

uploadBtn.addEventListener('click', async (e) => {
    e.preventDefault()
    const videoFile = document.querySelector('.video-file')
    const inputFile = videoFile.files[0]
    const formData = new FormData()
    formData.append('video', inputFile)
    try {
        const response = await fetch('http://192.168.1.41:8000/upload_video', {
            method: 'POST',
            body: formData
        })
        if (response.ok) {
            const responseData = await response.json()
            message.innerHTML = JSON.stringify(responseData)
            console.log('responseData', responseData)
        } else {
            message.innerHTML = 'upload faild';
        }
    } catch(error) {
        console.log('error', error)
        message.innerHTML = 'server error';
    }
})
