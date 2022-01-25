const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;

    const increment = target / 300;

    if (target > current) {
      counter.innerText = `${Math.ceil(current + increment)}`;

      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});
