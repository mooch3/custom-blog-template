import { useRouter } from 'next/router';
import classes from './SliderTile.module.css';
import TileInfo from './TileInfo';
// TODO: There should only be 1 tile. There is no need for sliderTiles and normal tiles
const SliderTile = (props) => {
    const router = useRouter();
    
    const showPostHandler = () => {
        router.push(`/${props.id}`)
    }
    
    return (
        <div onClick={showPostHandler} className={classes['slider-tile']} style={{backgroundImage: `url(${props.image})`}}>
            <TileInfo
                category={props.category}
                title={props.title}
                date={props.date}
            />
        </div>
    )
}

export default SliderTile;