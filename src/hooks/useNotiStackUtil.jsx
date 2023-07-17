import { enqueueSnackbar } from 'notistack'


function useNotiStackUtil(message, type="default") {
    const messageSnack = message || 'Your notification here';
    enqueueSnackbar(messageSnack, {
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'left',
        },
        variant: type
    })
}

export default useNotiStackUtil