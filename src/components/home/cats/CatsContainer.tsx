import { useAppcontext } from '../../../hooks/useAppcontext'
import CatItem from './CatItem';
import './styles.css'

const CatsContainer: React.FC = () => {
  const { state } = useAppcontext();

    return (
        <div className="cats-component_container">
          {state.cat.cats.map((cat) => {
            const isFavourite = state.cat.favouriteCats.includes(cat.id)

            return (
              <CatItem key={cat.id} id={cat.id} tags={cat.tags} isFavourite={isFavourite} />
            );
          })}
        </div>
    )
}

export default CatsContainer;