import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import useNotiStackUtil from '../../hooks/useNotiStackUtil'

const ColorBadge = () => {

  const favItems = useSelector((state) => state.favorites.length)
  const navigate = useNavigate()

  const handleFavClick = () => {
    if(favItems < 1) {
      useNotiStackUtil("Nada en Favoritos...", "warning")
      return
    } else {
     navigate('./favorites')
    }
  }

  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={favItems} color="success">
        <FavoriteIcon color="error" fontSize="large" onClick={handleFavClick}/>
      </Badge>
    </Stack>
  );
}

export default ColorBadge;