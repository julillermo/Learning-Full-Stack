# General notes:

- Generally covers that basics that I've learned hands-on at my professional developer role.
- This chapter covers:
  - How to install Node.js (recommends LTS)
  - What is the `npm` command?
  - What `package.json`?
    - `name` and `version` fields are required
    - Semantic versioning
    - `dependencies` vs. `devDependencies`
    - `package-lock.json` file
  - Creating a project
    - `npm init`
    - `npm audit` and `npm audit fix`
    - `npm prune` - removes unnecessary (unused) packages from thosed installed in `node_modules`
    - `npm update` to update all listed pacakges to the lates acceptable version.
    - `npm uninstall \[package name]`
    - `npm instal`
    - `npx`
      - first check OS environment or local project.

# Specific notes:

- The `package-lock.json` is meant to address the way npm only notes the major versions when installing a fresh project (?). This is somehow meant to address that by allowing npm to create an exact clone of the setup.

# 2026 Revisit Deviations
- Used Hono instead of Express.js.
  - Hono no longer needs the code that "listens" on a specific port. 
  - Instead of `(req, res) => {...}`, Hono uses `(c) => {...}` where `c` likely stands for context.
  - The Node.js template of the hono init script requires node specific pacakges, and it runs typesctipt files via the `tsx` package.
