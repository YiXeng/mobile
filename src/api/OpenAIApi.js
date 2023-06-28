import axios from 'axios';
import { OPENAI_API_KEY } from '@env';

const OpenAIApi = axios.create({
    baseURL: "https://api.openai.com/v1",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        // 'Authorization': `Bearer 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`
    }
});

export const getCompletion = async (prompt) => {
    try {
        const response = await OpenAIApi.post('/engines/text-davinci-003/completions', {
            prompt,
            max_tokens: 1000
        });
        return response.data.choices[0].text;
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);
    }
    
};

export default OpenAIApi;