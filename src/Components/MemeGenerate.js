import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useEffect, useState } from 'react';
import "./memeGen.css"

export default function MemeGenerate(){
    const [formData, setFormData] = useState({
        toptext:"",bottomtext:""
    })
    const[memeData, setMemeData] = useState([])
    const [memeImage, setMemeimage] = useState('https:\/\/i.imgflip.com\/30b1gx.jpg')

    useEffect(()=>{
        fetch('https://api.imgflip.com/get_memes')
        .then(res=> res.json())
        .then(data=> setMemeData(data.data.memes))
        //.then(data=> console.log(data))
    },[])

    function handleClick(e){
        e.preventDefault()
        const randomNum = Math.floor(Math.random()* memeData.length)
        const randomImg = memeData[randomNum].url
        setMemeimage(randomImg)
        //console.log(randomImg)
    }
    
    function handleChange(event){
        //console.log('triggered')
        const {name, value} = event.target;
        setFormData(prev =>{
            return{
                ...prev,[name]: value
            }
        }
            )
    }


    return(
        <div className='all-sec'>
            <Form className='form-style'>
                <input 
                type="text"
                name="toptext"
                placeholder="Top Text"
                onChange={handleChange}
                value={formData.toptext}
                />
                <input 
                type="text"
                name="bottomtext"
                placeholder="Bottom Text"
                onChange={handleChange}
                value={formData.bottomtext}
                />
                <Button variant="primary" onClick={handleClick}>New Image</Button>
            </Form>
            <div className='meme'>
                <h1 className='top-text'>{formData.toptext}</h1>
                <img className='image' src={memeImage} alt=''/>
                <h1 className='bottom-text'>{formData.bottomtext}</h1>
            </div> 
        </div>
    )
}