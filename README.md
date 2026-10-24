# @x12i/analytix-matrix usage example

Matrix definitions and execution for grouping analytics by row and column dimensions and applying metrics.

This consuming application demonstrates **aggregate synthetic orders into a region and status matrix** using the published npm package, pinned to `1.0.1`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Build a count matrix by two dimensions.
- Add drilldown information to an aggregated matrix result.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/analytix-matrix)
- [Implementation monorepo](https://github.com/x12i/analytix)
- [Reviewed package source](https://github.com/x12i/analytix/tree/cf2ed708652df6f853af877340acc385d17c76f2/packages/analytix-matrix)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## Validation scope

The definitions, outputs, callers, and source data are authored fixtures. Storage is in memory, and model assignment/resolution never invokes a provider. The function example executes only the source written in this repository; the package's Node VM mode is not a security boundary for untrusted code. The service authentication example inspects the demo/default hook and does not constitute a production authentication setup.
