module.exports = {
  root: true,
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-prettier",
    "stylelint-config-property-sort-order-smacss",
  ],
  rules: {
    "selector-max-id": 1,
    "order/properties-alphabetical-order": null,
  },
};
