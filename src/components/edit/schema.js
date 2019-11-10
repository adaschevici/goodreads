import * as Yup from 'yup'

const validationSchema = Yup.object({
  original_title: Yup.string('Enter the title').required('A title is required'),
  authors: Yup.string('Enter authors').required('Authors are required'),
  average_rating: Yup.number('Enter average rating').test(
    'test-valid-rating',
    'Must be greater than 1',
    rating => rating > 1
  ),
})

export default validationSchema
