export const state = {
  advice: {
    text: "",
    id: null,
  },
};

export const getJSON = async function () {
  try {
    console.log("test");
    const adviceRes = await fetch("https://api.adviceslip.com/advice");
    const data = await adviceRes.json();
    state.advice.text = data.slip.advice;
    state.advice.id = data.slip.id;
  } catch (err) {
    console.log(err);
  }
};
