import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ColorBadge = () => {
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={9} color="success">
        <FavoriteIcon color="error" fontSize="large"/>
      </Badge>
    </Stack>
  );
}

export default ColorBadge;