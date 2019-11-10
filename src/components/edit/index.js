import React, { Fragment } from 'react'
import Paper from '@material-ui/core/Paper'
import withStyles from '@material-ui/core/styles/withStyles'
import { Formik } from 'formik'
import { withRouter } from 'react-router'
import validationSchema from './schema'
import styles from './styles'
import Form from './form'

const EditBook = ({ classes, history }) => {
  const locationState = history.location.state
  const { book } = locationState ? locationState : {}
  return (
    <Fragment>
      <div className={classes.container}>
        <Paper elevation={1} className={classes.paper}>
          <h1>Book Editing Form for book id {book.id}</h1>
          <Formik initialValues={book} validationSchema={validationSchema}>
            {fields => <Form {...fields} />}
          </Formik>
        </Paper>
      </div>
    </Fragment>
  )
}

export default withRouter(withStyles(styles)(EditBook))
