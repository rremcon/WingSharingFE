import React, { useState, useEffect } from 'react';
import axios from "axios";
import LogoRotating from "../components/Logo/LogoRotating";
import logo from "../assets/wingsharing-propellor-640x480.png";
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from '../data';
import './Community.css';


const CommunityFeed = () => {

    const [people, setPeople] = useState(data);
    const [index, setIndex] = React.useState(0);

    const [posts, setPosts] = useState([]);
    const FACEBOOK_PAGE_ID = "100064477762886";  // Vervang door jouw FACEBOOK-pagina-ID
    const ACCESS_TOKEN_FACEBOOK = "EAAJMYBAfLfkBO1AVEBf1T3K12HDwLVx3vTzzXaDxKEZCYiA9S8tqgZC9uiZAZCrf0VQhOwhnKXwb8hpAqlD99ClkzoCso8P6XJMjD1XEu3nRNlTXonJEZBp1jWnZCsNqX3IcxqZBURPTUQG4VkSe0JFoaahm4bCz62tbke0cAijkg9ZCvMaI7P2UB9si5ZCYtWmvlIZBZAiBG4z0H5y4piB1Da1tcwiaV2FPWznTq5nOjoUXkFisQw9u2a5scR8uORbuZA7mJA3J4tBrZChAZD"; // Verkrijg facebook_access_token van Meta Graph API

    const INSTAGRAM_BUSINESS_ID = "jouw_instagram_business_id"; // Verkrijg via Graph API
    const ACCESS_TOKEN_INSTAGRAM = "jouw_instagram_access_token";


    useEffect(() => {
            const fetchFacebookFeed = async () => {
                try {
                    const response = await axios.get(
                        `https://graph.facebook.com/v17.0/${FACEBOOK_PAGE_ID}/posts?fields=message,created_time,full_picture,permalink_url&access_token=${ACCESS_TOKEN_FACEBOOK}`
                    );
                    setPosts(response.data.data);
                } catch (error) {
                    console.error("ERROR_Facebook-feed:", error);
                }
            };

            fetchFacebookFeed();
        }, []);




        useEffect(() => {
            const fetchInstagramFeed = async () => {
                try {
                    const response = await axios.get(
                        `https://graph.facebook.com/v17.0/${INSTAGRAM_BUSINESS_ID}/media?fields=id,caption,media_url,permalink&access_token=${ACCESS_TOKEN_INSTAGRAM}`
                    );
                    setPosts(response.data.data);
                } catch (error) {
                    console.error("ERROR_Instagram-feed:", error);
                }
            };

            fetchInstagramFeed();
        }, []);




    useEffect(() => {
        const lastIndex = people.length - 1;

        if (index < 0) {
            setIndex(lastIndex);
        }

        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, people]);


    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 5000);

        return () => {
            clearInterval(slider);
        };
    }, [index]);








    return (

        <>

            <main className="outer-content-container">
                <div className="inner-content-container">

                    <LogoRotating
                        className="App-logo-small"
                        img={logo}
                        imgTitle="logo"
                    />

                    <h1 className="page-title">Transforming aviation together.</h1>

                    <section className="section">

                        <div className="section-center">
                            {people.map((person, personIndex) => {
                                const { id, image, name, title, quote } = person;

                                let position = 'nextSlide';

                                if (personIndex === index) {
                                    position = 'activeSlide';
                                }

                                if (
                                    personIndex === index - 1 ||
                                    (index === 0 && personIndex === people.length - 1)
                                ) {
                                    position = 'lastSlide';
                                }

                                return (
                                    <article className={position} key={id}>
                                        <img src={image} alt={name} className="person-img" />
                                        <h4>{name}</h4>
                                        <p className="title">{title}</p>
                                        <p className="text">{quote}</p>
                                        <FaQuoteRight className="icon" />
                                    </article>
                                );
                            })}
                            <button className="prev" onClick={() => setIndex(index - 1)}>
                                <FiChevronLeft />
                            </button>
                            <button className="next" onClick={() => setIndex(index + 1)}>
                                <FiChevronRight />
                            </button>
                        </div>
                    </section>



                    <div>
                        <h2>Facebook Feed...</h2>
                        <ul>
                            {posts.map((post) => (
                                <li key={post.id}>
                                    <p>{post.message}</p>
                                    {post.full_picture && <img src={post.full_picture} alt="Post" />}
                                    <a href={post.permalink_url} target="_blank" rel="noopener noreferrer">
                                        Bekijk op Facebook
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>


                    <div>
                        <h2>Instagram Feed...</h2>
                        <ul>
                            {posts.map((post) => (
                                <li key={post.id}>
                                    {post.caption && <p>{post.caption}</p>}
                                    <img src={post.media_url} alt="Instagram Post" />
                                    <a href={post.permalink} target="_blank" rel="noopener noreferrer">
                                        Bekijk op Instagram
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>


                </div>

            </main>

        </>


    );
}


export default CommunityFeed;