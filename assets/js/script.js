document.addEventListener('DOMContentLoaded', (event) => {
  const switch_button = document.getElementsByClassName('lamp-container__switch')[0];
  const lamp_state = document.getElementsByClassName('lamp-container__light')[0];

  switch_button.addEventListener('click', (event) => {
    lamp_state.classList.toggle('lamp-container__light-state-off');
    switch_button.classList.toggle('lamp-container__switch-active');
  });
});
