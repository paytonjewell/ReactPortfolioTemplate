import React, { useEffect } from "react";
import { useParams } from "react-router";

function Post() {
    let { postSlug } = useParams();

    useEffect(() => {
        // fetch post
    }, [postSlug])

    return(
        <div className="home">
            <div class="container">
                <h1 className="mt-5">This Is The Title Of My Post</h1>
                <h6 className="mb-5">The post slug is, {postSlug}</h6>
                <p>
                    Dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy
                    dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy
                    dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy       
                </p>
                <p>
                    Dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy
                    dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy
                    dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy       
                </p>
                <p>
                    Dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy
                    dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy
                    dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy       
                </p>
            </div>
        </div>
    );
}

export default Post;
