import React, { Fragment, useEffect, useState, useRef } from 'react';
import axios from 'axios';

// AIzaSyBKcrtVLt_-5NAtEAf-y1rzlL7AtPauC0s
const Content = () =>{
    const [data, postfunction] = useState({url:''})
    const [store, storeUpdater] = useState([])
    const [urlList, listUpdater] = useState([])
    const inputRef = React.createRef();
    const postUrl = 'https://rel.ink/api/links/';
    const makePost= () =>(
        axios.post(postUrl,{url: inputRef.current.value}).then(
        result => {
            if(!result.data){
                result = {
                    'error': 'not found'
                }
            }
            postfunction(result.data)
            console.log(result.data, 'this is the data');
        }
    ).catch(
        err => console.log(err)
    ))

    console.log(urlList)
    const handleChange = (e) => {
        e.persist();
        postfunction({...data, url:inputRef.current.value})

    }

    return (<Fragment>
    <div class="container">
        <div class="row" id='intro'>
        <div class="col-md-6 col-sm-pull-6">
            <h3 class="display-4" id='heading'>More than Just <br/> shorter links </h3>
            <br/>
            <div class="lead mb-0" id="description">build your brand's recognition and get detailed
            insights on how your links are performing.
            </div>
        </div>
        <div class="col-md-6 col-sm-push-6" >
            <img 
            class='img-fluid' 
            src="./images/illustration-working.svg" alt=""/></div>
        </div>
        <br/>
        <div class="started ">
        <button class="btn btn-info " id="start" >Get Started</button>
        </div>
        <br/>
        <br/>
        <div class='container' id='searchbox'>
                <input 
                class="url" type="text" 
                placeholder="https://example.com"
                ref={inputRef}
                name='url'
                value={data.url}
                onChange={handleChange}
                pattern="https?://.+" 
                required
                />
                <button class=" 
                btn btn-info log" 
                onClick={makePost}
                id='shorten'>Shorten It !</button>
        </div>
        {/* {
            data.map((item,index) =>(
                <div class='container list-inline' id='searchbox1' key={index}>
                    <span class="list-inline-item" >{item['inputUrl']}</span>
                    <span class="list-inline-item" id='finishedurl'>{item['url']}</span>
                <button class="float-right list-inline-item btn btn-info log" id='shorten'>Copy</button>
        </div>
            ))
        } */}
        <div class='container list-inline' id='searchbox1'>
                <span class="list-inline-item">{data['url']}</span>
                <span class="list-inline-item" id='finishedurl'>{postUrl + data['hashid']}</span>
                <button class="float-right list-inline-item btn btn-info log" id='shorten'>Copy</button>
        </div>
        {/* <br/>
        <br/><br/>
        <div class='container list-inline col-md-12 col-sm-12' id='searchbox1'>
                <span class="list-inline-item">somesomesomesomesomesomesomesomesome</span>
                <span class="list-inline-item" id='finishedurl'>somesomesomesomesomesomesomes</span>
                <button class="float-right list-inline-item btn btn-info log" id='shorten'>Copy</button>
        </div>
        <br/> */}
        <br/><br/>
        <div class="container justify-content-center advanced">
        <h3 class="text-center stats">Advanced Statistics</h3>
        <br/>
        <div class="lead text-center" id="description">
            Track how your links are performing across the web<br/>
                our advanced Statistics dashbord.
            </div>
        </div>
        <div class="container row" id='tiles'>
            <div class="card col-md-3 mr-auto" id="cardstyle" style={{width:'18rem'}}>
                    <div class="card-body">
                        <br/>
                        <img class="img-fluid" src="./images/icon-brand-recognition.svg" />
                        <br/><br/>
                        <h5 class="card-title">Brand Recognition</h5>
                        <h6 class="card-subtitle mb-2 text-muted"></h6>
                        <br/>
                        <p class="card-text align-right text-muted muted">Boost your brand recognitionwith each click. Generic links dont mean a thing.
                            Branded links help instill confidence in the content</p>
                    </div>
            </div>
            <div class="card col-md-3 mr-auto" id="cardstyle" style={{width:'18rem'}}>
                    <div class="card-body">
                        <br/>
                        <img class="img-fluid" src="./images/icon-detailed-records.svg" />
                        <br/><br/>
                        <h5 class="card-title">Detailed Records</h5>
                        <h6 class="card-subtitle mb-2 text-muted"></h6>
                        <br/>
                        <p class="card-text align-right text-muted muted">Boost your brand recognitionwith each click. Generic links dont mean a thing.
                            Branded links help instill confidence in the content</p>
                    </div>
            </div>
            <br/>
            <div class="card col-md-3 mr-auto" id="cardstyle" style={{width:'18rem'}}>
                    <div class="card-body">
                        <br/>
                        <img class="img-fluid" src="./images/icon-fully-customizable.svg" />
                        <br/><br/>
                        <h5 class="card-title">Brand Recognition</h5>
                        <h6 class="card-subtitle mb-2 text-muted"></h6>
                        <br/>
                        <p class="card-text align-right text-muted muted">Boost your brand recognitionwith each click. Generic links dont mean a thing.
                            Branded links help instill confidence in the content</p>
                    </div>
            </div>
        </div>
    </div>
    <div class="container-fluid info">
    </div>
    </Fragment>)
};

export default Content;