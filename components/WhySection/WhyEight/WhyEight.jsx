import { Container, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";

import cls from "./whyEight.module.scss"

const WhyEight = () => {
    return (
        <div className={cls.infoBox}>
            <Container maxWidth="xl">
                <div className={cls.header}>
                    <h1>Our core values</h1>
                    <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                </div>
                <Grid container spacing={4}>
                    <Grid item md={4} lg={3}>
                        <Link href="#" className={cls.card} style={{ backgroundColor: "#0F8AC2", backgroundImage: 'url(./imgs/photos/photo-19.jpg)' }}>
                            <div className={cls.content}>
                                <div className={cls.iconContainer}>
                                    <div className={cls.icon}>
                                        <svg width="60" height="80" viewBox="0 0 60 80" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M57.3913 66.087C58.3513 66.087 59.1304 65.3078 59.1304 64.3478V5.21739C59.1304 2.34087 56.7895 0 53.913 0H5.21739C2.34087 0 0 2.34087 0 5.21739V71.3043C0 76.0991 3.90087 80 8.69565 80H57.3913C58.3513 80 59.1304 79.2209 59.1304 78.2609C59.1304 77.3009 58.3513 76.5217 57.3913 76.5217C54.5148 76.5217 52.1739 74.1809 52.1739 71.3043C52.1739 68.4278 54.5148 66.087 57.3913 66.087ZM50.4382 76.5217H8.69565C5.81913 76.5217 3.47826 74.1809 3.47826 71.3043C3.47826 68.4278 5.81913 66.087 8.69565 66.087H50.4382C49.3461 67.5409 48.6956 69.3478 48.6956 71.3043C48.6956 73.2609 49.3461 75.0678 50.4382 76.5217ZM8.69565 62.6087C6.73043 62.6087 4.93565 63.2887 3.47826 64.393V5.21739C3.47826 4.25913 4.25913 3.47826 5.21739 3.47826H53.913C54.8713 3.47826 55.6522 4.25739 55.6522 5.21739V62.6087H8.69565Z" fill="currentColor"></path>
                                            <path d="M29.5079 10.4348C22.7949 10.4348 17.334 15.8957 17.334 22.6087C17.334 29.3218 22.7949 34.7826 29.5079 34.7826C36.2209 34.7826 41.6818 29.3218 41.6818 22.6087C41.6818 15.8957 36.2209 10.4348 29.5079 10.4348ZM29.5079 31.3044C24.7131 31.3044 20.8122 27.4035 20.8122 22.6087C20.8122 17.8139 24.7131 13.9131 29.5079 13.9131C34.3027 13.9131 38.2035 17.8139 38.2035 22.6087C38.2035 27.4035 34.3027 31.3044 29.5079 31.3044Z" fill="currentColor"></path>
                                            <path d="M47.1877 41.7393H12.4051C11.4451 41.7393 10.666 42.5184 10.666 43.4784V53.9132C10.666 54.8732 11.4451 55.6523 12.4051 55.6523H47.1877C48.1477 55.6523 48.9269 54.8732 48.9269 53.9132V43.4784C48.9269 42.5184 48.1477 41.7393 47.1877 41.7393ZM45.4486 52.174H14.1443V45.2175H45.4486V52.174Z" fill="currentColor"></path>
                                        </svg>

                                    </div>
                                    <svg width="150" height="106" viewBox="0 0 150 106" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.4187 85.1091C15.4187 85.1091 26.4761 93.6132 45.3188 90.5343C64.1614 87.4555 98.2625 101.399 98.2625 101.399C98.2625 101.399 116.382 111.021 134.544 102.436C152.706 93.8503 149.834 76.0424 149.834 76.0424C149.668 73.4378 149.49 60.6871 126.152 28.4475C117.729 16.808 108.827 9.0224 98.2058 4.84294C76.0661 -3.86635 48.8639 -0.578698 29.6207 12.6922C20.1267 19.2392 9.89887 28.5289 3.93941 40.7205C-9.4011 68.0126 15.4187 85.1091 15.4187 85.1091Z" fill="currentColor"></path>
                                    </svg>

                                </div>

                                <div className={cls.footer}>
                                    <h5>Active Learning</h5>
                                </div>
                            </div>
                        </Link>
                    </Grid>
                    <Grid item md={4} lg={3}>
                        <Link href="#" className={cls.card} style={{ backgroundColor: "#4E35A3", backgroundImage: 'url(./imgs/photos/photo-20.jpg)' }}>
                            <div className={cls.content}>
                                <div className={cls.iconContainer}>
                                    <div className={cls.icon}>
                                        <svg width="74" height="80" viewBox="0 0 74 80" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.30499 80H70.211C72.2446 80 73.8991 78.3345 73.8991 76.2873V74.404C73.8991 73.456 73.1302 72.6846 72.1851 72.6846H70.7225C71.0166 72.091 71.1827 71.4301 71.1827 70.7429V46.2897C71.1827 43.8528 69.2002 41.8702 66.7633 41.8702H51.5949C50.9475 41.8702 50.423 42.3949 50.423 43.0421C50.423 43.6893 50.9475 44.2139 51.5949 44.2139H66.7633C67.9078 44.2139 68.8389 45.145 68.8389 46.2897V70.7429C68.8389 71.6026 68.2921 72.3804 67.4916 72.6846H31.6574C30.8308 72.3681 30.308 71.5743 30.308 70.7429C30.308 68.3457 30.308 48.6693 30.308 46.2897C30.308 45.1452 31.2393 44.2139 32.3838 44.2139H46.1261C46.7735 44.2139 47.298 43.6893 47.298 43.0421C47.298 42.3949 46.7735 41.8702 46.1261 41.8702H37.4982L37.4957 38.8578C40.18 36.8931 42.039 33.8684 42.4545 30.4048C45.5037 30.1374 47.7727 27.7066 47.7727 24.8735C47.7727 22.9333 46.7885 21.1384 45.2567 20.0955C45.4195 19.7055 45.5102 19.2781 45.5102 18.8297V16.5329C45.5102 15.8857 44.9856 15.3611 44.3383 15.3611C43.6909 15.3611 43.1664 15.8857 43.1664 16.5329V18.83C43.1664 19.3394 42.7603 19.7919 42.1703 19.7822C40.5575 19.7586 39.3275 18.4219 39.3275 16.8998C39.3275 16.265 38.8971 15.7137 38.281 15.5592C37.6528 15.4022 37.0201 15.7018 36.7284 16.2467C35.5618 18.4287 33.3026 19.7844 30.8324 19.7844H17.4159C16.2921 19.7844 15.2802 18.8712 15.2802 17.6487V9.02726C15.2802 5.34192 18.2784 2.34377 21.9637 2.34377H33.7848C36.5299 2.34377 36.9945 3.55612 37.2585 4.90691C37.5709 6.50427 39.0667 7.61178 40.7409 7.48303C41.9167 7.39271 43.1661 8.41132 43.1661 9.83336V11.0641C43.1661 11.7113 43.6906 12.236 44.338 12.236C44.9853 12.236 45.5098 11.7113 45.5098 11.0641V9.83336C45.5098 7.00943 43.0612 4.95395 40.5611 5.14613C40.0651 5.18551 39.6442 4.89441 39.5585 4.45707C38.9721 1.45798 37.0835 0 33.7846 0H21.9636C16.986 0 12.9363 4.04956 12.9363 9.02726V17.6486C12.9363 18.8758 13.4327 19.9891 14.2349 20.7989C13.1012 21.8688 12.4071 23.3555 12.4071 24.8885C12.4071 27.7108 14.6685 30.1459 17.7245 30.4062C18.1287 33.8078 19.9209 36.8503 22.6747 38.8441V41.8699C19.5425 43.0931 10.1094 46.7774 6.94611 48.0127C6.93955 48.0152 6.93298 48.0179 6.92642 48.0205C3.6389 49.3735 0.100586 53.2506 0.100586 58.5655V76.7951C0.10043 78.5623 1.53794 80 3.30499 80ZM42.5456 22.1113C42.9123 22.0727 43.2814 21.967 43.5853 21.8263C44.6764 22.3813 45.4288 23.5911 45.4288 24.8736C45.4288 26.4758 44.1551 27.7665 42.5456 28.0332V22.1113ZM17.6338 28.036C16.0237 27.7754 14.7507 26.4863 14.7507 24.8885C14.7507 23.7672 15.4416 22.64 16.4701 22.0266C16.9765 22.1358 17.3267 22.128 17.6338 22.128V28.036ZM71.5554 75.0284V76.2873C71.5554 77.0422 70.9524 77.6562 70.211 77.6562H28.9357C28.1944 77.6562 27.5913 77.0422 27.5913 76.2873V75.0284H71.5554ZM32.3838 41.8702C30.3238 41.8702 28.5888 43.2869 28.1011 45.1971L25.0091 42.105C25.0214 41.9103 25.0183 42.2672 25.0183 40.178C26.708 40.9078 28.4782 41.2278 30.2507 41.2278C31.9927 41.2278 33.6501 40.8614 35.153 40.2052L35.1545 41.8702H32.3838ZM19.9776 28.933V22.128H30.8322C33.4227 22.128 35.8298 21.0222 37.507 19.1787C38.0571 20.31 39.0048 21.2117 40.1657 21.7077C40.1779 21.7128 40.1896 21.7188 40.2018 21.7239V28.9332C40.2018 32.3112 38.4831 35.4281 35.6923 37.2584C28.9792 41.5099 19.9776 36.9512 19.9776 28.933ZM23.61 44.0208L27.9641 48.3748V50.6138L26.7949 51.7831C26.643 51.9351 26.3874 51.9351 26.2355 51.7831L19.9159 45.4636L23.61 44.0208ZM2.4442 58.5656C2.4442 54.0481 5.64891 51.0854 7.80893 50.1918L17.5321 46.3944L24.578 53.4403C25.4956 54.3579 26.9042 54.4878 27.9641 53.8254V70.7429C27.9641 71.3893 28.1186 72.0743 28.4208 72.6846H26.9617C26.0166 72.6846 25.2475 73.456 25.2475 74.404V76.2873C25.2475 76.7729 25.3448 77.2454 25.5072 77.6562H12.306C12.306 75.6758 12.306 63.1614 12.306 60.2084C12.306 59.5612 11.7815 59.0366 11.1341 59.0366C10.4868 59.0366 9.96223 59.5612 9.96223 60.2084V63.086H2.4442V58.5656ZM2.4442 65.4297H9.96223V68.3465H2.4442V65.4297ZM2.4442 70.6902H9.96223V77.6564H3.30499C2.83045 77.6564 2.4442 77.2701 2.4442 76.7956V70.6902Z" fill="currentColor"></path>
                                            <path d="M36.4856 52.7463C35.7951 53.0922 35.3662 53.7869 35.3662 54.5592C35.3662 55.3316 35.7951 56.0263 36.4857 56.3724L39.1911 57.7279V64.1514C39.1911 65.2368 39.7756 66.2265 40.7167 66.7339C45.7922 69.4705 51.9393 69.4647 57.004 66.7339C57.3101 66.5687 57.5778 66.352 57.8008 66.0981L57.7229 66.395C57.3222 67.9237 58.4742 69.4186 60.0562 69.4186H62.3094C63.8896 69.4186 65.0439 67.9253 64.6428 66.395C64.6428 66.395 64.6428 66.395 64.6428 66.3948L64.1421 64.4845C63.8988 63.5565 63.2231 62.8323 62.3549 62.4887V54.5592C62.3549 53.7869 61.926 53.0922 61.2353 52.7461L50.2526 47.2433C49.381 46.8065 48.3404 46.8067 47.4688 47.2433L36.4856 52.7463ZM61.1827 64.6132C61.5639 64.611 61.8069 64.8206 61.8747 65.0787L62.3755 66.9892C62.3869 67.0332 62.3549 67.0748 62.3092 67.0748H60.0561C60.0109 67.0748 59.9783 67.0336 59.99 66.9892L60.4908 65.0785C60.5589 64.819 60.7953 64.6106 61.1827 64.6132ZM58.5297 57.7279L60.0108 56.9857V62.4873C59.3891 62.7335 58.8658 63.1762 58.5297 63.7504V57.7279ZM56.1859 64.1514C56.1859 64.3706 56.0704 64.5745 55.8917 64.6709C51.5112 67.0329 46.2005 67.0281 41.8291 64.6709C41.6503 64.5745 41.5349 64.3706 41.5349 64.1514V58.9021L47.4685 61.8751C48.3218 62.3029 49.3632 62.3206 50.2523 61.8751L56.1859 58.9021V64.1514ZM49.2024 49.3389L57.2825 53.3874H48.8604C48.213 53.3874 47.6885 53.9121 47.6885 54.5592C47.6885 55.2064 48.213 55.7311 48.8604 55.7311H57.2828C56.4642 56.1413 50.1115 59.3243 49.2024 59.7798C48.9882 59.8871 48.7324 59.8871 48.5182 59.7798L38.099 54.5592L48.5182 49.3389C48.7324 49.2315 48.9882 49.2315 49.2024 49.3389Z" fill="currentColor"></path>
                                        </svg>

                                    </div>
                                    <svg width="150" height="106" viewBox="0 0 150 106" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.4187 85.1091C15.4187 85.1091 26.4761 93.6132 45.3188 90.5343C64.1614 87.4555 98.2625 101.399 98.2625 101.399C98.2625 101.399 116.382 111.021 134.544 102.436C152.706 93.8503 149.834 76.0424 149.834 76.0424C149.668 73.4378 149.49 60.6871 126.152 28.4475C117.729 16.808 108.827 9.0224 98.2058 4.84294C76.0661 -3.86635 48.8639 -0.578698 29.6207 12.6922C20.1267 19.2392 9.89887 28.5289 3.93941 40.7205C-9.4011 68.0126 15.4187 85.1091 15.4187 85.1091Z" fill="currentColor"></path>
                                    </svg>

                                </div>
                                <div className={cls.footer}>
                                    <h5>Expert Teachers</h5>
                                </div>
                            </div>
                        </Link>
                    </Grid>
                    <Grid item md={4} lg={3}>
                        <Link href="#" className={cls.card} style={{ backgroundColor: "#FEBE44", backgroundImage: 'url(./imgs/photos/photo-21.jpg)' }}>
                            <div className={cls.content}>
                                <div className={cls.iconContainer}>
                                    <div className={cls.icon}>
                                        <svg width="54" height="80" viewBox="0 0 54 80" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M26.5623 37.5524C34.5049 37.5524 40.9665 31.0906 40.9665 23.148C40.9665 19.9097 39.9167 16.8508 37.9307 14.302C37.4003 13.6213 36.4184 13.4995 35.7377 14.0298C35.0568 14.5603 34.9349 15.5423 35.4655 16.223C37.0197 18.2177 37.8412 20.6123 37.8412 23.148C37.8412 29.3673 32.7816 34.427 26.5623 34.427C20.3431 34.427 15.2835 29.3673 15.2835 23.148C15.2835 16.9288 20.3431 11.8692 26.5623 11.8692C27.4254 11.8692 28.125 11.1695 28.125 10.3066C28.125 9.44366 27.4254 8.7439 26.5623 8.7439C18.6198 8.7439 12.1582 15.2057 12.1582 23.148C12.158 31.0906 18.6198 37.5524 26.5623 37.5524Z" fill="currentColor"></path>
                                            <path d="M32.2902 13.2139C33.0342 13.2139 33.6718 12.6951 33.8216 11.9575C33.9893 11.1177 33.4491 10.2931 32.5949 10.1198C31.6503 9.92883 30.7275 10.6523 30.7275 11.6528C30.7275 12.5121 31.4226 13.2139 32.2902 13.2139Z" fill="currentColor"></path>
                                            <path d="M50.7555 51.938C50.5162 49.6881 49.0929 47.8357 47.1423 46.9717C45.5305 46.2584 44.3354 46.4712 42.2469 46.447H39.8281L46.5383 35.2538C52.0412 26.0745 50.5992 14.3782 43.0314 6.81035C33.9509 -2.27012 19.1753 -2.27012 10.0947 6.81035C2.52702 14.3782 1.08484 26.0744 6.58791 35.2538L13.2981 46.447H8.10385C4.91086 46.447 2.28231 48.8446 1.98946 52.024C-0.139663 75.1367 -0.00152335 73.4546 0.00488357 73.9359C0.0466066 77.0442 2.40201 79.6356 5.50264 79.9634C6.11067 80.0276 3.56916 79.9853 46.9105 79.9973C50.2974 79.9973 53.0502 77.2477 53.0507 73.8558C53.0505 73.2416 53.1209 74.3053 50.7555 51.938ZM44.6495 49.5721C46.1953 49.5721 47.4842 50.7313 47.6476 52.2684L47.9688 55.2907C47.3851 55.6253 46.7208 55.8043 46.0401 55.8043C42.8051 55.8043 41.0277 52.0844 42.9432 49.5721H44.6495ZM26.5629 3.12372C42.2494 3.12372 51.8864 20.2542 43.8577 33.6467L30.2274 56.3832C28.5686 59.1497 24.5585 59.1519 22.8985 56.3832L9.26819 33.6467C1.23345 20.2444 10.8857 3.12372 26.5629 3.12372ZM8.10353 49.5721H15.1713L20.2178 57.99C23.0896 62.7805 30.0333 62.7846 32.9077 57.99L37.9541 49.5721H39.4302C37.8163 54.1275 41.2059 58.9297 46.04 58.9297C46.8205 58.9297 47.5884 58.7978 48.315 58.5481L49.2806 67.632L44.9842 64.7512C42.8693 63.3329 40.1792 63.2325 37.9641 64.4877L30.4666 68.7371C29.5879 68.112 21.2094 62.1519 20.0079 61.2971C17.4095 59.4486 13.9766 59.3355 11.2621 61.0086L3.88091 65.5585L5.10135 52.3102C5.24511 50.7494 6.53587 49.5721 8.10353 49.5721ZM47.5447 76.8065C46.9552 76.9306 49.4963 76.8486 6.14427 76.872C4.36408 76.872 2.97925 75.3464 3.14208 73.5806L3.52243 69.4512L12.9022 63.6695C14.5456 62.6568 16.6236 62.7252 18.1963 63.8441C19.5989 64.8418 31.9391 73.6203 33.5602 74.7735C34.2622 75.2728 35.2381 75.1107 35.7394 74.406C36.2397 73.7026 36.075 72.727 35.3718 72.2268L33.2772 70.7367L39.5051 67.2071C40.6847 66.5384 42.1174 66.592 43.2437 67.3471L49.7111 71.6835C49.9038 73.5426 49.9252 73.5823 49.926 73.8593C49.9299 75.3101 48.8898 76.5227 47.5447 76.8065Z" fill="currentColor"></path>
                                        </svg>

                                    </div>
                                    <svg width="150" height="106" viewBox="0 0 150 106" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.4187 85.1091C15.4187 85.1091 26.4761 93.6132 45.3188 90.5343C64.1614 87.4555 98.2625 101.399 98.2625 101.399C98.2625 101.399 116.382 111.021 134.544 102.436C152.706 93.8503 149.834 76.0424 149.834 76.0424C149.668 73.4378 149.49 60.6871 126.152 28.4475C117.729 16.808 108.827 9.0224 98.2058 4.84294C76.0661 -3.86635 48.8639 -0.578698 29.6207 12.6922C20.1267 19.2392 9.89887 28.5289 3.93941 40.7205C-9.4011 68.0126 15.4187 85.1091 15.4187 85.1091Z" fill="currentColor"></path>
                                    </svg>

                                </div>

                                <div className={cls.footer}>
                                    <h5>Strategi Location</h5>
                                </div>
                            </div>
                        </Link>
                    </Grid>
                    <Grid item md={4} lg={3}>
                        <Link href="#" className={cls.card} style={{ backgroundColor: "#FF8E71", backgroundImage: 'url(./imgs/photos/photo-22.jpg)' }}>
                            <div className={cls.content}>
                                <div className={cls.iconContainer}>
                                    <div className={cls.icon}>
                                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M58.3327 80.0001C46.386 80.0001 36.666 70.2801 36.666 58.3334C36.666 46.3867 46.386 36.6667 58.3327 36.6667C70.2793 36.6667 79.9993 46.3867 79.9993 58.3334C79.9993 70.2801 70.2793 80.0001 58.3327 80.0001ZM58.3327 40.0001C48.2227 40.0001 39.9993 48.2267 39.9993 58.3334C39.9993 68.4401 48.2227 76.6668 58.3327 76.6668C68.4427 76.6668 76.666 68.4401 76.666 58.3334C76.666 48.2267 68.4427 40.0001 58.3327 40.0001Z" fill="currentColor"></path>
                                            <path d="M55.0002 66.6666C54.5602 66.6666 54.1335 66.4899 53.8202 66.1799L47.1535 59.5133C46.5035 58.8633 46.5035 57.8066 47.1535 57.1566C47.8035 56.5066 48.8602 56.5066 49.5102 57.1566L54.9169 62.5633L65.4102 50.5699C66.0169 49.8733 67.0702 49.8066 67.7635 50.4133C68.4569 51.0199 68.5269 52.0699 67.9202 52.7633L56.2535 66.0966C55.9502 66.4433 55.5135 66.6499 55.0535 66.6666C55.0369 66.6666 55.0169 66.6666 55.0002 66.6666Z" fill="currentColor"></path>
                                            <path d="M31.6667 70H8.33333C3.74 70 0 66.2633 0 61.6667V18.3333C0 13.7367 3.74 10 8.33333 10H15C15.92 10 16.6667 10.7467 16.6667 11.6667C16.6667 12.5867 15.92 13.3333 15 13.3333H8.33333C5.57667 13.3333 3.33333 15.5767 3.33333 18.3333V61.6667C3.33333 64.4233 5.57667 66.6667 8.33333 66.6667H31.6667C32.5867 66.6667 33.3333 67.4133 33.3333 68.3333C33.3333 69.2533 32.5867 70 31.6667 70Z" fill="currentColor"></path>
                                            <path d="M55 30C54.08 30 53.3333 29.2533 53.3333 28.3333V18.3333C53.3333 15.5767 51.09 13.3333 48.3333 13.3333H41.6667C40.7467 13.3333 40 12.5867 40 11.6667C40 10.7467 40.7467 10 41.6667 10H48.3333C52.9267 10 56.6667 13.7367 56.6667 18.3333V28.3333C56.6667 29.2533 55.92 30 55 30Z" fill="currentColor"></path>
                                            <path d="M38.334 20H18.334C15.5773 20 13.334 17.7567 13.334 15V8.33333C13.334 7.41333 14.0807 6.66667 15.0007 6.66667H20.1673C20.944 2.86667 24.3073 0 28.334 0C32.3607 0 35.724 2.86667 36.5007 6.66667H41.6673C42.5873 6.66667 43.334 7.41333 43.334 8.33333V15C43.334 17.7567 41.0907 20 38.334 20ZM16.6673 10V15C16.6673 15.9167 17.414 16.6667 18.334 16.6667H38.334C39.254 16.6667 40.0007 15.9167 40.0007 15V10H35.0007C34.0807 10 33.334 9.25333 33.334 8.33333C33.334 5.57667 31.0907 3.33333 28.334 3.33333C25.5773 3.33333 23.334 5.57667 23.334 8.33333C23.334 9.25333 22.5873 10 21.6673 10H16.6673Z" fill="currentColor"></path>
                                            <path d="M45 30.0001H11.6667C10.7467 30.0001 10 29.2534 10 28.3334C10 27.4134 10.7467 26.6667 11.6667 26.6667H45C45.92 26.6667 46.6667 27.4134 46.6667 28.3334C46.6667 29.2534 45.92 30.0001 45 30.0001Z" fill="currentColor"></path>
                                            <path d="M35 40.0001H11.6667C10.7467 40.0001 10 39.2534 10 38.3334C10 37.4134 10.7467 36.6667 11.6667 36.6667H35C35.92 36.6667 36.6667 37.4134 36.6667 38.3334C36.6667 39.2534 35.92 40.0001 35 40.0001Z" fill="currentColor"></path>
                                            <path d="M28.3333 50.0001H11.6667C10.7467 50.0001 10 49.2534 10 48.3334C10 47.4134 10.7467 46.6667 11.6667 46.6667H28.3333C29.2533 46.6667 30 47.4134 30 48.3334C30 49.2534 29.2533 50.0001 28.3333 50.0001Z" fill="currentColor"></path>
                                        </svg>

                                    </div>
                                    <svg width="150" height="106" viewBox="0 0 150 106" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.4187 85.1091C15.4187 85.1091 26.4761 93.6132 45.3188 90.5343C64.1614 87.4555 98.2625 101.399 98.2625 101.399C98.2625 101.399 116.382 111.021 134.544 102.436C152.706 93.8503 149.834 76.0424 149.834 76.0424C149.668 73.4378 149.49 60.6871 126.152 28.4475C117.729 16.808 108.827 9.0224 98.2058 4.84294C76.0661 -3.86635 48.8639 -0.578698 29.6207 12.6922C20.1267 19.2392 9.89887 28.5289 3.93941 40.7205C-9.4011 68.0126 15.4187 85.1091 15.4187 85.1091Z" fill="currentColor"></path>
                                    </svg>

                                </div>

                                <div className={cls.footer}>
                                    <h5>Full Day Programs</h5>
                                </div>
                            </div>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default WhyEight;