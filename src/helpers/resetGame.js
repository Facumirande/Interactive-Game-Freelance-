export const resetGame = (setValidStates, inputCount, setMilliseconds, inputRefs) => {
  // Reinicia los estados de validez
  setValidStates(new Array(inputCount).fill(false));

  // Limpia los valores de los inputs utilizando referencias
  inputRefs.current.forEach(input => {
    if (input) input.value = '';
  });

  // Restablece el temporizador
  setMilliseconds(0);

  // Limpia el localStorage
  localStorage.clear();
};
