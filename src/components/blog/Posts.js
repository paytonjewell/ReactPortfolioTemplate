import React from "react";
import { Link } from "react-router-dom";

export function Posts() {
    return( 
        <div className="home">
            <div class="container">
                <Link to="/blog/this-is-a-post-title">
                    <div class="row align-items-center my-5">
                        <div class="col-lg-7">
                            <img
                                class="img-fluid rounded mb-4 mb-lg-0"
                                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.S2vpUy40JdKctkJtqwp5bwHaE7%26pid%3DApi&f=1"
                                alt=""
                            />
                        </div>
                        <div class="col-lg-5">
                            <h1 class="font-weight-light">This Is The Title Of My 1st Post</h1>
                            <p>
                                1st dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy
                                dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy
                                dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
            <div class="container">
                <Link to="/blog/this-is-a-post-title">
                    <div class="row align-items-center my-5">
                        <div class="col-lg-7">
                            <img
                                class="img-fluid rounded mb-4 mb-lg-0"
                                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.S2vpUy40JdKctkJtqwp5bwHaE7%26pid%3DApi&f=1"
                                alt=""
                            />
                        </div>
                        <div class="col-lg-5">
                            <h1 class="font-weight-light">This Is The Title Of My 2nd Post</h1>
                            <p>
                                2nd dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy
                                dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy
                                dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy dummy
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}
