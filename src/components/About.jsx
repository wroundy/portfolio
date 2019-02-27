import React, { Component, Fragment } from 'react'

class About extends Component {
    render(){
        return(  
            <Fragment>
                <header className='masthead'>
                    <p className='masthead-intro'>Hi I'm</p>
                    <h1 className='masthead-heading'>William!</h1>
                </header> 
                    <section className="questions-section">
                        <h1>About Me</h1>
                        <h2>Introduction.</h2>
                        <p>I am a student with Helio Training in Draper Utah, I'm 22 years old, I am a full-stack web developer from Springville, UT. I have a passion for technology and the posibilities it opens to us</p>
                        <h2>My Hobbies.</h2>
                        <p>My hobbies include playing guitar, hiking, cycling, painting, and I love spending time in nature.</p>
                        <h2>Where do you live?</h2>
                        <p>I live in Springville, Utah, a small but growing city south of Salt Lake.</p>
                        <h2>What got me into Web Development?</h2>
                        <p>Web Development is an ever growing industry, and there is always new information to learn. I like to be a small fish, in a big pond, and believe there is always room for growth and improvement.</p>
                    </section>
            </Fragment>
        )
    }
}

export default About;