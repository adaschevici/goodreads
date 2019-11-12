import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper'
import withStyles from '@material-ui/core/styles/withStyles'
import { Formik } from 'formik'
import { withRouter } from 'react-router'
import validationSchema from './schema'
import styles from './styles'
import Form from './form'
import payload from '../../components/app/payload'
import { editBook, addBook } from './actions'

const getAction = (book, action, history, props) => {
  const { editBook, addBook } = props
  switch (action) {
    case 'edit':
      return values => editBook(`/books/${book.id}`, values, history)
    default:
      return values => addBook('/books/', values, history)
  }
}

const EditBook = ({ classes, history }, props) => {
  const locationState = history.location.state
  const { book, action } = locationState ? locationState : payload
  const formHandler = getAction(book, action, history, props)
  return (
    <Fragment>
      <div className={classes.container}>
        <Paper elevation={1} className={classes.paper}>
          <h1>Book Editing Form for book id {book.id}</h1>
          <Formik
            initialValues={book}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                formHandler(values)
                setSubmitting(false)
              }, 50)
            }}
          >
            {fields => <Form {...fields} />}
          </Formik>
        </Paper>
      </div>
    </Fragment>
  )
}
const mapDispatchToProps = dispatch => ({
  addBook: (url, values, history) => dispatch(addBook(url, values, history)),
  editBook: (url, values, history) => dispatch(editBook(url, values, history)),
})

export default connect(
  null,
  mapDispatchToProps
)(withRouter(withStyles(styles)(EditBook)))
