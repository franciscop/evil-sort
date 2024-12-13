export default async function evilSort(numbers) {
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