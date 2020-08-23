 import Axios from 'axios';

 // handleRecordingUpload = async (files) => {
    //     try {
    //         let data = new FormData();
    //         data.set("song_id", '774886b9-2676-42f5-8ea6-7ecd89c0d61a');
    //         data.append('file', files[0], files[0].name);
    //         const headers = {
    //             'content-type': 'multipart/form-data',
    //             "Authorization": "abc"
    //         }
    //         const response = await Axios({
    //             url: 'http://localhost:8000/recordings/upload',
    //             method: "POST",
    //             headers: headers,
    //             data: data
    //         })   
    //         console.log(response);
    //     } catch (error) {
    //         console.log(error.response);
    //     }
    // }

    export const handleFileUpload = async (files) => {
        try {
            console.log(files);
            let data = new FormData();
            data.set("name", "filename test")
            data.append('file', files[0], files[0].name);
            const headers = {
                'content-type': 'multipart/form-data',
                "Authorization": "abc123"
            }
            const response = await Axios({
                url: 'http://localhost:8000/songs/upload',
                method: "POST",
                headers: headers,
                data: data
            })

            console.log(response);
        } catch (error) {
            console.log(error.response);
        }
    }

    // handleClick = async() => {
    //     const headers = {
    //         'content-type': 'multipart/form-data',
    //         "Access-Control-Allow-Origin": "*",
    //         "Authorization": "abc123"
    //     }
    //     const response = Axios({
    //         url: "http://localhost:8000/",
    //         method: 'GET',
    //         headers: headers,
    //         async: true
    //     }).then((resp) => {
    //         console.log(resp);
    //     })
    // }