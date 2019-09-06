import React from "react";

class Home extends React.Component {
    render() {
        return(
            <div className='home'>
            	<iframe src="assets/gh_web/index.html" width="100%" style={{minHeight: '83vh'}} title="game" />
            </div>
        )
    }
}
export default Home;    // Make available for import
