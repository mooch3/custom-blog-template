import classes from './TileGrid.module.css';

const TileGrid = (props) => {
    return (
        <div className={classes.grid}>{props.children}</div>
    )
}

export default TileGrid;