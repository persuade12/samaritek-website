import nextCoreWebVitals from "eslint-config-next/core-web-vitals"

/** Relaxed: URL/MQL patterns and shadcn carousel still use common effect idioms. */
const eslintConfig = [
  ...nextCoreWebVitals,
  {
    rules: {
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/purity": "off",
    },
  },
]

export default eslintConfig
