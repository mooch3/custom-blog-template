import { useRouter } from 'next/router';
import classes from './SliderTile.module.css';
import TileInfo from './TileInfo';

const SliderTile = (props) => {
    const router = useRouter();
    
    const showPostHandler = () => {
        router.push(`/${props.id}`)
    }
    
    return (
        <div onClick={showPostHandler} className={classes['slider-tile']}>
            <TileInfo
                category={props.category}
                title={props.title}
                date={props.date}
            />
        </div>
    )
}

export default SliderTile;