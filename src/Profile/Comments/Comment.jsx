import React, { Component } from 'react';
import './Comment.css';
import Image from './../User/Image';
import Name from './../User/Name';

class Comment extends Component {
    render() {
        return (
            <div className="Comment">
                <div className="comment-grid-container">
                    <div className="CommentatorImageContainer">
                        <Image src="https://vignette.wikia.nocookie.net/tabaluga/images/b/b3/Uchu_puchacz.png/revision/latest?cb=20190111084020&path-prefix=pl" sm/>
                    </div>
                    <div className="CommentatorNameContainer">
                        <Name first="Puchacz" last="Uchu" sm/>
                    </div>
                    <div className="CommentDateContainer">
                        <span className="CommentDate">2d</span>
                    </div>
                </div>
                <div className="CommentContent">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium sem ut dignissim egestas. 
                </div>
            </div>
        )
    }
}

export default Comment;