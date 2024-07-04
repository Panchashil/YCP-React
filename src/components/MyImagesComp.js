import React, { Component ,Fragment} from 'react';
import samosa1 from '../shared/images/samosa-1.jfif';
import dosa from '../shared/images/dosa.jfif';
import assets from '../shared/constant/constatData';

 class MyImagesComp extends Component {
    render() {
        return <Fragment>
                 <h2>My images Component</h2>
                <img src={samosa1} alt='samosa'/>
                <img src={dosa} alt='dosa'/>
                <hr />
                <img src={assets.samosa1} alt='samosa'/>
                <img src={assets.samosa2} alt='samosa'/> <br />
                 <video src={assets.video} controls></video>
                 <audio src={assets.ado} controls></audio>
              
            </Fragment>
          
    }
}

export default MyImagesComp
