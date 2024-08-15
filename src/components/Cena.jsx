import PropTypes from 'prop-types'


export default function Cena (props){
   
    const {id, image, title, summary, link} = props.cena
    return(
        
        <div className="col-md-6 col-lg-4 my-4 row align-items-center"> 
            <div className="col-4">
                <img className="img-fluid" src={`/img/${image}.jpg`} alt={`imagen de ${title}`} />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">{title} </h3>
                <p>{summary} </p>
            </div>
        </div>
    
    )
}

Cena.propTypes = {
    cena: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        summary: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    }).isRequired,
}