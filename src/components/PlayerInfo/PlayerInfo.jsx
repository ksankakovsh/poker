import React, { useState } from "react";
import "./PlayerInfo.scss"

function PlayerInfo() {

    return (
        <div className="info">
            <h2 className="userName">
            LongUserName <br/>
            <svg xmlns="http://www.w3.org/2000/svg" width="44" height="8" viewBox="0 0 44 8" fill="none">
                <g clipPath="url(#clip0_6_773)">
                    <path d="M4 0L5.24731 2.45763L8 2.88136L5.97849 4.78814L6.45161 7.5L4 6.22881L1.54839 7.5L1.97849 4.78814L0 2.88136L2.75269 2.45763L4 0Z" fill="#FAFF1A"/>
                    <path d="M13 0L14.2473 2.45763L17 2.88136L14.9785 4.78814L15.4516 7.5L13 6.22881L10.5484 7.5L10.9785 4.78814L9 2.88136L11.7527 2.45763L13 0Z" fill="#FAFF1A"/>
                    <path d="M22 0L23.2473 2.45763L26 2.88136L23.9785 4.78814L24.4516 7.5L22 6.22881L19.5484 7.5L19.9785 4.78814L18 2.88136L20.7527 2.45763L22 0Z" fill="#FAFF1A"/>
                    <path d="M31 0L32.2473 2.45763L35 2.88136L32.9785 4.78814L33.4516 7.5L31 6.22881L28.5484 7.5L28.9785 4.78814L27 2.88136L29.7527 2.45763L31 0Z" fill="#FAFF1A"/>
                    <path d="M40 0L41.2473 2.45763L44 2.88136L41.9785 4.78814L42.4516 7.5L40 6.22881L37.5484 7.5L37.9785 4.78814L36 2.88136L38.7527 2.45763L40 0Z" fill="#FAFF1A"/>
                </g>
                <defs>
                    <clipPath id="clip0_6_773">
                    <rect width="44" height="8" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
            </h2>
            <img src="/ava.png" alt="avatar" className="avatar"/>
            <div className="balance">
                <button type="button" className="btnBalance">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.11976 11.663C6.03695 11.7557 5.99115 11.8756 5.99115 11.9998C5.99115 12.1241 6.03695 12.244 6.11977 12.3367C6.63048 12.885 7.45965 13.6843 8.49038 14.3444C9.5256 15.0073 10.7306 15.5083 12.0001 15.5083C13.2696 15.5083 14.4746 15.0073 15.5098 14.3444C16.5405 13.6843 17.3697 12.885 17.8804 12.3367C17.9632 12.244 18.009 12.1241 18.009 11.9998C18.009 11.8756 17.9632 11.7557 17.8804 11.663C17.3697 11.1147 16.5405 10.3153 15.5098 9.65524C14.4746 8.99231 13.2696 8.49132 12.0001 8.49132C10.7306 8.49132 9.5256 8.99231 8.49038 9.65524C7.45965 10.3153 6.63047 11.1147 6.11976 11.663ZM7.95519 8.82251C9.08057 8.10184 10.4723 7.50195 12.0001 7.50195C13.5278 7.50195 14.9196 8.10184 16.045 8.82251C17.1729 9.54483 18.0671 10.41 18.6093 10.9926L18.6142 10.9978L18.6142 10.9978C18.8626 11.2726 19.0002 11.6297 19.0002 11.9998C19.0002 12.37 18.8626 12.727 18.6142 13.0018L18.6093 13.0071L18.6093 13.0071C18.0671 13.5896 17.1729 14.4548 16.045 15.1771C14.9196 15.8978 13.5278 16.4977 12.0001 16.4977C10.4723 16.4977 9.08057 15.8978 7.95519 15.1771C6.82723 14.4548 5.9331 13.5896 5.39084 13.0071L5.38595 13.0018L5.38599 13.0018C5.13753 12.727 5 12.37 5 11.9998C5 11.6297 5.13753 11.2726 5.38599 10.9978L5.39081 10.9925L5.39084 10.9926C5.9331 10.41 6.82723 9.54483 7.95519 8.82251Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.49902 11.9982C9.49902 10.6196 10.6187 9.50195 11.9998 9.50195C13.3809 9.50195 14.5006 10.6196 14.5006 11.9982C14.5006 13.3769 13.3809 14.4945 11.9998 14.4945C10.6187 14.4945 9.49902 13.3769 9.49902 11.9982Z" fill="white"/>
                    </svg>
                Show balance
                </button>
            </div>
        </div>
    );
}

export default PlayerInfo;