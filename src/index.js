import autoAnimate from "@formkit/auto-animate";

export default function (Alpine) {
  Alpine.directive("autoanimate", (el, { expression }, { evaluate }) => {
    autoAnimate(el, (expression && evaluate(expression)) || {});
  });
}
