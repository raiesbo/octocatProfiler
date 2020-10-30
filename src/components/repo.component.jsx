import React from 'react';

import colors from './github.colors.js';

import './repo.styles.css';

/*
<h2> {props.monster.name} </h2>
        <p> {props.monster.email} </p>
*/

class Repo extends React.Component{
    render() {
        return(
            <div className="repo">
                <div className="repoTitle">
                <p><i class="fas fa-folder"></i>{" "}{ this.props.repo.name } <a href={this.props.repo.url}><i class="fas fa-external-link-alt b"></i></a></p>
                

                </div>

                <div className="repoDescription">
                    <p>{ this.props.repo.description }</p>
                </div>

                <div className="repoInfo">
                    <div className="bottom">
                        <i class="fas fa-circle"></i> { this.props.repo.language }{" "}
                        <i class="fas fa-star"></i> { this.props.repo.stargazers_count }{" "}
                        <i class="fas fa-code-branch"></i> { this.props.repo.forks }{" "}
                        <span className="b">{ this.props.repo.size }KB</span>
                    </div>
                </div>
                
                {console.log( colors )}
            </div>
        )
    }
}

export default Repo;