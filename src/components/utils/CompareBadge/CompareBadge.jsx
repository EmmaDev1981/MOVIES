import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import BarChartIcon from '@mui/icons-material/BarChart';
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
// import useNotiStackUtil from '../../hooks/useNotiStackUtil'

const CompareBadge = () => {

  const compItems = useSelector((state) => state.reducer.compareMovies?.length)
  const navigate = useNavigate()

  const handleCompClick = () => {
     navigate('/compares')
  }

  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={compItems} color="success">
        <BarChartIcon cursor ='pointer' color="info" fontSize="large" onClick={handleCompClick}/>
      </Badge>
    </Stack>
  );
}

export default CompareBadge;