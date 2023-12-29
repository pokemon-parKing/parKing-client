export const formatPhoneNumber = (input) => {
  const numericInput = input.replace(/\D/g, "");
  const limitedInput = numericInput.slice(0, 10);
  const formattedInput = limitedInput.replace(
    /^(\d{3})(\d{3})(\d{4})$/,
    "($1) $2-$3"
  );
  return formattedInput;
};
