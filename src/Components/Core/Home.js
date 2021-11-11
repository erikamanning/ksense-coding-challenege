import React from "react"
import { Link } from "react-router-dom"

const Home = () => {

    return (

        <div className='has-text-centered'>
            <section className="hero">
                <div className="hero-body">
                    <p className="title">
                    Hi! My name is Erika.
                    </p>
                    <p className="subtitle">
                    Thanks for taking a look at my app! I had a lot of fun making it :)
                    </p>
                    <Link to="/users">Click Here to View Users</Link>

                </div>
            </section>
        </div>

    )
}

export default Home;