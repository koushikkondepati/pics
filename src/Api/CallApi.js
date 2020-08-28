import axios from 'axios';


export default axios.create({baseURL:'https://api.unsplash.com',
                            headers:{
                                Authorization:'Client-ID V75dz5F7iyK5Cr45cin4M4SCRQiOHJHqb0OUzk2gnk0'
                            }
                        });
