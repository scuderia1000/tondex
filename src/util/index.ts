export const getIcon = (name: string) => require(`../components/assets/svg/${name}.svg`);

export const unique = <T>(array: T[], key: keyof T): T[] => {
  const seen = new Set();
  return array.filter((item: T) => {
    const value = item[key];
    return seen.has(value) ? false : seen.add(value);
  });
};

export const getRandomNumber = (): number => {
  const array = new Uint32Array(1);
  return crypto.getRandomValues(array)[0];
};

export default {
  getIcon,
};
