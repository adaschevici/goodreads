import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

export default props => {
  const {
    isSubmitting,
    handleSubmit,
    values: {
      authors,
      original_title: originalTitle,
      average_rating: avgRating,
    },
    errors,
    handleChange,
    isValid,
  } = props
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="originalTitle"
        name="original_title"
        label="Original Title"
        value={originalTitle}
        helperText={errors.original_title}
        error={Boolean(errors.original_title)}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        id="authors"
        name="authors"
        label="Author"
        value={authors}
        helperText={errors.authors}
        error={Boolean(errors.authors)}
        onChange={handleChange}
        fullWidth
      />
      <TextField
        id="avgRating"
        name="average_rating"
        label="Star Rating"
        value={avgRating}
        helperText={errors.average_rating}
        error={Boolean(errors.average_rating)}
        onChange={handleChange}
        fullWidth
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={!isValid || isSubmitting}
      >
        {isSubmitting ? 'Submitting' : 'Submit'}
      </Button>
    </form>
  )
}
