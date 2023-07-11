import React  from 'react'

const Newsitem =(props)=>{   



        let { title, description, imageurl,newsurl,author,date,source } = props

        return (
            <div className='text-black-500'>
<div style={{position:'absolute',zIndex:1, right:'auto',justifyContent:"flex-end"  }}>            <span style={{width:"auto",top:'30%' }} class="badge bg-danger ">{source}</span>
</div>
                <div className="card my-1 " style={{background:"LAVENDER"}} >

                    <img src={imageurl} className="card-img-top" alt="..." />
                    <div className="card-body">

                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p class="card-text"><small className="text-muted">  By: {author? author : "Unknown"},<br></br> On : {new Date(date).toGMTString()}</small></p>

                        <a href={newsurl} rel="noreferrer" target="_blank"className="btn btn-sm btn-primary d-flex m-4 justify-content-center align-items-center rounded-top hove">Read-More</a>
                    </div>
                </div>
            </div>
        )
    }


export default Newsitem
