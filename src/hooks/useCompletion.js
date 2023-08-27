import { useState, useEffect } from 'react';
import { getCompletion } from '../api/OpenAIApi';

const isResponseValidJSON = (jsonData) => {
    // Check if it's an object
    if (typeof jsonData !== 'object' || jsonData === null) {
        return false;
    }

    // Check for 'Location' key
    if (!jsonData.hasOwnProperty('Location')) {
        return false;
    }

    // Check for 'Dates' key and if it's an object
    if (!jsonData.hasOwnProperty('Dates') || typeof jsonData['Dates'] !== 'object') {
        return false;
    }

    // You can add more checks based on your specific requirements
    return true;
};

const useCompletion = (userInput) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [isValidJSON, setIsValidJSON] = useState(false);

    // Format prompt for travel planning
    // Format prompt for travel planning
    // Format prompt for travel planning
    const prompt = `Plan a travel itinerary for ${userInput.lengthOfTour} \
                    days to ${userInput.destination}. The budget is ${userInput.budget} \
                    and the dates are ${userInput.dates}. The travel focus is ${userInput.preferences}. \
                    ${userInput.additionalInfo || ''} Please return the response in JSON-compatible format. 
                    Make sure to enclose all keys in double quotes. For example: 
                    {
                        "Location": "Test Location",
                        "Dates": {
                          "2023-07-10": {
                            "description": "Day 1 Description",
                            "Time": {
                              "Hour1": {
                                "time": "08:00",
                                "temperature": "25\\u00B0C",
                                "weather": "Sunny"
                              },
                              "Hour2": {
                                "time": "09:00",
                                "temperature": "27\\u00B0C",
                                "weather": "Sunny"
                                
                              }
                              // add more hours if needed
                            }
                          }
                          // add more dates if needed
                        }
                      }`;


    useEffect(() => {
    getCompletion(prompt)
        .then(response => {
            console.log("Received response:", response);  // Debugging log

            try {
                // Validate if the string is a complete JSON string
                if (response.endsWith('}')) {
                    const parsedData = JSON.parse(response); // Parse the string into JSON
                    console.log("Parsed JSON:", parsedData);
                    setData(parsedData);
                    
                    // Validate the parsed data
                    if (isResponseValidJSON(parsedData)) {
                        setIsValidJSON(true);
                    } else {
                        setIsValidJSON(false);
                        setError('Parsed JSON does not meet the expected format');
                    }
                } else {
                    setError('Incomplete JSON string received');
                    console.log("Incomplete JSON string:", response);
                    setIsValidJSON(false);
                }
            } catch (e) {
                setError(`Failed to parse JSON: ${e.message}`);
                console.log("Original JSON string:", response);
                setIsValidJSON(false);
            }
            
            setLoading(false);
        })
        .catch(error => {
            console.error(error);
            setError(error);
            setIsValidJSON(false);
            setLoading(false);
        });
    }, [prompt]);

    return { loading, error, data, isValidJSON };
};
export default useCompletion;
