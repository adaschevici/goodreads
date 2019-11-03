const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    margin: 'auto 0 ',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(5)}px ${theme.spacing(5)}px ${theme
      .spacing(5)}px`
  },
  container: {
    minWidth: '30rem',
    width: '40vw',
    paddingLeft: '15vw'
  }
})

export default styles
