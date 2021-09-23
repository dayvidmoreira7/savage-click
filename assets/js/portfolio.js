const groups = {
  // design: { label: 'Design', size: 5, ext: 'png' },
  'hip-hop': { label: 'Hip Hop', size: 4, ext: 'jpg' },
  lifestyle: { label: 'Lifestyle', size: 5, ext: 'jpg' },
  projeto: { label: 'Projeto Solidário', size: 5, ext: 'jpg' },
}
const keys = Object.keys(groups);
const images = [];

for (const key of keys) {
  const { label, size, ext } = groups[key];
  document.getElementById('portfolio-flters').innerHTML += `<li data-filter=".filter-${key}">${label}</li>`;

  for (let x = 1; x <= size; x++) {
    images.push(`
<div class="col-lg-4 col-md-6 portfolio-item filter-${key}">
  <div class="portfolio-wrap">
    <img src="assets/img/${key}/${key}-${x}.${ext}" class="img-fluid" alt="">
    <div class="portfolio-links">
      <a href="assets/img/${key}/${key}-${x}.${ext}" data-gallery="portfolioGallery" class="portfolio-lightbox"><i class="bx bx-plus"></i></a>
    </div>
  </div>
</div>
    `);
  }
}

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}
shuffleArray(images);
document.getElementById('portfolio-container').innerHTML = images.toString().replace(/,/g, '');