import React, { useEffect, useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

function Chatbot() {
    const [showButton, setShowButton] = useState(false);
    const [showChatbot, setShowChatbot] = useState(false);

    // Show the chatbot icon after scrolling down 100px
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Toggle chatbot visibility when the button is clicked
    const handleButtonClick = () => {
        setShowChatbot(!showChatbot);
    };

    // Chatbot steps
    const steps = [
        {
            id: '1',
            message: 'Hello! What’s your name?',
            trigger: 'getName',
        },
        {
            id: 'getName',
            user: true,
            placeholder: 'Enter your name...',
            trigger: 'welcomeUser',
        },
        {
            id: 'welcomeUser',
            message: 'Welcome to Travel Smart, {previousValue}! Would you like to go on a guided tour?',
            trigger: 'tourPrompt',
        },
        {
            id: 'tourPrompt',
            options: [
                { value: 'yes', label: 'Yes, show me around!', trigger: 'tourStart' },
                { value: 'no', label: 'No, I’ll explore on my own.', trigger: 'endTour' },
            ],
        },
        {
            id: 'tourStart',
            message: 'Awesome! We have various destinations to explore right here on the homepage.',
            trigger: 'nextOption',
        },
        {
            id: 'nextOption',
            options: [
                { value: 'next', label: 'Next', trigger: 'footerInfo' },
                { value: 'end', label: 'End Tour', trigger: 'endTour' },
            ],
        },
        {
            id: 'footerInfo',
            message: 'You can find our site map in the footer to locate all parts of the website.',
            trigger: 'contactInfo',
        },
        {
            id: 'contactInfo',
            message: 'If you need assistance, feel free to contact us at support@travelsmart.com or via WhatsApp at +123456789.',
            trigger: 'finalOption',
        },
        {
            id: 'finalOption',
            options: [
                { value: 'end', label: 'End Tour', trigger: 'endTour' },
            ],
        },
        {
            id: 'endTour',
            message: 'Thank you for visiting Travel Smart! We’re here if you need anything.',
            end: true,
        },
    ];
    
    //  theme styling
    const theme = {
        background: '#f5f8fb',
        fontFamily: 'Arial',
        headerBgColor: '#2095AE',
        headerFontColor: '#fff',
        headerFontSize: '20px',
        botBubbleColor: '#2095AE',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
    };

    return (
        <div className="z-10">
            {/* Display chatbot icon on scroll */}
            {showButton && (
                <div
                    className="fixed bottom-14 right-4 font-poppins cursor-pointer group"
                    onClick={handleButtonClick}
                >
                    {/* Chatbot icon with hover effect */}
                    <img
                        src="/images/bot1.jpg"
                        alt="Chatbot"
                        className="rounded-full w-12 h-12 bg-cover object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
                    />
                    {/* Tooltip/message on hover */}
                    <div className="absolute right-6 bottom-0 hidden group-hover:block bg-gray-800 text-white font-bold px-4 py-2 rounded-lg">
                        Would you like a guided tour?
                    </div>
                </div>
            )}

            {/* Chatbot Panel */}
            {showChatbot && (
                <div
                    className="fixed bg-tertiary backdrop-blur-sm h-screen flex flex-col justify-end items-end  inset-0 bg-opacity-35 bottom-4 right-4  w-full   rounded-lg p-4 transition-all duration-500"
                    style={{ zIndex: 1000 }}
                >
                    {/* Close button */}
                    <div className="flex  justify-end ">
                        <button
                            className="text-red-800       text-xl hover:text-2xl duration-300 ease-linear font-semibold"
                            onClick={handleButtonClick}
                        >
                            ✕
                        </button>
                    </div>
                    {/* Chatbot Component */}
                   <div className='w-full flex justify-end h-full '>
                   <ThemeProvider theme={theme}>
                        <ChatBot
                            steps={steps}
                            headerTitle="Travel Smart Assistant"
                            botDelay={800}
                            enableSmoothScroll={true}
                            floating={false}
                            style={{ borderRadius: '10px' }} 
                        />
                    </ThemeProvider>
                   </div>
                </div>
            )}
        </div>
    );
}

export default Chatbot;
