class View {
  //   #parentEl = document.querySelector("main");
  #adviceTitle = document.querySelector(".advice__title");
  #adviceText = document.querySelector(".advice__text");
  #adviceBtn = document.querySelector(".btn");
  render = function (advice) {
    this.#adviceTitle.textContent = `Advice #${advice.id}`;
    this.#adviceText.textContent = `"${advice.text}"`;
  };
  handleBtn = function (handler) {
    this.#adviceBtn.addEventListener("click", handler);
  };
}

export default new View();
