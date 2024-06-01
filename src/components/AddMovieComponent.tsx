
function AddMovieComponent() {
  return (
    <section className="add-movie-section">
        Add Movie Section
        <form className="add-movie-form">
          <input type="text" id="title" placeholder="Enter title..." />
          <input type="text" id="poster-link" placeholder="Enter poster-link" />
          <input type="text" id="trailer-link" placeholder="Enter trailer-link" />
          <button className="add-btn">Add Movie</button>
        </form>
    </section>
  )
}

export default AddMovieComponent
