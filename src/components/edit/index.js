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
import { editBook } from './actions'

const EditBook = ({ classes, history, editBook }) => {
  const locationState = history.location.state
  const { book } = locationState ? locationState : payload
  const formHandler = values => editBook(`/books/${book.id}`, values)
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
  editBook: (url, values) => dispatch(editBook(url, values)),
})

export default connect(
  null,
  mapDispatchToProps
)(withRouter(withStyles(styles)(EditBook)))
