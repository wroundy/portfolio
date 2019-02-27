import React from 'react';

const Projects = () => {
    return(
        <div className="card-deck">
            <div className="card" >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfePygJQRznTTkq_kIwrmOh_qDYanynSfHr2YV0Kwfsr0C25aptQ" class="card-img-top img-fluid"  alt="..."></img>
                <div className="card-body">
                    <a href="https://github.com/wroundy/Popes-Json/blob/master/src/Data/popes.json" target="_blank" class="btn btn-primary">Popes Json database</a>
                </div>
            </div>
                <br/>
            <div className="card" >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfePygJQRznTTkq_kIwrmOh_qDYanynSfHr2YV0Kwfsr0C25aptQ" class="card-img-top img-fluid" alt="..."></img>
                <div className="card-body">
                    <a href="https://github.com/wroundy/Reactify-Forms" target="_blank" class="btn btn-primary">Simple Sign In Form</a>
                </div>
            </div> 
                <br/>
            <div className="card" >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfePygJQRznTTkq_kIwrmOh_qDYanynSfHr2YV0Kwfsr0C25aptQ" class="card-img-top img-fluid" alt="..."></img>
                <div className="card-body">
                    <a href="https://github.com/wroundy/Tic-Tac-Toe" target="_blank" class="btn btn-primary">Tic-Tac-Toe game</a>
                </div>
            </div>  
                <br/>
            <div className="card" >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfePygJQRznTTkq_kIwrmOh_qDYanynSfHr2YV0Kwfsr0C25aptQ" class="card-img-top img-fluid" alt="..."></img>
                <div className="card-body">
                    <a href="https://github.com/wroundy/IMDB-Practice" target="_blank" class="btn btn-primary">Semantic HTML Practice</a>
                </div>
            </div>       
        </div>

    )
}

export default Projects;