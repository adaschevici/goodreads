export default {
  actionButtons: [
    {
      id: 'edit',
      numeric: false,
      align: false,
      disablePadding: false,
      label: 'Edit',
    },
    {
      id: 'delete',
      numeric: false,
      align: false,
      disablePadding: false,
      label: 'Delete',
    },
  ],
  addButton: {
    id: 'add',
    numeric: false,
    align: false,
    disablePadding: false,
    label: 'Add',
    span: 2,
  },
  sortableColumns: [
    { id: 'isbn', numeric: true, disablePadding: false, label: 'ISBN' },
    { id: 'isbn13', numeric: true, disablePadding: false, label: 'ISBN13' },
    { id: 'authors', numeric: false, disablePadding: false, label: 'Author' },
    {
      id: 'original_title',
      numeric: false,
      disablePadding: false,
      label: 'Title',
    },
    {
      id: 'original_publication_year',
      numeric: true,
      disablePadding: false,
      label: 'Year',
    },
    {
      id: 'average_rating',
      numeric: false,
      disablePadding: false,
      label: 'Star Rating',
    },
    {
      id: 'language_code',
      numeric: false,
      disablePadding: false,
      label: 'Language',
    },
    {
      id: 'small_image_url',
      numeric: false,
      disablePadding: false,
      label: 'Thumbnail',
    },
  ],
}
