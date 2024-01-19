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

const useCompletion = ({ userInput }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [isValidJSON, setIsValidJSON] = useState(false);

  // Format prompt for travel planning

  const prompt = `Plan a travel itinerary for ${userInput.lengthOfTour} 
                    days to ${userInput.destination}. The budget is ${userInput.budget} 
                    and the dates are ${userInput.dates}. The travel focus is ${userInput.preferences}. 
                    ${userInput.additionalInfo || ''} If any of the above information is missing such as an obvious word in a sentence, 
                    you can fill in the word randomly to ensure the completeness as well as the accuracy of the answer. 
                    Please only return the response in JSON-compatible format. 
                    Make sure to enclose all keys in double quotes. Follow the exact format of the following example, but please fulfill in your
                    informations in each place holder like time, activityname, description... 
                    Do not leave them blank. Please make sure that 
                    the hours has been spread out in the full day and you can add more hours if needed: 
                    {
                      "Location": "Test Location",
                      "DatesSummary": "July 10-14",
                      "PackingList" : {
                          "Documents" : {
                              "1":"item1",
                              "2":"item2"
                          },
                          "Clothing": {

                          },
                          "Toiletries": {

                          },
                          "Electronics":{

                          },
                          "Miscellaneous":{

                          }
                      }
                      "Dates": {
                        "2023-07-10": {
                          "IndividualDay": "Day 1",
                          "Time": {
                            "Hour1": {
                              "time": "08:00",
                              "ActivityName": "meal/tourist attraction",
                              "description": ""
                            },
                            "Hour2": {
                              "time": "09:00",
                              "ActivityName": "meal/tourist attraction",
                              "description": ""
                            },
                            "Hour3": {
                              "time": "10:00",
                              "ActivityName": "meal/tourist attraction",
                              "description": ""
                          
                            }
                          }
                        },
                        "2023-07-11": {
                          "IndividualDay": "Day 2",
                          "Time": {
                            "Hour1": {
                              "time": "08:00",
                              "ActivityName": "meal/tourist attraction",
                              "description": ""
                            }
                          }
                        }
                      }
                    }
                    `;


  useEffect(() => {

    console.log("usecompletion", userInput);
    console.log(prompt);
    getCompletion(prompt)
      .then(response => {
        console.log("Received response:", response);  // Debugging log

        // Check if response is empty
        if (!response || response.trim() === '') {
          setError('Empty response received');
          setIsValidJSON(false);
          setLoading(false);
          return;
        }

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
