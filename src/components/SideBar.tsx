import { Button } from './Button';

import '../styles/sidebar.scss';

interface genreProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}
interface SideBarProps {
  genres: genreProps[];
  selectedGenreId: number;
  handleClickButton: (id: number) => void;
}

export function SideBar(props: SideBarProps) {
  // Complete aqui
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            selected={props.selectedGenreId === genre.id}
            onClick={() => props.handleClickButton(genre.id)}
          />
        ))}
      </div>

    </nav>
  );
}