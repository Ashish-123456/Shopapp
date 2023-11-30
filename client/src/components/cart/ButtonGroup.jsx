import { Box,ButtonGroup,Button,styled } from "@mui/material"

const Component=styled(ButtonGroup)`
    margin-top:30px;
`
const StyledButton=styled(Button)`
    border-radius:50%;

`

const GroupedButton = () => {
  return (
    <Box>
        <StyledButton>-</StyledButton>
        <StyledButton>1</StyledButton>
        <StyledButton>+</StyledButton>
    </Box>
  )
}

export default GroupedButton