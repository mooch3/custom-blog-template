import classes from './TileInfo.module.css';

const TileInfo = ({ title, date, category }) => {
    return (
        <div className={classes.info}>
            <h1>{title.toUpperCase()}</h1>
            <p>{date}</p>
            <p>- {category} -</p>
        </div>
    )
}

export default TileInfo;