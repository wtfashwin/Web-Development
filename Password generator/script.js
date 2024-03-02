const button = document.getElementById('generate');
const passwordOutput = document.getElementById('show-password');
const passwordLengthInput = document.getElementById('password-length');

// Improved user interaction
const feedbackElement = document.createElement('p'); 
feedbackElement.classList.add('feedback');
feedbackElement.style.display = 'none'; // 
document.body.appendChild(feedbackElement); 
function showFeedback(message, isError = false) {
  feedbackElement.textContent = message;
  feedbackElement.classList.remove(isError ? 'success' : 'error');
  feedbackElement.classList.add(isError ? 'error' : 'success');
  feedbackElement.style.display = 'block';
}

function hideFeedback() {
  feedbackElement.style.display = 'none';
}

// Improved password generation
function generatePassword(length) {
  if (!length || parseInt(length) < 8) {
    showFeedback('Password length must be at least 8 characters.', true);
    return;
  }

  const keywords = [
    'BlackLodge',
    'CherryPie',
    'Coffee',
    'Donut',
    'Diane',
    'LogLady',
    'Owl',
    'Cooper',
    'LeoJohnson',
    'Shelly',
    'TheArm',
    'Doppelganger',
    'Woodsman',
    'JamesHurley',
    'EdHurley',
    'Naido',
    'WallyBrando',
    'Lucy',
    'Andy',
    'SonnyJim',
    'Hawk',
    'LauraPalmer',
    'SheriffTruman',
    'Donna',
    'BenHorne',
    'AudreyHorne',
    'Norma',
    'Bobby',
    'TwinPeaks',
    'DoubleRDiner',
    'RedRoom',
    'DouglasFir',
    'PercolatorFish',
    'GreatNorthern',
    'Dougie',
    'BOB',
    'WindomEarle',
    'Nadine',
    'DeniseBryson',
    'GordonCole',
    'LelandPalmer',
    'Meanwhile',
    'GotALight',
    'OminousWhoosh',
    'OminousScratching',
    'OminousHumming',
    'DrinkFull',
    'ThisIsTheWater',
    'ThisIsTheWell',
    'WhiteOfTheEyes',
    'Garmonbozia',
    'BaldGiant',
    'Population51,201',
  ];

  const specialChars = ['$', '!', '%', '^', '@', '#', '*', '&'];

  const password = [];

  password.push(_.sample(keywords));
  password.push(_.sample(specialChars));
  for (let i = 0; i < length - 2; i++) { // Fill remaining characters
    password.push(_.sample(_.concat(keywords, specialChars, _.range(48, 58)))); // Include lowercase letters (48-57)
  }

  _.shuffle(password);

  return password.join('');
}

button.addEventListener('click', event => {
  event.preventDefault();

  hideFeedback(); // Hide any previous feedback
  const desiredLength = passwordLengthInput.value;

  const generatedPassword = generatePassword(desiredLength);
  if (generatedPassword) {
    passwordOutput.textContent = generatedPassword;
    showFeedback('Password generated successfully!', false);
  }
});
