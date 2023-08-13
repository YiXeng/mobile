import { useState, useEffect } from 'react';
import { getCompletion } from '../api/OpenAIApi';

const useCompletion = (userInput) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    // Format prompt for travel planning
    const prompt = `Plan a travel itinerary for ${userInput.lengthOfTour} \
                    days to ${userInput.destination}. The budget is ${userInput.budget} \
                    and the dates are ${userInput.dates}. The travel focus is ${userInput.preferences}. \
                    ${userInput.additionalInfo || ''}`;

    useEffect(() => {
        getCompletion(prompt)
            .then(response => {
                setData(response);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setError(error);
                setLoading(false);
            });
    }, [prompt]);

    return { loading, error, data };
};

export default useCompletion;
