import classes from './TileInfo.module.css';

const TileInfo = (props) => {
    return (
        <div className={classes.info}>
            <h1>{props.title.toUpperCase()}</h1>
            <p>{props.date}</p>
            <p>- {props.category} -</p>
        </div>
    )
}

export default TileInfo;