// FireWorks
const rockets = [];
const particles = [];

class Particle {
  constructor(x, y) {
    const colors = [
      'red',
      'blue',
      'orange',
      'green',
      'pink',
      'violet'
    ];

    this.x = x;
    this.y = y;
    this.SPEED = Math.random() * 3 + 2;
    this.angle = Math.random() * 2 * Math.PI;
    this.lifeSpan = 300;
    this.vx = Math.cos(this.angle) * this.SPEED;
    this.vy = -Math.sin(this.angle) * this.SPEED;
    this.color =
      colors[parseInt(Math.random() * colors.length)];
    this.el = document.createElement('div');
    this.el.className = 'particle';
    this.el.style.left = this.x + 'px';
    this.el.style.top = this.y + 'px';
    this.el.style.backgroundColor = this.color;
    document.body.appendChild(this.el);

    setTimeout(() => {
      this.el.remove();
      particles.splice(particles.indexOf(this), 1);
    }, this.lifeSpan);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.el.style.left = this.x + 'px';
    this.el.style.top = this.y + 'px';
  }
}

class Rocket {
  constructor() {
    this.x = window.innerWidth / 2;
    this.y = window.innerHeight;
    this.numberOfParticlesToSpawn = 100;
    this.SPEED = 13;
    this.angle =
      (Math.random() * Math.PI) / 2 + Math.PI / 4;
    this.vx = Math.cos(this.angle) * this.SPEED;
    this.vy = -Math.sin(this.angle) * this.SPEED;
    this.el = document.createElement('div');
    this.el.className = 'rocket';
    this.lifeSpan = 600;
    this.el.style.left = this.x + 'px';
    this.el.style.top = this.y + 'px';
    document.body.appendChild(this.el);

    setTimeout(() => {
      this.explode();
      this.el.remove();
      rockets.splice(rockets.indexOf(this), 1);
    }, this.lifeSpan);
  }

  explode() {
    for (
      let i = 0;
      i < this.numberOfParticlesToSpawn;
      i++
    ) {
      const particle = new Particle(this.x, this.y);
      particles.push(particle);
    }
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += 0.2;
    this.el.style.left = this.x + 'px';
    this.el.style.top = this.y + 'px';
  }
}


// Get Elements

const text_hbs = document.querySelectorAll('.text_hb');
const text_names = document.querySelectorAll('.text_name');
const card_childs = document.querySelectorAll('.card_child');
const cards = document.querySelectorAll('.card');
const bubbles = document.querySelector('.bubbles');

card_childs[0].style.backgroundImage = "url('./images/km.jpg')"
card_childs[1].style.backgroundImage = "url('./images/tm.png')"

const cake = document.querySelector('.cake-svg')


// Handle Click
const handleClick = () => {

  let time = 500;
  text_hbs.forEach(h => {
    setTimeout(() => {
      h.classList.add('active')
    }, time)
    time = time + 500;
  })

  setTimeout(() => {
    text_names[0].classList.add('active');
  }, 1200)

  setTimeout(() => {
    bubbles.classList.add('active');
  }, 1500)

  setTimeout(() => {
    cake.classList.add('active')
  }, 1800)

  setTimeout(() => {
    cards[0].classList.add('active-1');
    cards[1].classList.add('active-2');
  }, 2500)

  setInterval(() => {
    const rocket = new Rocket();
    rockets.push(rocket);
  }, 150);

  setInterval(() => {
    rockets.forEach(rocket => {
      rocket.update();
    });
    particles.forEach(particle => {
      particle.update();
    });
  }, 10);

}

// Clicked - Hold
let duration = 1600,
  success = button => {
    //Success function
    button.classList.add('success');
  };

const btnHold = document.querySelector('.button-hold');
const btnCock = document.querySelector('.button-cock');

btnHold.addEventListener('click', () => {
  btnHold.style.setProperty('--duration', duration + 'ms');
  btnHold.classList.add('process');
  btnHold.timeout = setTimeout(success, duration, btnHold);

  setTimeout(() => {
    btnHold.style.opacity = 0;
    btnHold.style.transition = "all 1s ease";
  }, 2300);

  setTimeout(() => {
    btnCock.style.visibility = 'visible';
    btnCock.style.transition = "all 1s ease";
  }, 3500)

  setTimeout(handleClick, 2200);
})


