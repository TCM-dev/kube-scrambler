# Kube Skrambler

Fast and complete 3x3 Rubik's cube scramble generator

This is a work in progress, this package will definitely be improved over time because I need it for another private project

I aim to have a package which can provide me random WCA scrambles easily, but also a bunch of other scrambles by providing some options.

With some options it should be possible to obtain reversed algs as scrambles, going from simply an OLL, to more complex things like
a specific ZBLL with a given family, corner permutation and end rotation.

## Usage

```
import skrambler from "kube-skrambler";

// Returns a random WCA scramble by default
const scramble = skrambler.get()

// B2 D2 L2 B' U2 B L2 R2 D2 L2 R' U2 B' D2 U' F2 R B' R'
console.log(scramble)
```

Note: I am not 100% sure those scrambles are totally WCA legit for now, existing scripts on the web are written by people who like to makes things unreadable,
and I may or may not have taken every "rules" into account right now (in order to have a random state and not random moves scramble), scrambles are still solid for now though.