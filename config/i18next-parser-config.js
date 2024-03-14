export default {
  defaultNamespace: "common",
  input: ["../*.js"],
  output: "../locales/$LOCALE/$NAMESPACE.json",
  defaultValue: (_lng, ns, key) => `${ns}_${key}`,
  lineEnding: "after",
  sort: true,
}
