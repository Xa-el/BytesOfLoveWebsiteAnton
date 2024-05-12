import { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    const navigate = useNavigate();
    const [isMuted, setIsMuted] = useState(true); // Initialize as muted
    const audioRef = useRef(null); // Ref for the audio element     
    const [videoPlaying, setVideoPlaying] = useState(false);

    const toggleMute = () => {
        setIsMuted(!isMuted);
        if (audioRef.current) {
            audioRef.current.muted = !audioRef.current.muted; // Toggle the muted property
        }
    };

    useEffect(() => {
        const videoElement = document.querySelector('video');
        if (videoElement) {
            videoElement.onplay = () => {
                setVideoPlaying(true);
            };
            videoElement.onerror = () => {
                setVideoPlaying(false);
            };
        }
        if (audioRef.current) {
            audioRef.current.volume = 0.5; // Set default volume to 50%
            audioRef.current.play().catch(err => {
                console.error("Error playing audio:", err);
            });
        }
    }, []);

    return (
        <div className="home-page-container">
            <Navbar />

            <div class="picture-carousel">
                <video class="w-full h-full" controls loop autoplay>
                    <source src="/main_menu.mp4" type="video/mp4"/>
                    Your browser does not support this video.
                </video>
            </div>

            <div className="picture-carousel">
                <div className="temp-centered-text">Picture carousel</div>
            </div>

            <div className="download-title">
                How to Download
            </div>

            <div className="download-links-box">
                <div className="flex w-3/12 items-center justify-center">
                    <div className="text-2xl m-4 w-1/2 text-center">Mac</div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">
                         <a href="https://drive.google.com/uc?export=download&id=1lHRB4EOvokiN0LybZw75ij7rI1a_WWZ9">Download</a>
                    </button>
                </div>

                <div className="flex w-3/12 items-center justify-center">
                    <div className="text-2xl m-4 w-1/2 text-center">Linux</div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">
                         <a href="https://drive.google.com/uc?export=download&id=1lHRB4EOvokiN0LybZw75ij7rI1a_WWZ9">Download</a>
                    </button>
                </div>

                <div className="flex w-3/12 items-center justify-center">
                    <div className="text-2xl m-4 w-1/2 text-center">Windows</div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">
                         <a href="https://drive.google.com/uc?export=download&id=1lHRB4EOvokiN0LybZw75ij7rI1a_WWZ9">Download</a>
                    </button>
                </div>
            </div>

            <button onClick={toggleMute} className="fixed bottom-4 right-4 bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded flex items-center justify-center rounded">
            {isMuted ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553Z" />
                        <path strokeLinecap="round" d="M3 3l18 18" />
                    </svg>
                ) : (

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553Z" />
                    </svg>
                )}
            </button>            

            <audio ref={audioRef} src="main_menu.mp3" loop muted />
        </div>
    );
};

export default Home;

