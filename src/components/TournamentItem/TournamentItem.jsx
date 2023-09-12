import React from "react";
import "./TournamentItem.scss";


function TournamentItem(props) {
    const {type, registr, name, date, rate, score, fix} = props;


    return (
        <>
        <div className="card">
            <p className="registCancel">{registr}</p>
            <div className="main">
                <div className="row">
                    <div className="game">
                       <div className="type">
                       <svg className="fix" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="icon/ type / pin">
                <path id="Union" opacity="0.6" d="M14.2113 14.3922C14.2131 14.3943 14.2151 14.3963 14.217 14.3982C14.2714 14.4525 14.3559 14.456 14.4059 14.406C14.4559 14.356 14.4524 14.2715 14.3981 14.2172C14.3961 14.2153 14.3941 14.2133 14.3921 14.2115L10.5255 9.33875C10.4634 9.42942 10.3974 9.51711 10.3279 9.60261C10.2163 9.7398 10.0956 9.87121 9.96675 10C9.87816 10.0886 9.78508 10.1737 9.68927 10.2547C9.57477 10.3516 9.45642 10.4426 9.33721 10.5267L14.2113 14.3922Z" fill="white"/>
                <path id="Union_2" d="M2.15889 6.11406C1.79157 6.14268 1.48105 6.05907 1.27074 5.84876C0.638649 5.21667 1.15106 3.67943 2.41525 2.41525C3.67943 1.15106 5.21667 0.638649 5.84876 1.27074C6.06053 1.48251 6.14383 1.79587 6.11344 2.16653C6.12299 2.2311 6.22083 2.79442 6.7995 3.37309C7.33397 3.90756 8.86973 3.70927 9.26284 3.64817C9.89024 3.48663 10.4061 3.53912 10.7129 3.84588C11.503 4.63599 10.6063 6.81374 8.71002 8.71002C6.81374 10.6063 4.63599 11.503 3.84588 10.7129C3.54667 10.4137 3.48936 9.91549 3.63663 9.30894C3.69031 8.99839 3.93831 7.38488 3.40004 6.84661C2.8034 6.24998 2.15185 6.1211 2.15185 6.1211L2.15889 6.11406Z" fill="#F73054"/>
                </g>
            </svg>
                        <span className="gameType">{type}</span>
                        <svg className="timer" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.7" clip-path="url(#clip0_1492_122)">
                            <rect x="0.5" y="0.5" width="15" height="15" rx="1.5" stroke="white"/>
                            <path d="M4.3 5.3C4.7 5.3 5 5 5 4.6C5 4.3 4.7 4 4.3 4C4.3 4 2.3 4.3 2.3 4.6C2.3 5 4.3 5.3 4.3 5.3Z" fill="white"/>
                            <path d="M4.3 11.7C4.3 11.7 2.3 12 2.3 12.3C2.3 12.7 4.3 12.9 4.3 12.9C4.7 13 5 12.7 5 12.4C5 12 4.7 11.7 4.3 11.7Z" fill="white"/>
                            <path d="M3 7.9C3.4 7.9 3.7 7.6 3.7 7.3C3.7 6.9 3.4 6.7 3 6.7C3 6.7 1 7 1 7.3C1 7.6 3 7.9 3 7.9Z" fill="white"/>
                            <path d="M3.7 9.8C3.7 9.4 3.4 9.2 3 9.2C3 9.2 1 9.5 1 9.8C1 10.2 3 10.4 3 10.4C3.4 10.4 3.7 10.1 3.7 9.8Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 3.00002V4.10002C12.2 4.30002 14 6.20002 14 8.50002C14 11 12 13 9.5 13C7 13 5 11 5 8.50002C5 6.20002 6.8 4.30002 9 4.10002V3.00002H8.4C8.1 3.00002 7.9 2.70002 7.9 2.50002C7.9 2.20002 8.1 1.90002 8.4 1.90002H10.6C10.9 1.90002 11.1 2.20002 11.1 2.50002C11.1 2.70002 10.9 3.00002 10.6 3.00002H10ZM9.5 9C9.2 9 9 8.8 9 8.5V5.5C9 5.2 9.2 5 9.5 5C9.8 5 10 5.2 10 5.5V8H12.5C12.8 8 13 8.2 13 8.5C13 8.8 12.8 9 12.5 9H9.5Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1492_122">
                            <rect width="16" height="16" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <svg className="" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="icon / type / Rapid" opacity="0.7" clip-path="url(#clip0_1492_56)">
                            <rect id="Rectangle 2103" x="0.5" y="0.5" width="15" height="15" rx="1.5" stroke="white"/>
                            <path id="rapid 2" d="M8 7L10 2L4 8V9H8L6 14L12 8V7H8Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1492_56">
                            <rect width="16" height="16" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="icon / type / FreeRoll" opacity="0.7" clip-path="url(#clip0_1492_134)">
                            <rect id="Rectangle 2103" x="0.5" y="0.5" width="15" height="15" rx="1.5" stroke="white"/>
                            <path id="Vector" d="M11.3 2H5H4V3V4H5V3H8C9.1 3 10 3.9 10 5V11C10 12.1 9.1 13 8 13H5V12H4V13V14H5H10.6C11.9 14 13 12.9 13 11.6V3.7C13 2.8 12.2 2 11.3 2Z" fill="white"/>
                            <path id="Vector_2" d="M9 8L6 5.5V7.3H2V8.6H6V10.5L9 8Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1492_134">
                            <rect width="16" height="16" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                       </div>
                       
                       <p className="gamerName">
                      {name}
                       </p>
                      
                    </div>
                     <button className="btnGame">
                       Join table
                     </button>
                </div>
                <div className="row">
                    <p className="date inform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <g opacity="0.7">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 7C12 9.76142 9.76142 12 7 12C4.23858 12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2C9.76142 2 12 4.23858 12 7ZM6 3.5C6 3.22386 6.22386 3 6.5 3C6.77614 3 7 3.22386 7 3.5V7H10.5C10.7761 7 11 7.22386 11 7.5C11 7.77614 10.7761 8 10.5 8H6.5C6.22386 8 6 7.77614 6 7.5V3.5Z" fill="white"/>
                        </g>
                    </svg>
                       <span>{date}</span> 
                    </p>
                    <p className="gamers inform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <g opacity="0.7">
                            <path d="M7 6C8.10457 6 9 5.10457 9 4C9 2.89543 8.10457 2 7 2C5.89543 2 5 2.89543 5 4C5 5.10457 5.89543 6 7 6Z" fill="white"/>
                            <path d="M7 7C5.93913 7 4.92172 7.28973 4.17158 7.80545C3.42143 8.32118 3 9.02065 3 9.75V11H11V9.75C11 9.02065 10.5786 8.32118 9.82842 7.80545C9.07828 7.28973 8.06087 7 7 7Z" fill="white"/>
                        </g>
                    </svg>
                        <span>{rate}</span>
                    </p>
                    <p className="score inform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <g opacity="0.7">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9954 2.34319L12.9908 2.31783C12.9875 2.30076 12.9829 2.28388 12.9767 2.26768C12.9534 2.19049 12.9067 2.12291 12.8434 2.07476C12.7802 2.02661 12.7038 2.00048 12.625 2H9.6311C9.58117 2.0007 9.53196 2.01149 9.48609 2.03175C9.44022 2.052 9.39861 2.08124 9.36379 2.11797C9.32897 2.15469 9.30151 2.1981 9.28304 2.2457C9.26458 2.2933 9.25544 2.34418 9.25613 2.39541V3.53881H4.74001V2.39616C4.7407 2.34493 4.73156 2.29424 4.71309 2.24664C4.69463 2.19904 4.66717 2.15563 4.63235 2.1189C4.59753 2.08218 4.5561 2.05275 4.51023 2.0325C4.46436 2.01224 4.41497 2.00145 4.36504 2.00075H1.37132C1.29256 2.00123 1.21595 2.02755 1.15271 2.0757C1.08946 2.12385 1.04287 2.19142 1.0196 2.26862C1.01344 2.28483 1.00864 2.30152 1.00532 2.31858L1.00093 2.34394C0.999692 2.36161 0.999692 2.37943 1.00093 2.3971V2.4063C1.00093 6.48415 2.50077 7.06046 4.11164 8.13532C4.12826 8.14742 4.14821 8.15359 4.16858 8.15298C4.27274 8.37458 4.43347 8.56301 4.63363 8.69847C4.8338 8.83394 5.06602 8.91138 5.30558 8.92238H6.17544C6.31313 9.42559 6.31313 9.95798 6.17544 10.4612H5.50057C4.95011 10.4612 4.00069 10.9482 4.00069 11.2306V12H10.0002V11.2306C10.0002 10.9482 9.05004 10.4612 8.50033 10.4612H7.67532C7.57474 9.95345 7.57474 9.43013 7.67532 8.92238H8.54519C8.78474 8.91138 9.01696 8.83394 9.21713 8.69847C9.4173 8.56301 9.57803 8.37458 9.68218 8.15298C9.70254 8.15354 9.72248 8.14737 9.73912 8.13532C11.3537 7.05816 13 6.48645 13 2.4063V2.3971C13.0002 2.37904 12.9986 2.36094 12.9954 2.34319ZM3.99611 6.9258C3.26728 6.54447 2.66519 5.94979 2.2659 5.21718C1.86661 4.48457 1.6881 3.64688 1.75306 2.81017H3.99758L3.99007 3.53881H3.6616C3.55685 3.53357 3.45439 3.57116 3.37653 3.64325C3.29867 3.71534 3.25179 3.81607 3.24617 3.92351C3.25179 4.03095 3.29867 4.13168 3.37653 4.20377C3.45439 4.27586 3.55685 4.31345 3.6616 4.30821H3.99611C4.55032 5.48925 4.36433 5.82694 3.99611 6.92411V6.9258ZM9.84568 6.9258C9.65676 6.51066 9.57159 6.05381 9.59778 5.59644C9.62396 5.13907 9.76064 4.69555 9.99564 4.30596H10.3301C10.4348 4.31099 10.5372 4.27338 10.615 4.20133C10.6928 4.12928 10.7398 4.02863 10.7456 3.92126C10.7398 3.81389 10.6928 3.71323 10.615 3.64118C10.5372 3.56913 10.4348 3.53152 10.3301 3.53655H10.0009L9.99417 2.80791H12.2455C12.2848 3.6607 12.078 4.50649 11.6511 5.23935C11.2243 5.97221 10.5963 6.55957 9.84568 6.92806V6.9258Z" fill="white"/>
                    </g>
                    </svg>
                        <span>{score}</span>

                    </p>
                </div>
            </div>
        </div>
        </>
    );
}

export default TournamentItem;