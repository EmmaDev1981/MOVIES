import { enqueueSnackbar } from 'notistack'


function useNotiStackUtil(message) {
    const messageSnack = message || 'Your notification here';
    enqueueSnackbar(messageSnack, {
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
        }
    })
}

export default useNotiStackUtil