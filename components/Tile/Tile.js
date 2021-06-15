import { useRouter } from 'next/router';
import classes from './Tile.module.css';
import TileInfo from './TileInfo';

const Tile = (props) => {
    const router = useRouter();
    
    const showPostHandler = () => {
        router.push(`/${props.id}`)
    }
    
    return (
        <div onClick={showPostHandler} className={classes.tile} styles={props.style}>
            <TileInfo
                category={props.category}
                title={props.title}
                date={props.date}
            />
        </div>
    )
}

export default Tile;