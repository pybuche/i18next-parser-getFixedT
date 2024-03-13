# Reproduction of `getFixedT` missing the namespace while extracting translations

## Run
```shell
	yarn
	yarn i18next
```

You should see the translations keys in `getFixedT.js` go in the default namespace (`common`) instead of the one specified in `getFixedT`.