# Evil Sort

> Note: this is a joke/meme package

From [the depths](https://x.com/reynaldicher/status/1867236316699902331) of [unhinged software devs](https://x.com/i/communities/1849865844442149244), I bring you the horror:

```js
import sort from 'evil-sort';

const unsorted = [8, 42, 38, 111, 2, 39, 1];
const sorted = await sort(unsorted);
console.log(sorted);
// [1, 2, 8, 38, 39, 42, 111]
```

It's doing this basically:

```js
export default async function sort(numbers) {
  const sorted = [];

  await Promise.all(
    numbers.map(async (n) => {
      return new Promise((done) => {
        setTimeout(() => done(sorted.push(n)), n);
      });
    }),
  );

  return sorted;
}
```

But hey, it has 3 tests!
