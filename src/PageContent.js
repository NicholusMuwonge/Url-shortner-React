import React, { Fragment, useState} from 'react';
import axios from 'axios';
import icon from './images/icon-detailed-records.svg';
import graphs from './images/icon-detailed-records.svg';
import bars from './images/icon-fully-customizable.svg';
import worker from './images/illustration-working.svg';


const Content = () =>{
    const [data, postfunction] = useState({url:''})
    const [initialButtonState, ButtonUpdater] = useState(false)
    const [submitButton, submitterFunction] = useState(false)
    
    const inputRef = React.createRef();
    const postUrl = 'https://rel.ink/api/links/';
    const concatUrl = 'https://rel.ink/'
    const makePost= () =>(
        axios.post(postUrl,{url: inputRef.current.value}).then(
        result => {
            if(!result.data){
                result = {
                    'error': 'not found'
                }
                console.log(result)
            }
            postfunction(result.data)
            
        }
    ).catch(
        err => console.log(err)
    ))


    const handleSubmit=()=>{
        makePost();
        setTimeout(()=> {
            submitterFunction({...submitButton, submitButton:true})
        }, 1500)
        
    }
    
    const handleButtonClick = () => {
        const copied = {...initialButtonState, initialButtonState:true}
        ButtonUpdater(copied)
    }

    const copyToClipBoard = () => {
        
        const Copy = document.getElementById('finishedurl').innerHTML;
        const newField = document.getElementsByTagName('body')[0];
        const inputField = document.createElement('INPUT');
        newField.appendChild(inputField) 
        inputField.setAttribute('value', Copy);
        inputField.select();
        document.execCommand('copy');
        newField.removeChild(inputField);
        handleButtonClick()
    }


    const handleChange = (e) => {
        e.persist();
        postfunction({...data, url:inputRef.current.value})
        }
    
    const DisplayTiles = (props) => (
        <div class="card col-md-3 mr-auto" id="cardstyle" style={{width:'18rem'}}>
                    <div class="card-body">
                        <br/>
                        <img class="img-fluid" src={props.image} />
                        <br/><br/>
                        <h5 class="card-title">{props.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted"></h6>
                        <br/>
                        <p 
                        class="card-text align-right text-muted muted">
                            {props.text}</p>
                    </div>
            </div>
    )

    return (
    <Fragment>
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
            src={worker} alt=""/></div>
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
                onClick={handleSubmit}
                id='shorten'>Shorten It !</button>
        </div>
        
        <div class='container list-inline' style={{visibility:(submitButton==false)?'hidden':'visible'}}id='searchbox1'>
                <span class="list-inline-item" 
                style={{fontWeight:'bolder'}}>{data['url']}</span>
                <span class="list-inline-item" id='finishedurl' 
                style={{color:'rgb(63, 204, 204)', fontWeight:'900px'}}>{concatUrl + data['hashid']}</span>
                <button 
                className="copy float-right list-inline-item btn btn-info log" 
                id='shorten'
                style={{
                    backgroundColor:(initialButtonState)?'black':'',
                    color:(initialButtonState)?'white':''
                }}
                onClick={copyToClipBoard}
                >{!initialButtonState?'Copy':'Copied'}</button>
        </div>
        
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
            < DisplayTiles 
            image={icon}
            title='Brand Recognition'
            text='Boost your brand recognitionwith each click. Generic links dont mean a thing.Branded links help instill confidence in the content'
            />
            <DisplayTiles
            image={graphs}
            title={'Detailed Records'}
            text='Boost your brand recognitionwith each click. Generic links dont mean a thing.
            Branded links help instill confidence in the content' />

            <DisplayTiles 
            image={bars}
            title='Fully Customisable'
            text='Boost your brand recognitionwith each click. Generic links dont mean a thing.
            Branded links help instill confidence in the content' />
        </div>
    </div>
    <div class="container-fluid info">
    </div>
    </Fragment>
    )
};

export default Content;