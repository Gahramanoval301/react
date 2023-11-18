import { Button, Stack, IconButton, ButtonGroup } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import './App.css'

function App() {

  return (
    <>
      <Stack flexDirection={'row'} gap={2}>
        <Button variant='contained' color={'secondary'}>  Salam </Button>
        <Button variant='outlined' disableRipple>  Like </Button>
        <Button variant='text' startIcon={<DeleteIcon />}>  Sagol </Button>
        <IconButton aria-label='add to cart'>
          <DeleteIcon />
        </IconButton>
        <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
          Upload file
        </Button>
      </Stack>
      {/* !  button group */}
      <ButtonGroup variant="contained" aria-label="outlined primary button group" orientation='vertical'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </>
  )
}

export default App
