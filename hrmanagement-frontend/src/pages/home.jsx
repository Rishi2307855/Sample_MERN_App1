import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
function Home() {
    return (
        <div>
          <div id="carouselExampleFade" class="carousel carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} class="d-block w-100 rounded-5" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100 rounded-5" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100 rounded-5" alt="..."></img>2
    </div>
  </div>
  <div>
    <button class="btn-icon btn-sm" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span class="carousel-icon-prev" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="btn-icon btn-sm" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span class="carousel-icon-next" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</div>
        </div>
    );
}

export default Home;