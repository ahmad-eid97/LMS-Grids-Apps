import { Container, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";
import Post from "../NewsOne/Post";

import cls from "./newsThree.module.scss"

const NewsThree = () => {
    return (
        <section className={cls.News}>
            <Container maxWidth="xl">
                <Grid container className={cls.header} alignItems="center">
                    <Grid item md >
                        <h1>News & Events</h1>
                        <p>Discover your perfect program in our courses.</p>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item lg={4} md={6} xs={12}>
                        <div className={cls.card}>
                            <Grid container spacing={3}>
                                <Grid item xs='auto'>
                                    <Link href="#" className={cls.date}>
                                        <div class="w-100 text-center">
                                            <h3 className={cls.day}>06</h3>
                                            <span className={cls.month}>April</span>
                                        </div>
                                    </Link>
                                </Grid>
                                <Grid item xs>
                                    <div className={cls.content}>
                                        <Link href="#">
                                            <h5>Elegant Light Box Paper New Design Conference</h5>
                                        </Link>
                                        <div className={cls.location}>
                                            <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.9748 3.12964C13.6007 1.14086 11.4229 0 9.0002 0C6.57754 0 4.39972 1.14086 3.02557 3.12964C1.65816 5.10838 1.34243 7.61351 2.17929 9.82677C2.40313 10.4312 2.75894 11.0184 3.23433 11.5687L8.52105 17.7784C8.64062 17.919 8.8158 18 9.0002 18C9.18459 18 9.35978 17.919 9.47934 17.7784L14.7646 11.5703C15.2421 11.0169 15.5974 10.4303 15.8194 9.83078C16.658 7.61351 16.3422 5.10838 14.9748 3.12964ZM14.6408 9.38999C14.4697 9.85257 14.1902 10.3099 13.8107 10.7498C13.8096 10.7509 13.8086 10.7519 13.8077 10.7532L9.0002 16.3999L4.1897 10.7497C3.8104 10.3101 3.53094 9.85282 3.35808 9.38581C2.66599 7.55539 2.92864 5.48413 4.06088 3.84546C5.19668 2.20155 6.9971 1.25873 9.0002 1.25873C11.0033 1.25873 12.8035 2.20152 13.9393 3.84546C15.0718 5.48413 15.3346 7.55539 14.6408 9.38999Z" fill="currentColor"></path>
                                                <path d="M9.00019 3.73438C7.0569 3.73438 5.47571 5.31535 5.47571 7.25886C5.47571 9.20237 7.05668 10.7833 9.00019 10.7833C10.9437 10.7833 12.5247 9.20237 12.5247 7.25886C12.5247 5.31556 10.9435 3.73438 9.00019 3.73438ZM9.00019 9.52457C7.75088 9.52457 6.73444 8.50814 6.73444 7.25882C6.73444 6.00951 7.75088 4.99307 9.00019 4.99307C10.2495 4.99307 11.2659 6.00951 11.2659 7.25882C11.2659 8.50814 10.2495 9.52457 9.00019 9.52457Z" fill="currentColor"></path>
                                            </svg>

                                            <div className={cls.city}>London, UK</div>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                            <div class="row gx-0">
                                <div class="col-auto">
                                </div>

                                <div class="col">
                                </div>
                            </div>
                        </div>
                        <div className={cls.card}>
                            <Grid container spacing={3}>
                                <Grid item xs='auto'>
                                    <Link href="#" className={cls.date}>
                                        <div class="w-100 text-center">
                                            <h3 className={cls.day}>06</h3>
                                            <span className={cls.month}>April</span>
                                        </div>
                                    </Link>
                                </Grid>
                                <Grid item xs>
                                    <div className={cls.content}>
                                        <Link href="#">
                                            <h5>Elegant Light Box Paper New Design Conference</h5>
                                        </Link>
                                        <div className={cls.location}>
                                            <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.9748 3.12964C13.6007 1.14086 11.4229 0 9.0002 0C6.57754 0 4.39972 1.14086 3.02557 3.12964C1.65816 5.10838 1.34243 7.61351 2.17929 9.82677C2.40313 10.4312 2.75894 11.0184 3.23433 11.5687L8.52105 17.7784C8.64062 17.919 8.8158 18 9.0002 18C9.18459 18 9.35978 17.919 9.47934 17.7784L14.7646 11.5703C15.2421 11.0169 15.5974 10.4303 15.8194 9.83078C16.658 7.61351 16.3422 5.10838 14.9748 3.12964ZM14.6408 9.38999C14.4697 9.85257 14.1902 10.3099 13.8107 10.7498C13.8096 10.7509 13.8086 10.7519 13.8077 10.7532L9.0002 16.3999L4.1897 10.7497C3.8104 10.3101 3.53094 9.85282 3.35808 9.38581C2.66599 7.55539 2.92864 5.48413 4.06088 3.84546C5.19668 2.20155 6.9971 1.25873 9.0002 1.25873C11.0033 1.25873 12.8035 2.20152 13.9393 3.84546C15.0718 5.48413 15.3346 7.55539 14.6408 9.38999Z" fill="currentColor"></path>
                                                <path d="M9.00019 3.73438C7.0569 3.73438 5.47571 5.31535 5.47571 7.25886C5.47571 9.20237 7.05668 10.7833 9.00019 10.7833C10.9437 10.7833 12.5247 9.20237 12.5247 7.25886C12.5247 5.31556 10.9435 3.73438 9.00019 3.73438ZM9.00019 9.52457C7.75088 9.52457 6.73444 8.50814 6.73444 7.25882C6.73444 6.00951 7.75088 4.99307 9.00019 4.99307C10.2495 4.99307 11.2659 6.00951 11.2659 7.25882C11.2659 8.50814 10.2495 9.52457 9.00019 9.52457Z" fill="currentColor"></path>
                                            </svg>

                                            <div className={cls.city}>London, UK</div>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                            <div class="row gx-0">
                                <div class="col-auto">
                                </div>

                                <div class="col">
                                </div>
                            </div>
                        </div>
                        <div className={cls.card}>
                            <Grid container spacing={3}>
                                <Grid item xs='auto'>
                                    <Link href="#" className={cls.date}>
                                        <div class="w-100 text-center">
                                            <h3 className={cls.day}>06</h3>
                                            <span className={cls.month}>April</span>
                                        </div>
                                    </Link>
                                </Grid>
                                <Grid item xs>
                                    <div className={cls.content}>
                                        <Link href="#">
                                            <h5>Elegant Light Box Paper New Design Conference</h5>
                                        </Link>
                                        <div className={cls.location}>
                                            <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.9748 3.12964C13.6007 1.14086 11.4229 0 9.0002 0C6.57754 0 4.39972 1.14086 3.02557 3.12964C1.65816 5.10838 1.34243 7.61351 2.17929 9.82677C2.40313 10.4312 2.75894 11.0184 3.23433 11.5687L8.52105 17.7784C8.64062 17.919 8.8158 18 9.0002 18C9.18459 18 9.35978 17.919 9.47934 17.7784L14.7646 11.5703C15.2421 11.0169 15.5974 10.4303 15.8194 9.83078C16.658 7.61351 16.3422 5.10838 14.9748 3.12964ZM14.6408 9.38999C14.4697 9.85257 14.1902 10.3099 13.8107 10.7498C13.8096 10.7509 13.8086 10.7519 13.8077 10.7532L9.0002 16.3999L4.1897 10.7497C3.8104 10.3101 3.53094 9.85282 3.35808 9.38581C2.66599 7.55539 2.92864 5.48413 4.06088 3.84546C5.19668 2.20155 6.9971 1.25873 9.0002 1.25873C11.0033 1.25873 12.8035 2.20152 13.9393 3.84546C15.0718 5.48413 15.3346 7.55539 14.6408 9.38999Z" fill="currentColor"></path>
                                                <path d="M9.00019 3.73438C7.0569 3.73438 5.47571 5.31535 5.47571 7.25886C5.47571 9.20237 7.05668 10.7833 9.00019 10.7833C10.9437 10.7833 12.5247 9.20237 12.5247 7.25886C12.5247 5.31556 10.9435 3.73438 9.00019 3.73438ZM9.00019 9.52457C7.75088 9.52457 6.73444 8.50814 6.73444 7.25882C6.73444 6.00951 7.75088 4.99307 9.00019 4.99307C10.2495 4.99307 11.2659 6.00951 11.2659 7.25882C11.2659 8.50814 10.2495 9.52457 9.00019 9.52457Z" fill="currentColor"></path>
                                            </svg>

                                            <div className={cls.city}>London, UK</div>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                            <div class="row gx-0">
                                <div class="col-auto">
                                </div>

                                <div class="col">
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item lg={4} md={6} xs={12}>
                        <Post />
                    </Grid>
                    <Grid item lg={4} md={6} xs={12}>
                        <Post />
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default NewsThree