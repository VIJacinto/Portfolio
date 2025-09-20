//------------HOMEPAGE SCRIPT---------------
function contactNumber() {
    alert ("Contact information is solely based on the phone number that I have \n phone number: 09282231400");
  }

document.addEventListener('DOMContentLoaded', function() {
  const navMenu = document.querySelector('.nav-menu');
  const navButtons = document.querySelector('.nav-buttons');
  
  
  const hamburger = document.createElement('div');
  hamburger.innerHTML = '<span></span><span></span><span></span>';
  hamburger.className = 'hamburger';
  hamburger.onclick = toggleMenu;
  
  const nav = document.querySelector('nav');
  nav.insertBefore(hamburger, nav.firstChild);
  
  function toggleMenu() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  }
  
  function checkScreenSize() {
    if (window.innerWidth <= 780) {
      navMenu.style.display = 'none';
      navButtons.style.display = 'block';
      hamburger.style.display = 'block';
      
      const navLinks = document.querySelectorAll('.navdetail');
      navLinks.forEach(link => {
          link.style.display = 'none';
      });
    } else {
      navMenu.style.display = 'flex';
      navButtons.style.display = 'flex';
      hamburger.style.display = 'none';

      const navLinks = document.querySelectorAll('.navdetail');
      navLinks.forEach(link => {
          link.style.display = 'block';
      });
    }
  }
    checkScreenSize();
    
    window.addEventListener('resize', checkScreenSize);
});

//-------------ACHIEVEMENTS----------------
function pindotBaba() {
    const content = document.getElementById('dropdownContent');
    const arrow = document.getElementById('arrow');
    
    content.classList.toggle('active');
    
    if (content.classList.contains('active')) {
        arrow.style.transform = 'rotate(180deg)';
    } else {
        arrow.style.transform = 'rotate(0deg)';
    }
}

//-------------MINIGAME----------------
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };

  updateScoreElement();

  function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
        result = 'You lose.';
      } else if (computerMove === 'paper') {
        result = 'You win.';
      } else if (computerMove === 'scissors') {
        result = 'Tie.';
      }

    } else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
        result = 'You win.';
      } else if (computerMove === 'paper') {
        result = 'Tie.';
      } else if (computerMove === 'scissors') {
        result = 'You lose.';
      }
      
    } else if (playerMove === 'rock') {
      if (computerMove === 'rock') {
        result = 'Tie.';
      } else if (computerMove === 'paper') {
        result = 'You lose.';
      } else if (computerMove === 'scissors') {
        result = 'You win.';
      }
    }

    if (result === 'You win.') {
      score.wins += 1;
    } else if (result === 'You lose.') {
      score.losses += 1;
    } else if (result === 'Tie.') {
      score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML 
    = `You <img src="images/${playerMove}-emoji.png" class="move-icon">
      Computer <img src="images/${computerMove}-emoji.png" class="move-icon">`;
  }

  function updateScoreElement() {
    document.querySelector('.js-score')
      .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }

  function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'scissors';
    }

    return computerMove;
  }

//-------------ENDBURGER----------------
function toggleMenu() {
		const hamburgerBtn = document.querySelector('.hamburger-btn');
		const navMenu = document.getElementById('navMenu');
		const overlay = document.getElementById('overlay');
		
		hamburgerBtn.classList.toggle('active');
		navMenu.classList.toggle('active');
		overlay.classList.toggle('active');
	}

	function closeMenu() {
		const hamburgerBtn = document.querySelector('.hamburger-btn');
		const navMenu = document.getElementById('navMenu');
		const overlay = document.getElementById('overlay');
		
		hamburgerBtn.classList.remove('active');
		navMenu.classList.remove('active');
		overlay.classList.remove('active');
	}

		document.querySelectorAll('.nav-menu a').forEach(link => {
		link.addEventListener('click', closeMenu);

	});
