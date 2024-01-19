import axios from 'axios';


const OpenAIApi = axios.create({
    baseURL: "https://api.openai.com/v1",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.EXPO_PUBLIC_OPENAI_API_KEY}`
    }
});

export const getCompletion = async (prompt) => {
    try {
        const response = await OpenAIApi.post('/chat/completions', { // Assuming this is the correct endpoint
            model: 'gpt-3.5-turbo-1106', // or another model that supports JSON mode
            response_format: { "type": "json_object" },
            messages: [
                { "role": "system", "content": "You are a helpful travel planner designed to output JSON that generate a personalized travel itinerary based on user inputs." },
                { "role": "user", "content": prompt }
            ]
        });
        return response.data.choices[0].message.content;
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