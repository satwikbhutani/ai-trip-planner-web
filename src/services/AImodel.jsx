import {GoogleGenerativeAI} from "@google/generative-ai";
  
  const apiKey = import.meta.env.VITE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  console.log(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  export const startChatSession = async () => {
    try {
        const chatSession = await model.startChat({
            generationConfig,
            history: [
                {
                    role: "user",
                    parts: [
                        {
                            text: `Generate a 3-day travel plan for Singapore for 2 people with a Mid-range budget, focusing on Cultural experiences. Include Hotel Recommendations with HotelName, HotelAddress, Price, HotelImageUrl, GeoCoordinates, Rating, and a brief Description. List suitable Transportation Options within Singapore. Provide a list of Essentials for Travel with relevant emojis (e.g., 👟 for shoes, ☀️ for sunscreen). Create a Day-by-day schedule with PlaceName, PlaceDetails, PlaceImageUrl (if available), GeoCoordinates (if possible), and estimated Time spent at each location. Finally, offer Helpful Travel Tips and Suggestions for travelers in Singapore. Give price in INR.Generate a structured JSON response in the EXACT following format, with no deviations:

{
  "Hotels": [
    {
      "HotelName": "The Fullerton Hotel Singapore",
      "HotelAddress": "1 Fullerton Square, Singapore 049178",
      "Price": "$350 per night",
      "HotelImageUrl": "https://www.fullertonhotels.com/the-fullerton-hotel-singapore/images/gallery/the-fullerton-hotel-heritage-gallery-01.jpg",
      "GeoCoordinates": "",
      "Rating": 4.8,
      "Description": "A luxurious heritage hotel with stunning architecture and a prime location overlooking the Singapore River."
    },
    {
      "HotelName": "Hotel Indigo Singapore Katong",
      "HotelAddress": "86 East Coast Road, Singapore 428788",
      "Price": "$200 per night",
      "HotelImageUrl": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/480203089.jpg?k=263f0040c06b77723e95507b92730d9741800a7a60f87f7a703d81e4a7e1a408&o=&hp=1",
      "GeoCoordinates": "",
      "Rating": 4.5,
      "Description": "A stylish boutique hotel in the vibrant Katong district, known for its Peranakan heritage and colorful shophouses."
    },
    {
      "HotelName": "Lloyd's Inn",
      "HotelAddress": "2 Lloyd Road, Singapore 239091",
      "Price": "$150 per night",
      "HotelImageUrl": "https://media-cdn.tripadvisor.com/media/photo-s/1a/1a/8f/34/minimalistic-chic.jpg",
      "GeoCoordinates": "",
      "Rating": 4.3,
      "Description": "A minimalist and tranquil hotel with a focus on relaxation and wellness, featuring a dipping pool and lush greenery."
    }
  ],
  "Transportation": [
    {
      "Emoji": "🚇",
      "Name": "Singapore MRT (Mass Rapid Transit)",
       "Price": "Varies based on distance"
    },
    {
      "Emoji": "🚌",
      "Name": "Buses",
      "Price": "Varies based on distance"
    },
    {
      "Emoji": "🚕",
      "Name": "Taxis/Ride-hailing services (Grab)",
      "Price": "Varies based on distance and demand"
    },
    {
      "Emoji": "🚶",
      "Name": "Walking",
      "Price": "Free"
    }
  ],
  "Essentials": [
    {
      "Emoji": "👟",
      "Name": "Comfortable walking shoes"
    },
    {
      "Emoji": "☀️",
      "Name": "Sunscreen"
    },
    {
      "Emoji": "🦟",
      "Name": "Insect repellent"
    },
    {
      "Emoji": "☂️",
      "Name": "Raincoat/Umbrella"
    },
    {
      "Emoji": "💧",
      "Name": "Water bottle"
    },
    {
      "Emoji": "🧢",
      "Name": "Hat/Cap"
    }
  ],
  "Itinerary": [
    {
      "Day": 1,
      "Plan": [
        {
          "PlaceName": "Place Name",
          "PlaceDetails": "Brief details about the place.",
          "PlaceImageUrl": "Place Image URL",
          "GeoCoordinates": "",
          "Time": "9:00 AM - 12:00 PM"
        }
      ]
    }
  ],
  "Suggestions": [
    "Helpful travel tip 1.",
    "Helpful travel tip 2."
  ]
}

STRICTLY ensure the JSON format remains unchanged. Only replace the placeholder values with relevant data, without modifying the structure or key names.`,
                        },
                    ],
                },
            ],
        });

        console.log("Chat session initialized:", chatSession);
        return chatSession;
    } catch (error) {
        console.error("Error initializing chat session:", error);
        throw error;
    }
};